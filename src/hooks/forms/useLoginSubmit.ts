import { useContext } from "react";
import { SignupContext } from "@/context/AuthContext";
import { useTriggerError } from "../utils/useTriggerError";
import { useRouter } from "next/navigation";

export function useLoginSubmit() {
  const router = useRouter();
  const signupContext = useContext(SignupContext);
  if (!signupContext) {
    throw new Error("useSignupSubmit must be used within a SignupProvider");
  }

  const {
    emailValue,
    setEmailValue,
    passwordValue,
    setPasswordValue,
    isLoginField,
    isValidEmail,
    apiMessage,
    setApiMessage,
    setsubmitValid,
  } = signupContext;

  const { triggerError } = useTriggerError();

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setApiMessage(false);

    if (!isLoginField) {
      triggerError("required");
      return;
    }
    if (!isValidEmail) {
      triggerError("email");
      return;
    }

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
        }),
      });

      const data = await response.json();

      if (!data.success && data.error.code === "WRONG_ID") {
        triggerError("wrongId");
        setApiMessage(true);
        return;
      }
      setsubmitValid(true);
      setEmailValue("");
      setPasswordValue("");

      setTimeout(() => {
        setsubmitValid(false);
        router.replace("/");
      }, 2000);
    } catch (err) {
      console.error("Erreur réseau : ", err);
    }
  };
  return { handleLoginSubmit };
}
