import { useContext, useRef } from "react";
import { SignupContext } from "@/context/SignupContext";

export function useSignupSubmit() {
  const signupContext = useContext(SignupContext);
  if (!signupContext) {
    throw new Error("useSignupSubmit must be used within a SignupProvider");
  }

  const {
    setErrorMessage,
    isInputField,
    isValidEmail,
    isPasswordValid,
    passwordValue,
    confirmValue,
    setsubmitValid,
  } = signupContext;

  const errorTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const triggerError = (type: string) => {
    setErrorMessage(type);

    if (errorTimeoutRef.current) {
      clearTimeout(errorTimeoutRef.current);
    }

    errorTimeoutRef.current = setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const canSubmit =
      isInputField &&
      isValidEmail &&
      isPasswordValid &&
      passwordValue === confirmValue;
    if (!isInputField) {
      triggerError("required");
      return;
    }
    if (!isValidEmail) {
      triggerError("email");
      return;
    }
    if (!isPasswordValid) {
      triggerError("password");
      return;
    }
    if (passwordValue !== confirmValue) {
      triggerError("confirm");
      return;
    }
    if (canSubmit) {
      setsubmitValid(true);
      return;
    }
  };

  return { handleSubmit };
}
