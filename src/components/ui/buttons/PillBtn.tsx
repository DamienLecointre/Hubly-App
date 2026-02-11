type Props = {
  type: "button" | "submit";
  label: string;
  variant: "bgfull" | "bgempty";
  onclick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function PillBtn({
  type = "button",
  label,
  variant = "bgfull",
  onclick,
}: Props) {
  return (
    <button type={type} className={`pillBtn ${variant}`} onClick={onclick}>
      {label}
    </button>
  );
}

export default PillBtn;
