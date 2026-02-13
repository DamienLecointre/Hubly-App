import { ElementType } from "react";

export type InputType = "text" | "email" | "password";

export type inputDataType = Readonly<{
  id: string;
  iconLeft: ElementType | null;
  type: InputType;
  placeholder: string;
  iconRight: ElementType | null;
}>;

export type InterfaceCardType = Readonly<{
  id: string;
  link: string;
  iconId: string;
  title: string;
  description: string;
}>;
