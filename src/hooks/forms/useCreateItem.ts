import { useContext, useRef } from "react";
import { AddItemContext } from "@/context/AddItemContext";
import { useTriggerItemError } from "../utils/useTriggerItemError";
import { useRouter } from "next/navigation";

type CreateItemResponse =
  | { success: true }
  | { success: false; error: { code: string } };

export function useCreateItem() {
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const addItemContext = useContext(AddItemContext);
  if (!addItemContext) {
    throw new Error("useCreateItem must be used within a AddItemProvider");
  }

  const {
    visualContent,
    titleValue,
    setTitleValue,
    authorValue,
    setAuthorValue,
    collectionValue,
    setCollectionValue,
    statusValue,
    setStatusValue,
    tomeValue,
    setTomeValue,
    genreValue,
    setGenreValue,
    noteValue,
    setNoteValue,
    setCanCreate,
  } = addItemContext;

  const { triggerError } = useTriggerItemError();

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", titleValue);
      formData.append("author_artiste", authorValue);
      formData.append("collection_id", collectionValue);
      formData.append("status", statusValue);

      if (tomeValue) formData.append("tome", tomeValue);
      if (genreValue) formData.append("genre", genreValue);
      if (noteValue) formData.append("note", noteValue);

      visualContent.forEach((file) => {
        formData.append("images", file);
      });

      const response = await fetch("/api/addItem", {
        method: "POST",
        body: formData,
      });

      const data: CreateItemResponse = await response.json();

      if (!response.ok) {
        if (!data.success) {
          switch (data.error.code) {
            case "MISSING_FIELDS":
              triggerError("required");
              break;
            case "ITEM_ALREADY_EXIST":
              triggerError("already-exists");
              break;
            case "TOO_MANY_IMAGES":
              triggerError("too-many-images");
              break;
            case "FILE_TOO_LARGE":
              triggerError("file-to large");
              break;
            case "INVALID_FILE_TYPE":
              triggerError("invalid-file");
              break;
            default:
              triggerError("server");
          }
        } else {
          triggerError("server");
        }
        return;
      }

      setCanCreate(true);
      setTitleValue("");
      setAuthorValue("");
      setCollectionValue("");
      setStatusValue("");
      setTomeValue("");
      setGenreValue("");
      setNoteValue("");

      timeoutRef.current = setTimeout(() => {
        router.replace("/");
        setCanCreate(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };
  return { handleCreate };
}
