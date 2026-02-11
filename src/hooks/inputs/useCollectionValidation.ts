"use client";

import { useContext } from "react";
import { AddCollectionContext } from "@/context/AddCollectionContext";

export function useCollectionValidation(name: string) {
  const addCollectionContext = useContext(AddCollectionContext);
  if (!addCollectionContext) {
    throw new Error(
      "useCollectionValidation must be used within a AddCollectionProvider",
    );
  }

  const { errorMessage } = addCollectionContext;

  // Validation champs input création collection
  if (name === "collectionTitle" && errorMessage === "already-exists") {
    return "Cette collection existe déjà. Veuillez saisir un autre nom pour votre collection  ";
  }

  return null;
}
