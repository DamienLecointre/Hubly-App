export const signupFormData = [
  {
    id: "signupForm1",
    iconLeft: "user",
    type: "text",
    placeholder: "Nom d'utilisateur",
    iconRight: "empty",
    name: "user",
  },
  {
    id: "signupForm2",
    iconLeft: "mail",
    type: "email",
    placeholder: "Adresse email",
    iconRight: "empty",
    name: "email",
  },
  {
    id: "signupForm3",
    iconLeft: "lock",
    type: "password",
    placeholder: "Mot de passe",
    iconRight: "eye",
    name: "password",
  },
  {
    id: "signupForm4",
    iconLeft: "lock",
    type: "password",
    placeholder: "Confirmez vote mot de passe",
    iconRight: "empty",
    name: "passwordConfirm",
  },
] as const;
