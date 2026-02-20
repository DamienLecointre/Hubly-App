import { Dispatch, SetStateAction } from "react";
import { getInputBorderStyle } from "@/utils/inputWarningStyle";

type InputEditorCollectionState = {
  titleValue: string;
  setTitleValue: Dispatch<SetStateAction<string>>;
  errorMessage: string;
};

export function inputEditorCollectionState({
  titleValue,
  setTitleValue,
  errorMessage,
}: InputEditorCollectionState) {
  return [
    {
      value: titleValue,
      setter: setTitleValue,
      borderStyle: getInputBorderStyle(errorMessage === "already-exists"),
    },
    {
      value: titleValue,
      setter: setTitleValue,
      borderStyle: getInputBorderStyle(errorMessage === "already-exists"),
    },
    {
      value: titleValue,
      setter: setTitleValue,
      borderStyle: getInputBorderStyle(errorMessage === "already-exists"),
    },
  ];
}
