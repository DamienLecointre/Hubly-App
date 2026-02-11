"use client";

import Header from "@/components/layouts/header/Header";
import SectionHeader from "@/components/layouts/header/SectionHeader";
import CollectionCard from "@/components/modules/cards/CollectionCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [collectionQuantity, setCollectionQuantity] = useState(0);

  useEffect(() => {
    fetch("api/addCollection")
      .then((res) => res.json())
      .then((data) => setCollectionQuantity(data.data.length));
  }, []);

  return (
    <>
      <Header />
      <main className="fixeSafeSpace">
        <SectionHeader title="Mes Collections" quantity={collectionQuantity} />
        <div className=" flexColumn suroudedSpace_X24_YT32 overflow-y-auto gap-4 pb-8">
          {collectionQuantity === 0 && (
            <p className="text-secondary">
              Vous n'avez pas encore créé de collection. Cliquez sur le bouton
              add dans la barre de navigation pour créer votre première
              collection.
            </p>
          )}
          <CollectionCard />
        </div>
      </main>
    </>
  );
}
