import { SelectCollectionData } from "@/data/collectionData/SelectCollectionData";

import ChevronIcon from "../icons/ChevronIcon";

type SelectInputProps = {
  selectedValue: string;
  onChange: (value: string) => void;
};

function SelectInput({ selectedValue, onChange }: SelectInputProps) {
  return (
    <div
      className={`relative centerBetween font-secondary font-normal text-[16px] bg-bg-input text-primary-input p-4 border rounded-2xl placeholder:text-primary-input focus-within:ring-1 focus-within:ring-border-focus`}
    >
      <select
        className="w-full appearance-none outline-none"
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
      >
        {SelectCollectionData.map((data) => (
          <option key={data.id} value={data.label}>
            {data.label}
          </option>
        ))}
      </select>
      <ChevronIcon />
    </div>
  );
}

export default SelectInput;
