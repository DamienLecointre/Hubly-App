"use client";

import { useContext } from "react";
import { AddItemContext } from "@/context/AddItemContext";

export function useItemValidation() {
  const addItemContext = useContext(AddItemContext);
  if (!addItemContext) {
    throw new Error(
      "useCollectionValidation must be used within a AddCollectionProvider",
    );
  }

  const { errorMessage } = addItemContext;

  // Vérification de doublon
  if (errorMessage === "already-exists") {
    return "Cet article existe déjà. Veuillez saisir un autre nom.  ";
  }
  // Vérification du format d'image
  if (errorMessage === "invalid-file") {
    return `Format d'image invalide. Les formats d'images doivent être "" `;
  }
  // Vérification du nombre d'image
  if (errorMessage === "too-many-images") {
    return "Vous ne pouvez importer que 5 images maximum";
  }

  return null;
}
