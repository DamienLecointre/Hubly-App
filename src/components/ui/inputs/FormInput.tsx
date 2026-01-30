"use client";

import { ComponentPropsWithoutRef, useContext, useState } from "react";
import { SignupContext } from "@/context/SignupContext";
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
  isEmailInput: boolean;
  isPassworInput: boolean;
  isPasswordConfirm: boolean;
  inputBoderStyle: string;
};

function FormInput({
  iconLeft,
  type,
  placeholder,
  iconRight,
  value,
  onchange,
  isEmailInput,
  isPassworInput,
  isPasswordConfirm,
  inputBoderStyle,
}: FormInputProps) {
  const [isActive, setIsActive] = useState(false);
  const inputType = isActive ? "text" : type;

  const IconLeft = FORM_INPUT_LEFT_ICONS[iconLeft];
  const IconRight =
    type === "password"
      ? isActive
        ? EyeOffIcon
        : EyeIcon
      : FORM_INPUT_RIGHT_ICONS[iconRight];

  const signupContext = useContext(SignupContext);
  if (!signupContext) {
    throw new Error("FormInput must be used within a SignupProvider");
  }

  const { errorMessage, apiMessage } = signupContext;

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

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
        <div onClick={handleClick}>
          <IconRight />
        </div>
      </div>

      {/* Contrôle la validité du champ password */}
      {isPassworInput && errorMessage === "password" && (
        <p className="text-warning">Veuillez saisir un mot de passe valide</p>
      )}

      {/* Affichage PasswordChecker */}
      {isPassworInput && value.length > 0 && <PasswordChecker />}

      {/* Contrôle la validité du champ email */}
      {isEmailInput && errorMessage === "email" && (
        <p className="text-warning">Veuillez saisir un email valide</p>
      )}

      {/* Contrôle si l'email existe déjà en bd */}
      {isEmailInput && apiMessage && errorMessage === "apiWarning" && (
        <p className="text-warning">Un compte a déjà été créé avec cet email</p>
      )}

      {/* Contrôle la concordance des champs password et confirm */}
      {isPasswordConfirm && errorMessage === "confirm" && (
        <p className="text-warning">Veuillez vérifier votre saisie</p>
      )}
    </>
  );
}

export default FormInput;
