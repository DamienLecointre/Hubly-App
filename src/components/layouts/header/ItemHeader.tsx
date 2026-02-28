"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { ItemHeaderContext } from "@/context/ItemHeaderContext";
import FilterMenu from "@/components/modules/submenus/FilterMenu";
import { FilterItemData } from "@/data/submenuData/FilterItemData";
import { InfoBadgeData } from "@/data/badgesdata/InfoBadgeData";
import useToggleId from "@/hooks/utils/useToggleId";

import InfoBadge from "@/components/ui/badges/InfoBadge";
import RoundBtn from "@/components/ui/buttons/RoundBtn";
import SearchInput from "@/components/ui/inputs/SearchInput";
import { useCapitalizeWord } from "@/hooks/utils/useCapitalizeWord";

type ItemHeaderType = {
  isFilterMenu: (value: string) => void;
};

function ItemHeader({ isFilterMenu }: ItemHeaderType) {
  const router = useRouter();
  const context = useContext(ItemHeaderContext);
  if (!context) {
    throw new Error("ItemCard must be used within an ItemHeaderProvider");
  }

  const { collection } = context;

  const collectionName = useCapitalizeWord(collection?.title || "Sans titre");

  const toggleMenu = useToggleId({
    defaultValue: "",
  });
  const filterMenu = useToggleId({
    defaultValue: "TOUS",
  });

  const handleOpenMenu = (value: string) => {
    toggleMenu.toggleId(value);
    isFilterMenu(value);
  };

  const handleClose = () => {
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-card-background border-b border-b-card-border shadow-bottom py-6 ">
      <div className="centerBetween px-6 pb-2">
        <InfoBadge iconId={collection?.type || ""} />
        <RoundBtn btnId="CROSS_LINE" onClick={handleClose} />
      </div>
      <div className="px-6">
        <div className="flex justify-between">
          <h4 className="text-primary">Collection {collectionName} </h4>
          <InfoBadge
            iconId="GROUP"
            labelValue={
              collection?.members.length === 0
                ? "1"
                : collection?.members.length.toString()
            }
          />{" "}
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
                onclick={() => handleOpenMenu(data.id)}
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
