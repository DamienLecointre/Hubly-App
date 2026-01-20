type Props = {
  label: string;
};

function PillBtn({ label }: Props) {
  return <button className="pillBtn">{label}</button>;
}

export default PillBtn;
