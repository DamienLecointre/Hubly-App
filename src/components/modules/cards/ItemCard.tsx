import { useContext } from "react";

import ImgBadge from "@/components/ui/badges/ImgBadge";
import { ItemHeaderContext } from "@/context/ItemHeaderContext";

import InfoBadge from "@/components/ui/badges/InfoBadge";
import PillBtn from "@/components/ui/buttons/PillBtn";
import RoundBtn from "@/components/ui/buttons/RoundBtn";

function ItemCard({ title, subtitle }) {
  // NOTA : importer useCapitalizeWord pour la mise en forme des titres (maj aux premiers mots)
  return (
    <div className="cardGradient flex p-2 gap-4  ">
      <div className="flexColumn gap-2">
        <div className="centerChild border border-border-secondary-btn rounded-xl p-2 ">
          <ImgBadge src="/img/1003w-4f3qPZ3bak0.webp" />
        </div>
        <InfoBadge iconId="IN_PROGRESS" btnSate="little" />
      </div>
      <div className="w-full flexColumn justify-between gap-2">
        <div className="flexFullHeight">
          <div className=" centerBetween">
            <h4>Titre</h4>
            <RoundBtn btnId="HEART" onClick={onclick} />
          </div>
          <div className="text-secondary">
            <p>Sous-titre</p>
            <p className="caption">Vol.1</p>
          </div>
          <p className="h-full flex items-end caption text-secondary">
            Ajouter par <span className="text-primary ml-1.5">Damien</span>
          </p>
        </div>
        <PillBtn type="button" label="Consulter" variant="little" />
      </div>
    </div>
  );
}

export default ItemCard;
