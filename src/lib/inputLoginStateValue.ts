import { Dispatch, SetStateAction } from "react";
import { getInputBorderStyle } from "@/utils/inputWarningStyle";

type InputLoginStateValue = {
  emailValue: string;
  setEmailValue: Dispatch<SetStateAction<string>>;
  passwordValue: string;
  setPasswordValue: Dispatch<SetStateAction<string>>;
  errorMessage: string;
};

export function inputLoginStateValue({
  emailValue,
  setEmailValue,
  passwordValue,
  setPasswordValue,
  errorMessage,
}: InputLoginStateValue) {
  return [
    {
      value: emailValue,
      setter: setEmailValue,
      borderStyle: getInputBorderStyle(
        errorMessage === "email" || errorMessage === "apiWarning",
      ),
    },
    {
      value: passwordValue,
      setter: setPasswordValue,
      borderStyle: getInputBorderStyle(errorMessage === "password"),
    },
  ];
}
