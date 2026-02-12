"use client";

import { filterMenuData } from "@/data/submenuData/FilterMenuData";

import InfoBadge from "@/components/ui/badges/InfoBadge";

type FilterMenuType = {
  activeId: string;
  toggle: (value: string) => void;
};

function FilterMenu({ activeId, toggle }: FilterMenuType) {
  return (
    <div
      className="flex items-center overflow-x-auto [scrollbar-width:none]
    [-ms-overflow-style:none]
    [&::-webkit-scrollbar]:hidden gap-2 pt-6 pl-6 "
    >
      {filterMenuData.map((data) => (
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
