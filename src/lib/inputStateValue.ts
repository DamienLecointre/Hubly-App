import { Dispatch, SetStateAction } from "react";

type InputStateValue = {
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

export function inputStateValue({
  userValue,
  setUserValue,
  emailValue,
  setEmailValue,
  passwordValue,
  setPasswordValue,
  confirmValue,
  setConfirmValue,
  errorMessage,
}: InputStateValue) {
  return [
    {
      value: userValue,
      setter: setUserValue,
      borderStyle: "border-border-input",
    },
    {
      value: emailValue,
      setter: setEmailValue,
      borderStyle:
        errorMessage === "email" || errorMessage === "apiWarning"
          ? "border-warning"
          : "border-border-input",
    },
    {
      value: passwordValue,
      setter: setPasswordValue,
      borderStyle:
        errorMessage === "password" ? "border-warning" : "border-border-input",
    },
    {
      value: confirmValue,
      setter: setConfirmValue,
      borderStyle:
        errorMessage === "confirm" ? "border-warning" : "border-border-input",
    },
  ];
}
