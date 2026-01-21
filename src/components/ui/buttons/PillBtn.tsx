type Props = {
  type: "button";
  label: string;
  variant: "bgfull" | "bgempty";
};

function PillBtn({ type = "button", label, variant = "bgfull" }: Props) {
  return (
    <button type={type} className={`pillBtn ${variant}`}>
      {label}
    </button>
  );
}

export default PillBtn;
