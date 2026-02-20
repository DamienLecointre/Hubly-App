"use client";

import Link from "next/link";
import ImgBadge from "@/components/ui/badges/ImgBadge";
import InfoBadge from "@/components/ui/badges/InfoBadge";
import PillBtn from "@/components/ui/buttons/PillBtn";
import { useState } from "react";

type MembersType = {
  user_id: string;
  can_edit: boolean;
};

export type CollectionType = {
  _id: string;
  title: string;
  type: string;
  members: MembersType[];
  is_public: boolean;
  owner_id: string;
};

type CollectionCardProps = {
  collection: CollectionType;
};

function CollectionCard({ collection }: CollectionCardProps) {
  // const [collectionTitle, setCollectionTitle] = useState("");

  // const handleClick = () => {
  //   console.log("click : ", collection.title);
  //   setCollectionTitle(collection.title);
  // };

  return (
    <div className="cardGradient py-4 gap-2">
      <div className="flex flex-col gap-4 px-4 ">
        <div className="centerBetween  ">
          <InfoBadge iconId={collection.type} />
          <InfoBadge
            iconId="GROUP"
            labelValue={(collection.members.length + 1).toString()}
          />
        </div>
        <div>
          <h4 className="text-primary">Collection {collection.title}</h4>
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
        <Link href="/nouvel_element/nouveau_produit">
          <PillBtn
            type="button"
            label="Ajouter un élément"
            variant="bgfull"
            // onclick={handleClick}
          />
        </Link>
        <Link href="/produits">
          <PillBtn type="button" label="Consulter" variant="bgfull" />
        </Link>
      </div>
    </div>
  );
}

export default CollectionCard;
