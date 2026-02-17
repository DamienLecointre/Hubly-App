"use client";

import { sortlabelsData } from "@/data/submenuData/SortlabelsData";

import RoundBtn from "@/components/ui/buttons/RoundBtn";
import CheckboxInput from "@/components/ui/inputs/CheckboxInput";
import PillBtn from "@/components/ui/buttons/PillBtn";

type SortMenuType = {
  canOpenMenu: boolean;
};

function SortMenu({ canOpenMenu }: SortMenuType) {
  const handleClose = () => {
    console.log("close");
  };
  return (
    <div className={`menu-wrapper ${canOpenMenu ? "is-open" : ""}`}>
      <div className="menu-content border-b border-b-card-border">
        <div className="flex flex-col gap-6 p-6">
          <p className="text-primary">Trier par :</p>
          <div className="flex flex-col gap-4">
            {sortlabelsData.map((data) => (
              <CheckboxInput key={data.id} label={data.label} />
            ))}
          </div>
          <PillBtn type="button" label="Appliquer" variant="little" />
        </div>
      </div>
    </div>
  );
}

export default SortMenu;
