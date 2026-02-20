"use client";

import EditorItemForm from "@/components/modules/forms/EditorItemForm";
import { InputCreateItemData } from "@/data/ItemData/InputCreateItemData";

function Page() {
  return (
    <>
      <EditorItemForm
        title="Ajouter un produit"
        dataFile={InputCreateItemData}
      />
    </>
  );
}

export default Page;
