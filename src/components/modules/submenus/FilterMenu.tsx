"use client";

import InfoBadge from "@/components/ui/badges/InfoBadge";

type FilterMenuDataFile = {
  id: string;
  icon: string;
  btnSate: string;
};

type FilterMenuType = {
  activeId: string;
  toggle: (value: string) => void;
  dataFile: readonly FilterMenuDataFile[];
};

function FilterMenu({ activeId, toggle, dataFile }: FilterMenuType) {
  return (
    <div
      className="flex items-center overflow-x-auto [scrollbar-width:none]
    [-ms-overflow-style:none]
    [&::-webkit-scrollbar]:hidden gap-2 pt-6 pl-6 pr-6 "
    >
      {dataFile?.map((data) => (
        <InfoBadge
          key={data.id}
          iconId={data.icon}
          btnSate={activeId === data.id ? "active" : "bgempty"}
          onclick={() => toggle(data.id)}
        />
      ))}
    </div>
  );
}

export default FilterMenu;
