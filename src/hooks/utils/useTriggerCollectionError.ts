"use client";

import { AddCollectionContext } from "@/context/AddCollectionContext";
import { useContext, useRef } from "react";

export function useTriggerCollectionError() {
  const addCollectionContext = useContext(AddCollectionContext);
  if (!addCollectionContext) {
    throw new Error(
      "useTriggerCollectionError must be used within a AddCollectionProvider",
    );
  }
  const { setErrorMessage } = addCollectionContext;
  const errorTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const triggerError = (type: string) => {
    setErrorMessage(type);

    if (errorTimeoutRef.current) {
      clearTimeout(errorTimeoutRef.current);
    }

    errorTimeoutRef.current = setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  };
  return { triggerError };
}
