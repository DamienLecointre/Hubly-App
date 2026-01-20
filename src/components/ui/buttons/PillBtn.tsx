type Props = {
  type: "button";
  label: string;
};

function PillBtn({ type, label }: Props) {
  return (
    <button type={type} className="pillBtn">
      {label}
    </button>
  );
}

export default PillBtn;
