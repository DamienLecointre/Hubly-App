"use client";

import { useRouter } from "next/navigation";
import FilterMenu from "@/components/modules/submenus/FilterMenu";
import { FilterItemData } from "@/data/submenuData/FilterItemData";
import { InfoBadgeData } from "@/data/badgesdata/InfoBadgeData";
import useToggleId from "@/hooks/utils/useToggleId";

import InfoBadge from "@/components/ui/badges/InfoBadge";
import RoundBtn from "@/components/ui/buttons/RoundBtn";
import SearchInput from "@/components/ui/inputs/SearchInput";

function ItemHeader() {
  const toggleMenu = useToggleId({
    defaultValue: "",
  });
  const filterMenu = useToggleId({
    defaultValue: "TOUS",
  });
  const router = useRouter();

  const handleClose = () => {
    router.push("/");
  };

  return (
    <header className="fixed w-full bg-card-background border-b border-b-card-border shadow-bottom py-6">
      <div className="centerBetween px-6 pb-2">
        <InfoBadge iconId="BOOK" />
        <RoundBtn btnId="CROSS_LINE" onClick={handleClose} />
      </div>
      <div className="px-6">
        <div className="flex justify-between">
          <h4 className="text-primary">Nom collection</h4>{" "}
          {/* Nom collection = Valeur dynamique */}
          <InfoBadge iconId="GROUP" labelValue="X" />{" "}
          {/* label = Valeur dynamique */}
        </div>
        <p className="text-secondary">X éléments</p>{" "}
        {/* X = Valeur dynamique */}
      </div>
      <div className="centerBetween pt-6 px-6 gap-2">
        <SearchInput />
        {InfoBadgeData.map((data) => {
          if (data.id === "FILTER" || data.id === "TRIER") {
            return (
              <InfoBadge
                key={data.id}
                iconId={data.id}
                btnSate={toggleMenu.activeId === data.id ? "active" : "bgempty"}
                onclick={() => toggleMenu.toggleId(data.id)}
              />
            );
          }
        })}
      </div>
      {toggleMenu.activeId === "FILTER" && (
        <FilterMenu
          toggle={filterMenu.toggleId}
          activeId={filterMenu.activeId}
          dataFile={FilterItemData}
        />
      )}
    </header>
  );
}

export default ItemHeader;
