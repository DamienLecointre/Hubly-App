import PasswordRequirements from "@/components/ui/feedback/PasswordRequirements";

const passwordCheckerData = [
  {
    id: "passwordChecker1",
    label: "12 caractères",
  },
  {
    id: "passwordChecker2",
    label: "Une lettre majuscule",
  },
  {
    id: "passwordChecker3",
    label: "Une lettre minuscule",
  },
  {
    id: "passwordChecker4",
    label: "Un chiffre",
  },
  {
    id: "passwordChecker5",
    label: "Un caractère spécial",
  },
];

function PasswordChecker() {
  return (
    <div className="flex flex-col gap-6 ">
      <p className="text-primary">Le mot de passe doit contenir au moins :</p>
      <div className="flex flex-col gap-8">
        {passwordCheckerData.map((data) => (
          <PasswordRequirements key={data.id} label={data.label} />
        ))}
      </div>
    </div>
  );
}

export default PasswordChecker;
