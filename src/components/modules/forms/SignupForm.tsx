"use client";

import { useContext } from "react";
import { SignupContext } from "@/context/AuthContext";
import { inputDataType } from "@/types/Inputs/inputDataType";
import { inputSignupStateValue } from "@/lib/inputSignupStateValue";

import FormInput from "@/components/ui/inputs/FormInput";

type SignupFormType = {
  dataFile: readonly inputDataType[];
};

function SignupForm({ dataFile }: SignupFormType) {
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
      {dataFile?.map((data, i) => (
        <FormInput
          key={data.id}
          inputId={data.id}
          dataFile={dataFile}
          value={stateValueMapping[i].value}
          onchange={stateValueMapping[i].setter}
          inputBoderStyle={stateValueMapping[i].borderStyle}
          location="signup"
        />
      ))}
    </div>
  );
}

export default SignupForm;
