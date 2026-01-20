import ArrowIcon from "../icons/ArrowIcon";

type GoToBtnProps = {
  label: string;
};

function GoToBtn({ label }: GoToBtnProps) {
  return (
    <button className="centerChild gap-[8] text-secondary-btn p-small cursor-pointer">
      <ArrowIcon />
      {label}
    </button>
  );
}

export default GoToBtn;
