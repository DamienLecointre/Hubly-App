"use client";

import { useContext } from "react";
import { SignupContext } from "@/context/AuthContext";

export function useInputValidation(
  name: "user" | "email" | "password" | "passwordConfirm",
) {
  const signupContext = useContext(SignupContext);
  if (!signupContext) {
    throw new Error("FormInput must be used within a SignupProvider");
  }

  const { errorMessage, apiMessage } = signupContext;

  // Validation champs input signup & login
  if (name === "password" && errorMessage === "password") {
    return "Veuillez saisir un mot de passe valide";
  }
  if (name === "email" && errorMessage === "email") {
    return "Veuillez saisir un email valide";
  }
  if (name === "email" && apiMessage && errorMessage === "emailUsed") {
    return "Un compte a déjà été créé avec cet email. Veuillez saisir une autre adresse mail.";
  }
  if (name === "password" && apiMessage && errorMessage === "wrongId") {
    return "Nom d'utilisateur ou mot de passe invalide";
  }
  if (name === "passwordConfirm" && errorMessage === "confirm") {
    return "Veuillez vérifier votre saisie";
  }
  return null;
}
