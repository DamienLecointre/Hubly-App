"use client";

import { useEffect } from "react";
import { useToggle } from "@/hooks/utils/useToggle";
import useToggleId from "@/hooks/utils/useToggleId";
import type { CollectionType } from "@/components/modules/cards/CollectionCard";

import FilterMenu from "@/components/modules/submenus/FilterMenu";
import InfoBadge from "@/components/ui/badges/InfoBadge";

type SectionHeaderProps = {
  title:
    | "Mes Collections"
    | "Mes Favoris"
    | "Chercher un article"
    | "Mon Profil";
  subtitle: string;
  quantity: number;
  selectedCategory: (value: CollectionType["type"] | null) => void;
};

function SectionHeader({
  title,
  subtitle,
  quantity,
  selectedCategory,
}: SectionHeaderProps) {
  const { toggle, isActive } = useToggle();
  const { toggleId, activeId } = useToggleId();

  useEffect(() => {
    selectedCategory(activeId);
  }, [activeId, selectedCategory]);

  let value = "";

  switch (subtitle) {
    case "TOUTES":
      value = "Toutes";
      break;
    case "BOOK":
      value = "Livres";
      break;
    case "DISK":
      value = "Musiques";
      break;
    case "BUBBLE":
      value = "Bandes-dessinées";
      break;
    case "BOARD_GAME":
      value = "Jeux de société";
      break;
    case "VIDEO_GAME":
      value = "Jeux vidéo";
      break;
  }

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
      <div className="flex text-secondary px-6 gap-[8px]">
        <p>{value} : </p>
        <p>
          {quantity} {quantity > 1 ? "collections" : "collection"}
        </p>
      </div>
      {isActive && <FilterMenu toggle={toggleId} activeId={activeId} />}
    </div>
  );
}

export default SectionHeader;
