import { useContext } from "react";
import { SignupContext } from "@/context/SignupContext";
import { passwordCheckerData } from "@/data/PasswordCheckerData";
import { passwordWarningStyles } from "@/lib/passwordWarningStyles";

import PasswordRequirements from "@/components/ui/feedback/PasswordRequirements";

function PasswordChecker() {
  const signupContext = useContext(SignupContext);
  if (!signupContext) {
    throw new Error("SignupPage must be used within a SignupProvider");
  }

  const { passwordValue, hasUppercase, hasLowercase, hasNumber, hasSpecial } =
    signupContext;

  const styleBoxMapping = passwordWarningStyles({
    passwordValue,
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSpecial,
  });

  return (
    <div className="flex flex-col gap-6 ">
      <p className="text-primary">Le mot de passe doit contenir au moins :</p>
      <div className="flex flex-col gap-4">
        {passwordCheckerData.map((data, i) => (
          <PasswordRequirements
            key={data.id}
            label={data.label}
            boxStyle={styleBoxMapping[i].boxStyle}
            textStyle={styleBoxMapping[i].textStyle}
          />
        ))}
      </div>
    </div>
  );
}

export default PasswordChecker;
