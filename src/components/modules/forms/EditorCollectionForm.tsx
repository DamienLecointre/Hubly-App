"use client";

import { useContext } from "react";
import { useCreateCollection } from "@/hooks/forms/useCreateCollection";
import { useInputFieldWarning } from "@/hooks/inputs/useInputFieldWarning";
import { AddCollectionContext } from "@/context/AddCollectionContext";
import { inputEditorCollectionState } from "@/lib/inputEditorCollectionState";
import { inputDataType } from "@/types/Inputs/inputDataType";
import { SelectCategoryData } from "@/data/collectionData/SelectCategoryData";

import LinkBtn from "@/components/ui/buttons/LinkBtn";
import SelectInput from "@/components/ui/inputs/SelectInput";
import FormInput from "@/components/ui/inputs/FormInput";
import PillBtn from "@/components/ui/buttons/PillBtn";

type EditorFormProps = {
  title: string;
  dataFile: readonly inputDataType[];
};

function EditorCollectionForm({ title, dataFile }: EditorFormProps) {
  const { handleCreate } = useCreateCollection();

  const addCollectionContext = useContext(AddCollectionContext);
  if (!addCollectionContext) {
    throw new Error("EditForm must be used within a AddCollectionContext");
  }

  const { selectValue, titleValue, setTitleValue, handleSelect, errorMessage } =
    addCollectionContext;

  const stateValueMapping = inputEditorCollectionState({
    titleValue,
    setTitleValue,
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
          <SelectInput
            onChange={handleSelect}
            selectedValue={selectValue}
            dataFile={SelectCategoryData}
          />
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
        </div>
        {errorWarning}
        <PillBtn
          type="button"
          label="Valider"
          variant="bgfull"
          onclick={(e) =>
            handleCreate(e as unknown as React.FormEvent<HTMLFormElement>)
          }
        />
      </div>
    </div>
  );
}

export default EditorCollectionForm;
