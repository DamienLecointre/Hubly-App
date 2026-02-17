"use client";

import { useContext } from "react";
import { useCreateCollection } from "@/hooks/forms/useCreateCollection";

import LinkBtn from "@/components/ui/buttons/LinkBtn";
import SelectInput from "@/components/ui/inputs/SelectInput";
import FormInput from "@/components/ui/inputs/FormInput";
import PillBtn from "@/components/ui/buttons/PillBtn";
import { AddCollectionContext } from "@/context/AddCollectionContext";
import { SignupContext } from "@/context/AuthContext";
import { useInputFieldWarning } from "@/hooks/inputs/useInputFieldWarning";
import { inputDataType } from "@/types/Inputs/inputDataType";

type EditorFormProps = {
  title: string;
  dataFile: readonly inputDataType[];
};

function EditorForm({ title, dataFile }: EditorFormProps) {
  const { handleCreate } = useCreateCollection();

  const signupContext = useContext(SignupContext);
  if (!signupContext) {
    throw new Error("SignupPage must be used within a SignupProvider");
  }

  const addCollectionContext = useContext(AddCollectionContext);
  if (!addCollectionContext) {
    throw new Error("EditForm must be used within a AddCollectionContext");
  }

  const { selectValue, titleValue, handleSelect, handleChange, errorMessage } =
    addCollectionContext;

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
          <SelectInput onChange={handleSelect} selectedValue={selectValue} />
          {dataFile?.map((data) => (
            <FormInput
              key={data.id}
              inputId={data.id}
              dataFile={dataFile}
              value={titleValue}
              onchange={handleChange}
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

export default EditorForm;
