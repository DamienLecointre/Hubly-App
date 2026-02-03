import { Dispatch, SetStateAction } from "react";
import { getInputBorderStyle } from "@/utils/inputWarningStyle";

type InputSignupStateValue = {
  userValue: string;
  setUserValue: Dispatch<SetStateAction<string>>;
  emailValue: string;
  setEmailValue: Dispatch<SetStateAction<string>>;
  passwordValue: string;
  setPasswordValue: Dispatch<SetStateAction<string>>;
  confirmValue: string;
  setConfirmValue: Dispatch<SetStateAction<string>>;
  errorMessage: string;
};

export function inputSignupStateValue({
  userValue,
  setUserValue,
  emailValue,
  setEmailValue,
  passwordValue,
  setPasswordValue,
  confirmValue,
  setConfirmValue,
  errorMessage,
}: InputSignupStateValue) {
  return [
    {
      value: userValue,
      setter: setUserValue,
      borderStyle: "border-border-input",
    },
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
    {
      value: confirmValue,
      setter: setConfirmValue,
      borderStyle: getInputBorderStyle(errorMessage === "confirm"),
    },
  ];
}
