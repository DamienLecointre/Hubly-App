"use client";

import ImgBadge from "@/components/ui/badges/ImgBadge";
import InfoBadge from "@/components/ui/badges/InfoBadge";
import PillBtn from "@/components/ui/buttons/PillBtn";
import {
  COLLECTION_TYPES,
  CollectionCategory,
} from "@/data/CollectionTypesData";
import { useEffect, useState } from "react";

type MembersType = {
  user_id: string;
  can_edit: boolean;
};

type CollectionType = {
  _id: string;
  title: string;
  type: CollectionCategory;
  members: MembersType[];
  is_public: boolean;
  owner_id: string;
};

function CollectionCard() {
  const [collectionData, setCollectionData] = useState<CollectionType[]>([]);

  useEffect(() => {
    fetch("api/addCollection")
      .then((res) => res.json())
      .then((res) => {
        setCollectionData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {collectionData.map((data) => {
        const typeConfig = COLLECTION_TYPES[data.type];
        return (
          <div className="cardGradient " key={data._id}>
            <div className="flex flex-col gap-4 px-4 " key={data._id}>
              <div className="centerBetween  ">
                <InfoBadge icon={typeConfig.icon} label={typeConfig.label} />
                <InfoBadge
                  icon="group"
                  label={(data.members.length + 1).toString()}
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
