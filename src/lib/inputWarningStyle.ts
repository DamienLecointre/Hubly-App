import { SignupContextType } from "@/context/SignupContext";

export type InputStateMapping = {
  value: string;
  setter: (value: string) => void;
  borderStyle: string;
};

export function inputWarningStyle(ctx: SignupContextType): InputStateMapping[] {
  return [
    {
      // EMAIL
      value: ctx.emailValue,
      setter: ctx.setEmailValue,
      borderStyle:
        ctx.isValidEmail || ctx.emailValue.length === 0
          ? "border-default"
          : "border-error",
    },
    {
      // PASSWORD
      value: ctx.passwordValue,
      setter: ctx.setPasswordValue,
      borderStyle:
        ctx.passwordValue.length === 0
          ? "border-default"
          : ctx.hasUppercase && ctx.hasLowercase && ctx.hasNumber
            ? "border-valid"
            : "border-error",
    },
    {
      // CONFIRM PASSWORD
      value: ctx.confirmValue,
      setter: ctx.setConfirmValue,
      borderStyle:
        ctx.confirmValue.length === 0
          ? "border-default"
          : ctx.confirmValue === ctx.passwordValue
            ? "border-valid"
            : "border-error",
    },
  ];
}
