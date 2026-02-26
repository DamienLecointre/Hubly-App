"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { SignupContext } from "@/context/AuthContext";
import { useTriggerAuthError } from "../utils/useTriggerAuthError";

export function useSignupSubmit() {
  const router = useRouter();
  const signupContext = useContext(SignupContext);
  if (!signupContext) {
    throw new Error("useSignupSubmit must be used within a SignupProvider");
  }

  const {
    userValue,
    setUserValue,
    emailValue,
    setEmailValue,
    passwordValue,
    setPasswordValue,
    confirmValue,
    setConfirmValue,
    setsubmitValid,
  } = signupContext;

  const { triggerError } = useTriggerAuthError();

  const handleSigupSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
          confirmPassword: confirmValue,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        switch (data?.error?.code) {
          case "MISSING_FIELDS":
            triggerError("required");
            break;
          case "EMAIL_ALREADY_USED":
            triggerError("emailUsed");
            break;
          case "INVALID_EMAIL":
            triggerError("email");
            break;
          case "INVALID_PASSWORD":
            triggerError("password");
            break;
          case "PASSWORDS_NOT_MATCH":
            triggerError("confirm");
            break;
          default:
            triggerError("server");
        }

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
