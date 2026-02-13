import { ElementType } from "react";

import { PencilIcon } from "@/components/ui/icons";

export type InputCreateCollectionType = {
  id: string;
  iconLeft: ElementType | null;
  type: "text";
  placeholder: string;
  iconRight: ElementType | null;
};

export const inputCreateCollectionData: InputCreateCollectionType[] = [
  {
    id: "TITLE",
    iconLeft: null,
    type: "text",
    placeholder: "Titre de la collection",
    iconRight: PencilIcon,
  },
] as const;
