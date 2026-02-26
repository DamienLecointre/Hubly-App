"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type signupContextType = {
  // isSignupField: boolean;
  isLoginField: boolean;
  userValue: string;
  setUserValue: Dispatch<SetStateAction<string>>;
  emailValue: string;
  setEmailValue: Dispatch<SetStateAction<string>>;
  // isValidEmail: boolean;
  passwordValue: string;
  setPasswordValue: Dispatch<SetStateAction<string>>;
  isPasswordValid: boolean;
  confirmValue: string;
  setConfirmValue: Dispatch<SetStateAction<string>>;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
  hasSpecial: boolean;
  errorMessage: string;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  submitValid: boolean;
  setsubmitValid: Dispatch<SetStateAction<boolean>>;
  apiMessage: boolean;
  setApiMessage: Dispatch<SetStateAction<boolean>>;
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
  const [submitValid, setsubmitValid] = useState(false);
  const [apiMessage, setApiMessage] = useState(false);

  /* Contrôle si tous les champs login sont rempli */
  const isLoginField = emailValue.length > 0 && passwordValue.length > 0;

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

  return (
    <SignupContext.Provider
      value={{
        // isSignupField,
        isLoginField,
        userValue,
        setUserValue,
        emailValue,
        setEmailValue,
        // isValidEmail,
        passwordValue,
        setPasswordValue,
        isPasswordValid,
        confirmValue,
        setConfirmValue,
        hasUppercase,
        hasLowercase,
        hasNumber,
        hasSpecial,
        errorMessage,
        setErrorMessage,
        submitValid,
        setsubmitValid,
        apiMessage,
        setApiMessage,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
}
