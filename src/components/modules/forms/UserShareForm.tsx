import FormInput from "@/components/ui/inputs/FormInput";

function UserShareForm() {
  return (
    <div className="flex flex-col gap-8">
      <div className="border-b border-b-card-border pb-4 ">
        <h4 className="text-primary">Inviter un ami</h4>
      </div>
      <FormInput
        iconLeft="mail"
        type="email"
        placeholder="Adresse email"
        iconRight="empty"
      />
    </div>
  );
}

export default UserShareForm;
