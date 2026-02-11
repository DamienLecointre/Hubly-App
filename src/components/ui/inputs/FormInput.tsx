"use client";

import { ComponentPropsWithoutRef } from "react";
import { useInputValidation } from "@/hooks/inputs/useInputValidation";
import { useToggle } from "@/hooks/utils/useToggle";

import PasswordChecker from "@/components/modules/submenus/PasswordChecker";

import {
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  MailIcon,
  UserIcon,
  PlusIcon,
  ArrowIcon,
  PencilIcon,
} from "@/components/ui/icons";
import { useCollectionValidation } from "@/hooks/inputs/useCollectionValidation";

const FORM_INPUT_LEFT_ICONS = {
  eye: EyeIcon,
  lock: LockIcon,
  mail: MailIcon,
  user: UserIcon,
  empty: () => <></>,
} as const;

const FORM_INPUT_RIGHT_ICONS = {
  eye: EyeIcon,
  eyeOff: EyeOffIcon,
  lock: LockIcon,
  mail: MailIcon,
  plus: PlusIcon,
  arrow: ArrowIcon,
  pencil: PencilIcon,
  empty: () => <></>,
} as const;

type IconLeft = keyof typeof FORM_INPUT_LEFT_ICONS;
type IconRight = keyof typeof FORM_INPUT_RIGHT_ICONS;

type FormInputProps = ComponentPropsWithoutRef<"input"> & {
  iconLeft: IconLeft;
  type: "text" | "email" | "password";
  placeholder: string;
  iconRight: IconRight;
  value: string;
  onchange: (value: string) => void;
  location?: string;
  name: string;
  inputBoderStyle?: string;
};

function FormInput({
  iconLeft,
  type,
  placeholder,
  iconRight,
  value,
  onchange,
  location,
  name,
  inputBoderStyle,
}: FormInputProps) {
  const { isActive, toggle } = useToggle();
  const inputType = isActive ? "text" : type;

  const IconLeft = FORM_INPUT_LEFT_ICONS[iconLeft];
  const IconRight =
    type === "password"
      ? isActive
        ? EyeOffIcon
        : EyeIcon
      : FORM_INPUT_RIGHT_ICONS[iconRight];

  const authValidationMessage = useInputValidation(name);
  const collectionValidationMessage = useCollectionValidation(name);

  return (
    <>
      <div
        className={`centerBetween font-secondary font-normal text-[16px] bg-bg-input text-primary-input p-4 border ${inputBoderStyle} rounded-2xl placeholder:text-primary-input focus-within:ring-1 focus-within:ring-border-focus`}
      >
        <div className="w-full flex items-center gap-4">
          <IconLeft />
          <input
            className="w-full outline-none"
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onchange(e.target.value)}
          ></input>
        </div>
        <div onClick={toggle}>
          <IconRight />
        </div>
      </div>

      {authValidationMessage && (
        <p className="text-warning">{authValidationMessage}</p>
      )}

      {collectionValidationMessage && (
        <p className="text-warning">{collectionValidationMessage}</p>
      )}

      {/* Affichage PasswordChecker */}
      {name === "password" && value.length > 0 && location === "signup" && (
        <PasswordChecker />
      )}
    </>
  );
}

export default FormInput;
