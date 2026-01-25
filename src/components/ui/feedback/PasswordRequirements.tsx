type PasswordRequirementsProps = {
  label: string;
};

function PasswordRequirements({ label }: PasswordRequirementsProps) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="w-3 h-3 border border-border-input rounded-xs centerChild"></span>
      {/* A ajouter dans span : peer-checked:bg-checked transition-colors duration-200  */}
      <p className="flex items-center caption text-secondary">{label}</p>
    </div>
  );
}

export default PasswordRequirements;
