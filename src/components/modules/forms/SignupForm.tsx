"use client";

import { useContext } from "react";
import { SignupContext } from "@/context/AuthContext";
import { signupFormData } from "@/data/SignupFormData";
import { inputSignupStateValue } from "@/lib/inputSignupStateValue";

import FormInput from "@/components/ui/inputs/FormInput";

function SignupForm() {
  const signupContext = useContext(SignupContext);
  if (!signupContext) {
    throw new Error("SignupForm must be used within a SignupProvider");
  }

  const {
    userValue,
    setUserValue,
    emailValue,
    setEmailValue,
    passwordValue,
    setPasswordValue,
    confirmValue,
    setConfirmValue,
    errorMessage,
  } = signupContext;

  const stateValueMapping = inputSignupStateValue({
    userValue,
    setUserValue,
    emailValue,
    setEmailValue,
    passwordValue,
    setPasswordValue,
    confirmValue,
    setConfirmValue,
    errorMessage,
  });

  return (
    <div className="flex flex-col gap-4">
      <p className="text-secondary text-center">
        Rejoignez Hubly et commencez à créer votre première collection
      </p>
      {signupFormData.map((data, i) => (
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
          location="signup"
        />
      ))}
    </div>
  );
}

export default SignupForm;
