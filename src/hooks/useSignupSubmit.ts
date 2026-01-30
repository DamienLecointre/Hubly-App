"use client";

import { useContext, useRef } from "react";
import { useRouter } from "next/navigation";
import { SignupContext } from "@/context/SignupContext";

export function useSignupSubmit() {
  const router = useRouter();
  const signupContext = useContext(SignupContext);
  if (!signupContext) {
    throw new Error("useSignupSubmit must be used within a SignupProvider");
  }

  const {
    isInputField,
    userValue,
    setUserValue,
    emailValue,
    setEmailValue,
    isValidEmail,
    passwordValue,
    setPasswordValue,
    isPasswordValid,
    confirmValue,
    setConfirmValue,
    setErrorMessage,
    setsubmitValid,
    apiMessage,
    setApiMessage,
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: userValue,
            email: emailValue,
            password: passwordValue,
          }),
        });

        const data = await response.json();

        if (!data.success && data.error.code === "EMAIL_ALREADY_USED") {
          triggerError("apiWarning");
          setApiMessage(true);
          setsubmitValid(false);
          return;
        } else {
          setsubmitValid(true);
          setUserValue("");
          setEmailValue("");
          setPasswordValue("");
          setConfirmValue("");
          setTimeout(() => {
            router.push("/");
          }, 2000);
        }
      } catch (err) {
        console.error("Erreur réseau : ", err);
      }

      return;
    }
  };

  return { handleSubmit };
}
