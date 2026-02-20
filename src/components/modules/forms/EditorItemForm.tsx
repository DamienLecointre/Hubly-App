"use client";

import { useContext, useState } from "react";
import { useCreateItem } from "@/hooks/forms/useCreateItem";
import { useInputFieldWarning } from "@/hooks/inputs/useInputFieldWarning";
import { useFetchCollection } from "@/hooks/api/useFetchCollection";
import { inputDataType } from "@/types/Inputs/inputDataType";
import { SelectStatusData } from "@/data/ItemData/SelectStatusData";
import { SelectGenreData } from "@/data/ItemData/SelectGenreData";
import { AddItemContext } from "@/context/AddItemContext";
import { inputEditorItemState } from "@/lib/inputEditorItemState";

import LinkBtn from "@/components/ui/buttons/LinkBtn";
import SelectInput from "@/components/ui/inputs/SelectInput";
import FormInput from "@/components/ui/inputs/FormInput";
import PillBtn from "@/components/ui/buttons/PillBtn";
import FileInput from "@/components/ui/inputs/FileInput";
import TexteArea from "@/components/ui/inputs/TexteArea";

type EditorFormProps = {
  title: string;
  dataFile: readonly inputDataType[];
};

function EditorItemForm({ title, dataFile }: EditorFormProps) {
  const { handleCreate } = useCreateItem();
  const { collectionData } = useFetchCollection();
  const SelectCollectionData = [
    { id: "", label: "Sélectionner une collection" },
    ...collectionData.map((data) => ({
      id: data._id,
      label: data.title,
    })),
  ];

  const addItemContext = useContext(AddItemContext);
  if (!addItemContext) {
    throw new Error("EditorItemForm must be used within a AddItemProvider");
  }

  const {
    setVisualContent,
    titleValue,
    setTitleValue,
    authorValue,
    setAuthorValue,
    collectionValue,
    statusValue,
    tomeValue,
    setTomeValue,
    genreValue,
    handleCollection,
    handleStatus,
    handleGenre,
    errorMessage,
  } = addItemContext;

  const stateValueMapping = inputEditorItemState({
    titleValue,
    setTitleValue,
    authorValue,
    setAuthorValue,
    tomeValue,
    setTomeValue,
    errorMessage,
  });

  const errorWarning = useInputFieldWarning(errorMessage);

  return (
    <div className="flexFullHeight px-6 pt-4 pb-[calc(85px+16px)]">
      <div className="flexColumn cardGradient p-4 gap-6">
        <div className="flexColumn gap-2">
          <div className="flex items-start">
            <LinkBtn
              icon="arrow"
              link="/nouvel_element"
              label="Retour"
              variant="base"
            />
          </div>
          <div className="py-6">
            <h4 className="text-center">{title}</h4>
          </div>
          <FileInput onchange={setVisualContent} />
          <p className="text-secondary">Remplir les champs ci-dessous :</p>
          {dataFile?.map((data, i) => (
            <FormInput
              key={data.id}
              inputId={data.id}
              dataFile={dataFile}
              value={stateValueMapping[i].value}
              onchange={stateValueMapping[i].setter}
              inputBoderStyle={stateValueMapping[i].borderStyle}
            />
          ))}
          <SelectInput
            selectedValue={collectionValue}
            onChange={handleCollection}
            dataFile={SelectCollectionData}
          />
          <SelectInput
            selectedValue={statusValue}
            onChange={handleStatus}
            dataFile={SelectStatusData}
          />
          <SelectInput
            selectedValue={genreValue}
            onChange={handleGenre}
            dataFile={SelectGenreData}
          />
          <TexteArea />
        </div>
        {errorWarning}
        <div className="flex gap-2">
          <PillBtn
            type="button"
            label="Valider"
            variant="fullwidth"
            onclick={(e) =>
              handleCreate(e as unknown as React.FormEvent<HTMLFormElement>)
            }
          />
          <PillBtn
            type="button"
            label="Scanner"
            variant="fullwidth"
            // onclick={(e) =>
            //   handleCreate(e as unknown as React.FormEvent<HTMLFormElement>)
            // }
          />
        </div>
      </div>
    </div>
  );
}

export default EditorItemForm;
