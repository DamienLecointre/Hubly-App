import FormInput from "@/components/ui/inputs/FormInput";

const loginFormData = [
  {
    id: "loginForm1",
    iconLeft: "mail",
    type: "email",
    placeholder: "Adresse email",
    iconRight: "empty",
  },
  {
    id: "loginForm2",
    iconLeft: "lock",
    type: "password",
    placeholder: "Mot de passe",
    iconRight: "eye",
  },
] as const;

function LoginForm() {
  return (
    <div className="flex flex-col text-secondary gap-4 ">
      <p>Connectez vous à votre compte</p>
      {loginFormData.map((data) => (
        <FormInput
          key={data.id}
          iconLeft={data.iconLeft}
          type={data.type}
          placeholder={data.placeholder}
          iconRight={data.iconRight}
          location="loginPage"
        />
      ))}
      <p className="caption text-right cursor-pointer">Mot de passe oublié ?</p>
    </div>
  );
}

export default LoginForm;
