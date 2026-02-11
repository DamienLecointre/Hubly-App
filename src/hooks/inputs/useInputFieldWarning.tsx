import { SignupContext } from "@/context/AuthContext";
import { useContext } from "react";

export function useInputFieldWarning(errorMessage: string | null) {
  const signupContext = useContext(SignupContext);

  if (!signupContext) {
    throw new Error("SignupPage must be used within a SignupProvider");
  }

  if (errorMessage === "required") {
    return (
      <p className="text-warning text-center">
        Tous les champs du formulaire doivent être remplis
      </p>
    );
  }

  return null;
}
