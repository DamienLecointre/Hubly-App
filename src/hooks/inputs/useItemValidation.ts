"use client";

import { useContext } from "react";
import { AddItemContext } from "@/context/AddItemContext";

export function useItemValidation(name: string) {
  const addItemContext = useContext(AddItemContext);
  if (!addItemContext) {
    throw new Error(
      "useCollectionValidation must be used within a AddCollectionProvider",
    );
  }

  const { errorMessage } = addItemContext;

  // Vérification de doublon
  if (name === "TITLE" && errorMessage === "already-exists") {
    return "Cet article existe déjà. Veuillez saisir un autre nom.  ";
  }
  // Vérification du nombre d'image
  if (name === "FILE_INPUT" && errorMessage === "too-many-images") {
    return "Vous ne pouvez importer que 5 images maximum";
  }
  // Vérification du nombre d'image
  if (name === "FILE_INPUT" && errorMessage === "file-to large") {
    return "La taille des images ne doivent pas dépasser 2Mb ";
  }
  // Vérification du format d'image
  if (name === "FILE_INPUT" && errorMessage === "invalid-file") {
    return `Format d'image invalide. Les formats d'images doivent être .jpeg ou .png ou .webp`;
  }

  return null;
}
