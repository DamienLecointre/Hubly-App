import { useContext } from "react";
import { SignupContext } from "@/context/AuthContext";
import { useTriggerAuthError } from "../utils/useTriggerAuthError";
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
    setsubmitValid,
  } = signupContext;

  const { triggerError } = useTriggerAuthError();

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

      if (!response.ok) {
        switch (data?.error?.code) {
          case "MISSING_FIELDS":
            triggerError("required");
            break;
          case "UNAUTHORIZED":
            triggerError("wrongId");
            break;
          default:
            triggerError("server");
        }

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
