"use client";

import { useContext } from "react";
import EditorItemForm from "@/components/modules/forms/EditorItemForm";
import { InputCreateItemData } from "@/data/ItemData/InputCreateItemData";
import { AddItemContext } from "@/context/AddItemContext";
import BlurLayer from "@/components/modules/popup/BlurLayer";
import FeedbackPopup from "@/components/modules/popup/FeedbackPopup";

function Page() {
  const addItemContextType = useContext(AddItemContext);
  if (!addItemContextType) {
    throw new Error("Page must be used within a AddItemContextType");
  }

  const { canCreate } = addItemContextType;

  return (
    <>
      <EditorItemForm
        title="Ajouter un produit"
        dataFile={InputCreateItemData}
      />
      {canCreate && (
        <>
          <FeedbackPopup
            title="Article créé !"
            subtitle="Félicitation ! Votre article a été créé avec succés."
          />
          && <BlurLayer />
        </>
      )}
    </>
  );
}

export default Page;
