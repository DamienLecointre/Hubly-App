"use client";

import { useFetchCollection } from "@/hooks/api/useFetchCollection";

import ImgBadge from "@/components/ui/badges/ImgBadge";
import InfoBadge from "@/components/ui/badges/InfoBadge";
import PillBtn from "@/components/ui/buttons/PillBtn";

function CollectionCard() {
  const { collectionData } = useFetchCollection();

  return (
    <>
      {collectionData.map((data) => {
        return (
          <div className="cardGradient " key={data._id}>
            <div className="flex flex-col gap-4 px-4 " key={data._id}>
              <div className="centerBetween  ">
                <InfoBadge iconId={data.type} />
                <InfoBadge
                  iconId="GROUP"
                  labelValue={(data.members.length + 1).toString()}
                />
              </div>
              <div>
                <h4 className="text-primary">Collection {data.title}</h4>
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
              <PillBtn
                type="button"
                label="Ajouter un élément"
                variant="bgfull"
              />
              <PillBtn type="button" label="Consulter" variant="bgfull" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CollectionCard;
