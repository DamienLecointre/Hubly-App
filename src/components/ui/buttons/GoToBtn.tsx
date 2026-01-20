import ArrowIcon from "../icons/ArrowIcon";

type GoToBtnProps = {
  type: "button";
  label: string;
};

function GoToBtn({ type, label }: GoToBtnProps) {
  return (
    <button
      type={type}
      className="centerChild gap-2 text-secondary-btn p-small cursor-pointer"
    >
      <ArrowIcon />
      {label}
    </button>
  );
}

export default GoToBtn;
