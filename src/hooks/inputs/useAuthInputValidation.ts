"use client";

import { useContext } from "react";
import { SignupContext } from "@/context/AuthContext";

export function useAuthInputValidation(name: string) {
  const signupContext = useContext(SignupContext);
  if (!signupContext) {
    throw new Error("useInputValidation must be used within a SignupProvider");
  }

  const { errorMessage } = signupContext;

  // Validation champs input signup & login
  if (name === "PASSWORD" && errorMessage === "password") {
    return "Veuillez saisir un mot de passe valide";
  }
  if (name === "MAIL" && errorMessage === "email") {
    return "Veuillez saisir un email valide";
  }
  if (name === "MAIL" && errorMessage === "emailUsed") {
    return "Un compte a déjà été créé avec cet email. Veuillez saisir une autre adresse mail.";
  }
  if (name === "PASSWORD" && errorMessage === "wrongId") {
    return "Nom d'utilisateur ou mot de passe invalide";
  }
  if (name === "PASSWORD_APPROUVE" && errorMessage === "confirm") {
    return "Veuillez vérifier votre saisie";
  }
  return null;
}
