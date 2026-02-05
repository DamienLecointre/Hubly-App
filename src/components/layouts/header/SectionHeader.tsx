"use client";

import FilterMenu from "@/components/modules/submenus/FilterMenu";
import InfoBadge from "@/components/ui/badges/InfoBadge";
import { useToggle } from "@/hooks/utils/useToggle";

type SectionHeaderProps = {
  title:
    | "Mes Collections"
    | "Mes Favoris"
    | "Chercher un article"
    | "Mon Profil";
  quantity: number;
};

function SectionHeader({ title, quantity }: SectionHeaderProps) {
  const { toggle, isActive } = useToggle();

  return (
    <div className="flex flex-col border-b border-b-card-border py-4">
      <div className="centerBetween px-6">
        <h4 className="text-primary">{title}</h4>
        <InfoBadge
          icon="filter"
          label="Filtrer"
          onclick={toggle}
          btnSate={isActive ? "active" : "bgempty"}
        />
      </div>
      <p className="text-secondary px-6">{quantity} collections</p>
      {isActive && <FilterMenu />}
    </div>
  );
}

export default SectionHeader;
