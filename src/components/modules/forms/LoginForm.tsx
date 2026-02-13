"use client";

import FormInput from "@/components/ui/inputs/FormInput";
import { useContext } from "react";
import { SignupContext } from "@/context/AuthContext";
import { inputLoginStateValue } from "@/lib/inputLoginStateValue";
import { inputDataType } from "@/types/Inputs/inputDataType";

type LoginFormType = {
  dataFile: readonly inputDataType[];
};

function LoginForm({ dataFile }: LoginFormType) {
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
      {dataFile?.map((data, i) => (
        <FormInput
          key={data.id}
          inputId={data.id}
          dataFile={dataFile}
          value={stateValueMapping[i].value}
          onchange={stateValueMapping[i].setter}
          inputBoderStyle={stateValueMapping[i].borderStyle}
          location="login"
        />
      ))}
      <p className="caption text-right cursor-pointer">Mot de passe oublié ?</p>
    </div>
  );
}

export default LoginForm;
