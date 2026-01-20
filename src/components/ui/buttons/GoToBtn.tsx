import ArrowIcon from "../icons/ArrowIcon";

type GoToBtnProps = {
  label: string;
};

function GoToBtn({ label }: GoToBtnProps) {
  return (
    <button className="flex justify-center items-center gap-[8] text-secondary-btn p-small cursor-pointer">
      <ArrowIcon />
      {label}
    </button>
  );
}

export default GoToBtn;
