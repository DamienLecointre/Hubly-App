import { loginFormData } from "@/data/loginFormData/LoginFormData";

import FormInput from "@/components/ui/inputs/FormInput";
import { useContext } from "react";
import { SignupContext } from "@/context/AuthContext";
import { inputLoginStateValue } from "@/lib/inputLoginStateValue";

function LoginForm() {
  const signupContext = useContext(SignupContext);
  if (!signupContext) {
    throw new Error("LoginForm must be used within a Provider");
  }

  const {
    emailValue,
    setEmailValue,
    passwordValue,
    setPasswordValue,
    errorMessage,
  } = signupContext;

  const stateValueMapping = inputLoginStateValue({
    emailValue,
    setEmailValue,
    passwordValue,
    setPasswordValue,
    errorMessage,
  });

  return (
    <div className="flex flex-col text-secondary gap-4 ">
      <p>Connectez vous à votre compte</p>
      {loginFormData.map((data, i) => (
        <FormInput
          key={data.id}
          iconLeft={data.iconLeft}
          type={data.type}
          placeholder={data.placeholder}
          iconRight={data.iconRight}
          value={stateValueMapping[i].value}
          onchange={stateValueMapping[i].setter}
          inputBoderStyle={stateValueMapping[i].borderStyle}
          name={data.name}
          location="login"
        />
      ))}
      <p className="caption text-right cursor-pointer">Mot de passe oublié ?</p>
    </div>
  );
}

export default LoginForm;
