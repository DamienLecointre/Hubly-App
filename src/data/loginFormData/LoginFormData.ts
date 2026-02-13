import { ElementType } from "react";

import { EyeIcon, LockIcon, MailIcon } from "@/components/ui/icons";

export type LoginFormDataType = {
  id: string;
  iconLeft: ElementType | null;
  type: "email" | "password";
  placeholder: string;
  iconRight: ElementType | null;
};

export const loginFormData: LoginFormDataType[] = [
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
] as const;
