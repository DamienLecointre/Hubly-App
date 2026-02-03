"use client";

import { SignupContext } from "@/context/AuthContext";
import { useContext, useRef } from "react";

export function useTriggerError() {
  const signupContext = useContext(SignupContext);
  if (!signupContext) {
    throw new Error("useSignupSubmit must be used within a SignupProvider");
  }
  const { setErrorMessage } = signupContext;
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
  return { triggerError };
}
