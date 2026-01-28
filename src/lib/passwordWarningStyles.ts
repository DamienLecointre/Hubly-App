type PasswordStyleInput = {
  passwordValue: string;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
  hasSpecial: boolean;
};

export function passwordWarningStyles({
  passwordValue,
  hasUppercase,
  hasLowercase,
  hasNumber,
  hasSpecial,
}: PasswordStyleInput) {
  return [
    {
      boxStyle: passwordValue.length >= 12 ? "bg-valid" : "bg-warning",
      textStyle: passwordValue.length >= 12 ? "text-primary" : "text-secondary",
    },
    {
      boxStyle: hasUppercase ? "bg-valid" : "bg-warning",
      textStyle: hasUppercase ? "text-primary" : "text-secondary",
    },
    {
      boxStyle: hasLowercase ? "bg-valid" : "bg-warning",
      textStyle: hasLowercase ? "text-primary" : "text-secondary",
    },
    {
      boxStyle: hasNumber ? "bg-valid" : "bg-warning",
      textStyle: hasNumber ? "text-primary" : "text-secondary",
    },
    {
      boxStyle: hasSpecial ? "bg-valid" : "bg-warning",
      textStyle: hasSpecial ? "text-primary" : "text-secondary",
    },
  ];
}
