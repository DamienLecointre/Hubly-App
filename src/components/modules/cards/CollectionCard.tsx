import ImgBadge from "@/components/ui/badges/ImgBadge";
import InfoBadge from "@/components/ui/badges/InfoBadge";
import PillBtn from "@/components/ui/buttons/PillBtn";

function CollectionCard() {
  return (
    <div className="bg-card-gradient border border-card-border rounded-3xl py-4 ">
      <div className="flex flex-col gap-4 px-4 ">
        <div className="centerBetween  ">
          <InfoBadge icon="book" label="Livres" />{" "}
          {/* icon + label = Valeur dynamique */}
          <InfoBadge icon="group" label="X" />{" "}
          {/* icon + label = Valeur dynamique */}
        </div>
        <div>
          <h4 className="text-primary">Titre collection</h4>{" "}
          {/* iTitre collection = Valeur dynamique */}
          <p className="text-secondary">X éléments</p>{" "}
          {/* X = Valeur dynamique */}
        </div>
      </div>
      <div className="flex items-center gap-2 py-4 pl-4 overflow-x-auto ">
        <ImgBadge src="/img/1003w-4f3qPZ3bak0.webp" />
        <ImgBadge src="/img/1003w-4f3qPZ3bak0.webp" />
        <ImgBadge src="/img/1003w-4f3qPZ3bak0.webp" />
        <ImgBadge src="/img/1003w-4f3qPZ3bak0.webp" />
      </div>
      <div className="centerBetween px-4 ">
        <PillBtn type="button" label="Ajouter un élément" variant="bgfull" />
        <PillBtn type="button" label="Consulter" variant="bgfull" />
      </div>
    </div>
  );
}

export default CollectionCard;
