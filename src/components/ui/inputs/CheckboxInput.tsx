type CheckboxInputProps = {
  label: string;
};

function CheckboxInput({ label }: CheckboxInputProps) {
  return (
    <label className="flex items-center space-x-2.5 cursor-pointer">
      <input type="checkbox" className="hidden peer" />
      <span className="w-5 h-5 border border-border-input rounded-sm centerChild peer-checked:bg-checked transition-colors duration-200"></span>
      <span className="caption text-primary-input">{label}</span>
    </label>
  );
}

export default CheckboxInput;
