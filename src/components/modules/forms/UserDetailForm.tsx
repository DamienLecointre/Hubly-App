import FormInput from "@/components/ui/inputs/FormInput";

const UserDetailData = [
  {
    id: "userDetail1",
    iconLeft: "empty",
    type: "text",
    placeholder: "Nom utilisateur", // placeholder = valeur dynamique
    iconRight: "pencil",
  },
  {
    id: "userDetail2",
    iconLeft: "empty",
    type: "email",
    placeholder: "email@gmail.com", // placeholder = valeur dynamique
    iconRight: "pencil",
  },
  {
    id: "userDetail3",
    iconLeft: "empty",
    type: "password",
    placeholder: "mdp", // placeholder = valeur dynamique
    iconRight: "pencil",
  },
] as const;

function UserDetailForm() {
  return (
    <div className="flex flex-col gap-8">
      <div className="border-b border-b-card-border pb-4 ">
        <h4 className="text-primary">Information perso</h4>
      </div>
      <div className="flex flex-col gap-4">
        {UserDetailData.map((data) => (
          <FormInput
            key={data.id}
            iconLeft={data.iconLeft}
            type={data.type}
            placeholder={data.placeholder}
            iconRight={data.iconRight}
          />
        ))}
      </div>
    </div>
  );
}

export default UserDetailForm;
