import { Dispatch, SetStateAction } from "react";
import { getInputBorderStyle } from "@/utils/inputWarningStyle";

type InputEditorItemState = {
  titleValue: string;
  setTitleValue: Dispatch<SetStateAction<string>>;
  authorValue: string;
  setAuthorValue: Dispatch<SetStateAction<string>>;
  tomeValue: string;
  setTomeValue: Dispatch<SetStateAction<string>>;
  errorMessage: string;
};

export function inputEditorItemState({
  titleValue,
  setTitleValue,
  authorValue,
  setAuthorValue,
  tomeValue,
  setTomeValue,
  errorMessage,
}: InputEditorItemState) {
  return [
    {
      value: titleValue,
      setter: setTitleValue,
      borderStyle: getInputBorderStyle(errorMessage === "already-exists"),
    },
    {
      value: authorValue,
      setter: setAuthorValue,
      borderStyle: "",
    },
    {
      value: tomeValue,
      setter: setTomeValue,
      borderStyle: "",
    },
  ];
}
