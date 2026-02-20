"use client";

import { useContext } from "react";

import EditorCollectionForm from "@/components/modules/forms/EditorCollectionForm";
import BlurLayer from "@/components/modules/popup/BlurLayer";
import FeedbackPopup from "@/components/modules/popup/FeedbackPopup";
import { AddCollectionContext } from "@/context/AddCollectionContext";
import { inputCreateCollectionData } from "@/data/collectionData/InputCreateCollectionData";

function Page() {
  const addCollectionContext = useContext(AddCollectionContext);
  if (!addCollectionContext) {
    throw new Error("SignupPage must be used within a SignupProvider");
  }

  const { canCreate } = addCollectionContext;

  return (
    <>
      <EditorCollectionForm
        title="Créer votre collection"
        dataFile={inputCreateCollectionData}
      />
      {canCreate && (
        <>
          <FeedbackPopup
            title="Félicitation !"
            subtitle="Votre collection a été créé avec succés."
          />
          && <BlurLayer />
        </>
      )}
    </>
  );
}

export default Page;
