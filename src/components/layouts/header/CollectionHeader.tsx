import FilterMenu from "@/components/modules/submenus/FilterMenu";
import InfoBadge from "@/components/ui/badges/InfoBadge";
import PillBtn from "@/components/ui/buttons/PillBtn";
import RoundBtn from "@/components/ui/buttons/RoundBtn";
import SearchInput from "@/components/ui/inputs/SearchInput";

function CollectionHeader() {
  return (
    <div className="bg-card-background border-b border-b-card-border shadow-bottom-xl suroudedSpace_X16_Y24 ">
      <div className="centerBetween">
        <InfoBadge icon="book" label="Livres" variant="bgempty" />
        <RoundBtn type="button" icon="cross" variant="accent" />
      </div>
      <div className="pt-2 pb-6  ">
        <div className="centerBetween">
          <h4 className="text-primary">Nom collection</h4>{" "}
          {/* Nom collection = Valeur dynamique */}
          <InfoBadge icon="group" label="x" variant="bgempty" />{" "}
          {/* label = Valeur dynamique */}
        </div>
        <p className="text-secondary">X éléments</p>{" "}
        {/* X = Valeur dynamique */}
      </div>
      <div className="centerBetween gap-2">
        <SearchInput />
        <PillBtn type="button" label="Filter" variant="bgempty" />
        <PillBtn type="button" label="Trier" variant="bgempty" />
      </div>
      <FilterMenu />
    </div>
  );
}

export default CollectionHeader;
