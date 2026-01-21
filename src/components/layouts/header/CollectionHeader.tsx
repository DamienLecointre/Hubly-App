import InfoBadge from "@/components/ui/badges/InfoBadge";
import PillBtn from "@/components/ui/buttons/PillBtn";
import RoundBtn from "@/components/ui/buttons/RoundBtn";
import SearchInput from "@/components/ui/inputs/SearchInput";

function CollectionHeader() {
  return (
    <div className="bg-card-background border-b border-b-card-border px-6 py-4 ">
      <div className="flex items-center justify-between">
        <InfoBadge icon="book" label="Livres" />
        <RoundBtn type="button" icon="cross" variant="accent" />
      </div>
      <div className="pt-2 pb-6  ">
        <div className="flex items-center justify-between">
          <h4 className="text-primary">Nom collection</h4>{" "}
          {/* Nom collection = Valeur dynamique */}
          <InfoBadge icon="group" label="x" /> {/* label = Valeur dynamique */}
        </div>
        <p className="text-secondary">X éléments</p>{" "}
        {/* X = Valeur dynamique */}
      </div>
      <div className="flex items-center justify-between">
        <SearchInput />
        <PillBtn type="button" label="Filter" variant="bgempty" />
        <PillBtn type="button" label="Trier" variant="bgempty" />
      </div>
    </div>
  );
}

export default CollectionHeader;
