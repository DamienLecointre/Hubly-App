"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { SignupContext } from "@/context/AuthContext";
import { useTriggerError } from "../utils/useTriggerError";

export function useSignupSubmit() {
  const router = useRouter();
  const signupContext = useContext(SignupContext);
  if (!signupContext) {
    throw new Error("useSignupSubmit must be used within a SignupProvider");
  }

  const {
    isSignupField,
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
    setsubmitValid,
    setApiMessage,
  } = signupContext;

  const { triggerError } = useTriggerError();

  const handleSigupSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isSignupField) {
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
        triggerError("emailUsed");
        setApiMessage(true);
        return;
      }
      setsubmitValid(true);
      setUserValue("");
      setEmailValue("");
      setPasswordValue("");
      setConfirmValue("");

      setTimeout(() => {
        setsubmitValid(false);
        router.replace("/");
      }, 2000);
    } catch (err) {
      console.error("Erreur réseau : ", err);
    }
  };

  return { handleSigupSubmit };
}
