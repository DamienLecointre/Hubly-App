"use client";

import { useContext, useRef } from "react";
import { AddItemContext } from "@/context/AddItemContext";

export function useTriggerItemError() {
  const addItemContext = useContext(AddItemContext);
  if (!addItemContext) {
    throw new Error(
      "useTriggerItemError must be used within a AddItemProvider",
    );
  }
  const { setErrorMessage } = addItemContext;
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
