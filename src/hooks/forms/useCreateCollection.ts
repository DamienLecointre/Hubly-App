import { useContext, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTriggerCollectionError } from "../utils/useTriggerCollectionError";
import { AddCollectionContext } from "@/context/AddCollectionContext";

type CreateCollectionResponse =
  | { success: true }
  | { success: false; error: { code: string } };

export function useCreateCollection() {
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const context = useContext(AddCollectionContext);
  if (!context) {
    throw new Error(
      "useCreateCollection must be used within an AddCollectionProvider",
    );
  }

  const {
    selectValue,
    setSelectValue,
    titleValue,
    setTitleValue,
    setCanCreate,
  } = context;

  const { triggerError } = useTriggerCollectionError();

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectValue || !titleValue) {
      triggerError("required");
      return;
    }

    setCanCreate(false);

    try {
      const response = await fetch("/api/addCollection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: selectValue,
          title: titleValue,
        }),
      });

      const data: CreateCollectionResponse = await response.json();

      if (!response.ok) {
        if (!data.success) {
          switch (data.error.code) {
            case "COLLECTION_ALREADY_EXISTS":
              triggerError("already-exists");
              break;
            case "MISSING_FIELDS":
              triggerError("required");
              break;
            default:
              triggerError("server");
          }
        } else {
          triggerError("server");
        }

        return;
      }

      setSelectValue("");
      setTitleValue("");
      setCanCreate(true);

      timeoutRef.current = setTimeout(() => {
        router.replace("/");
        setCanCreate(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      triggerError("server");
    }
  };

  return { handleCreate };
}
