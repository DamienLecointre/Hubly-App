"use client";

import { ComponentPropsWithoutRef, ElementType } from "react";
import { useAuthInputValidation } from "@/hooks/inputs/useAuthInputValidation";
import { useToggle } from "@/hooks/utils/useToggle";
import { useCollectionValidation } from "@/hooks/inputs/useCollectionValidation";
import { signupFormData } from "@/data/signupFormData/SignupFormData";
import PasswordChecker from "@/components/modules/submenus/PasswordChecker";
import { inputDataType } from "@/types/Inputs/inputDataType";

import { EyeIcon, EyeOffIcon } from "@/components/ui/icons";

type FormInputProps = ComponentPropsWithoutRef<"input"> & {
  inputId: string;
  dataFile: readonly inputDataType[];
  value: string;
  onchange: (value: string) => void;
  location?: string;
  inputBoderStyle?: string;
};

function FormInput({
  inputId,
  dataFile,
  value,
  onchange,
  location,
  inputBoderStyle,
  ...rest
}: FormInputProps) {
  const { isActive, toggle } = useToggle();

  const inputTypeId = dataFile?.find((e) => e.id === inputId);

  const authValidationMessage = useAuthInputValidation(inputId);
  const collectionValidationMessage = useCollectionValidation(inputId);

  if (!inputTypeId) {
    return null;
  }
  const isPassword =
    inputTypeId.id === "PASSWORD" || inputTypeId.id === "PASSWORD_APPROUVE";

  const inputType = isActive ? "text" : inputTypeId.type;

  const IconLeft = inputTypeId.iconLeft;
  const IconRight = isPassword
    ? isActive
      ? EyeOffIcon
      : EyeIcon
    : inputTypeId.iconRight;

  return (
    <>
      <div
        className={`centerBetween font-secondary font-normal text-[16px] bg-bg-input text-primary-input p-4 border ${inputBoderStyle} rounded-2xl placeholder:text-primary-input focus-within:ring-1 focus-within:ring-border-focus`}
      >
        <div className="w-full flex items-center gap-4">
          {IconLeft && <IconLeft />}
          <input
            className="w-full outline-none"
            {...rest}
            type={inputType}
            placeholder={inputTypeId.placeholder}
            value={value}
            onChange={(e) => onchange(e.target.value)}
          ></input>
        </div>
        <div onClick={isPassword ? toggle : undefined}>
          {IconRight && <IconRight />}
        </div>
      </div>

      {authValidationMessage && (
        <p className="text-warning">{authValidationMessage}</p>
      )}

      {collectionValidationMessage && (
        <p className="text-warning">{collectionValidationMessage}</p>
      )}

      {/* Affichage PasswordChecker */}
      {inputTypeId.id === "PASSWORD" &&
        value.length > 0 &&
        location === "signup" && <PasswordChecker />}
    </>
  );
}

export default FormInput;
