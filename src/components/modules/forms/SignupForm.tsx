import FormInput from "@/components/ui/inputs/FormInput";

const signupFormData = [
  {
    id: "signupForm1",
    iconLeft: "user",
    type: "text",
    placeholder: "Nom d'utilisateur",
    iconRight: "empty",
    hasPasswordChecker: false,
  },
  {
    id: "signupForm2",
    iconLeft: "mail",
    type: "email",
    placeholder: "Adresse email",
    iconRight: "empty",
    hasPasswordChecker: false,
  },
  {
    id: "signupForm3",
    iconLeft: "lock",
    type: "password",
    placeholder: "Mot de passe",
    iconRight: "eye",
    hasPasswordChecker: true,
  },
  {
    id: "signupForm4",
    iconLeft: "lock",
    type: "password",
    placeholder: "Confirmez vote mot de passe",
    iconRight: "empty",
    hasPasswordChecker: false,
  },
] as const;

function SignupForm() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-secondary text-center">
        Rejoignez Hubly et commencez à créer votre première collection
      </p>
      {signupFormData.map((data) => (
        <FormInput
          key={data.id}
          iconLeft={data.iconLeft}
          type={data.type}
          placeholder={data.placeholder}
          iconRight={data.iconRight}
          hasPasswordChecker={data.hasPasswordChecker}
        />
      ))}
    </div>
  );
}

export default SignupForm;
