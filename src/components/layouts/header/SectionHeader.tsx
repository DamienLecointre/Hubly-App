"use client";

import { useToggle } from "@/hooks/utils/useToggle";
import useToggleId from "@/hooks/utils/useToggleId";

import FilterMenu from "@/components/modules/submenus/FilterMenu";
import InfoBadge from "@/components/ui/badges/InfoBadge";

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
  const { toggleId, activeId } = useToggleId();

  return (
    <div className="flex flex-col border-b border-b-card-border py-4">
      <div className="centerBetween px-6">
        <h4 className="text-primary">{title}</h4>
        <InfoBadge
          iconId="FILTER"
          onclick={toggle}
          btnSate={isActive ? "active" : "bgempty"}
        />
      </div>
      <p className="text-secondary px-6">
        {quantity} {quantity > 1 ? "collections" : "collection"}
      </p>
      {isActive && <FilterMenu toggle={toggleId} activeId={activeId} />}
    </div>
  );
}

export default SectionHeader;
