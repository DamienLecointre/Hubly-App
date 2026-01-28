"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type signupContextType = {
  isInputField: boolean;
  emailValue: string;
  isValidEmail: boolean;
  passwordValue: string;
  isPasswordValid: boolean;
  confirmValue: string;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
  hasSpecial: boolean;
  errorMessage: string;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  stateValueMapping: {
    value: string;
    setter: Dispatch<SetStateAction<string>>;
    borderStyle: string;
  }[];
};

export const SignupContext = createContext<signupContextType | null>(null);

type ChildrenProps = {
  children: ReactNode;
};

export default function SignupProvider({ children }: ChildrenProps) {
  const [userValue, setUserValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmValue, setConfirmValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  /* Contrôle si tous les champs sont rempli */
  const isInputField =
    userValue.length > 0 &&
    emailValue.length > 0 &&
    passwordValue.length > 0 &&
    confirmValue.length > 0;

  /* Contrôle la validité du champ email */
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    emailValue,
  );

  /* Contrôle la validité du champ password */
  const hasUppercase = /[A-Z]/.test(passwordValue);
  const hasLowercase = /[a-z]/.test(passwordValue);
  const hasNumber = /[0-9]/.test(passwordValue);
  const hasSpecial = /[!@#$%^&*()_\-+=\[\]{};:'",.<>?/\\|]/.test(passwordValue);

  const isPasswordValid =
    passwordValue.length > 0 &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSpecial;

  const stateValueMapping = [
    {
      value: userValue,
      setter: setUserValue,
      borderStyle: "border-border-input",
    },
    {
      value: emailValue,
      setter: setEmailValue,
      borderStyle:
        errorMessage === "email" ? "border-warning" : "border-border-input",
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

  return (
    <SignupContext.Provider
      value={{
        isInputField,
        emailValue,
        isValidEmail,
        passwordValue,
        isPasswordValid,
        confirmValue,
        hasUppercase,
        hasLowercase,
        hasNumber,
        hasSpecial,
        errorMessage,
        setErrorMessage,
        stateValueMapping,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
}
