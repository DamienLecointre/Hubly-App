"use client";

import ItemHeader from "@/components/layouts/header/ItemHeader";
import ItemCard from "@/components/modules/cards/ItemCard";
import SortMenu from "@/components/modules/submenus/SortMenu";
import { useToggle } from "@/hooks/utils/useToggle";

function Page() {
  const { toggle, isActive, setIsActive } = useToggle();
  const isFilterMenu = (value: string) => {
    if (value === "TRIER") {
      toggle();
    }
    if (value === "FILTER" && isActive) {
      setIsActive(false);
    }
  };

  return (
    <>
      <ItemHeader isFilterMenu={isFilterMenu} />
      <main className="overflow-y-auto">
        <SortMenu canOpenMenu={isActive} />
        <div className="suroudedSpace_X24_YT32 pb-[calc(85px+32px)]">
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </main>
    </>
  );
}

export default Page;
