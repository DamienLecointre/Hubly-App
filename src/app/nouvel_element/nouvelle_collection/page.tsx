"use client";

import { useContext } from "react";

import EditorForm from "@/components/modules/forms/EditorForm";
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
      <EditorForm
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
