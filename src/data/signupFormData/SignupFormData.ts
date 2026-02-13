import { ElementType } from "react";

import { EyeIcon, LockIcon, MailIcon, UserIcon } from "@/components/ui/icons";

export type SignupFormDataType = {
  id: string;
  iconLeft: ElementType | null;
  type: "text" | "email" | "password";
  placeholder: string;
  iconRight: ElementType | null;
};

export const signupFormData: SignupFormDataType[] = [
  {
    id: "USER",
    iconLeft: UserIcon,
    type: "text",
    placeholder: "Nom d'utilisateur",
    iconRight: null,
  },
  {
    id: "MAIL",
    iconLeft: MailIcon,
    type: "email",
    placeholder: "Adresse email",
    iconRight: null,
  },
  {
    id: "PASSWORD",
    iconLeft: LockIcon,
    type: "password",
    placeholder: "Mot de passe",
    iconRight: EyeIcon,
  },
  {
    id: "PASSWORD_APPROUVE",
    iconLeft: LockIcon,
    type: "password",
    placeholder: "Confirmez vote mot de passe",
    iconRight: EyeIcon,
  },
];
