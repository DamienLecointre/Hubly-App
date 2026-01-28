type PasswordRequirementsProps = {
  label: string;
  boxStyle: string;
  textStyle: string;
};

function PasswordRequirements({
  label,
  boxStyle,
  textStyle,
}: PasswordRequirementsProps) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`w-3 h-3 border border-border-input rounded-xs centerChild ${boxStyle} `}
      ></span>
      <p className={`flex items-center caption ${textStyle}`}>{label}</p>
    </div>
  );
}

export default PasswordRequirements;
