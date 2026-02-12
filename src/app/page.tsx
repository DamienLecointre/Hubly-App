"use client";

import { useFetchCollection } from "@/hooks/api/useFetchCollection";

import Header from "@/components/layouts/header/Header";
import SectionHeader from "@/components/layouts/header/SectionHeader";
import CollectionCard from "@/components/modules/cards/CollectionCard";

export default function Home() {
  const { collectionData } = useFetchCollection();

  return (
    <>
      <Header />
      <main className="fixeSafeSpace">
        <SectionHeader
          title="Mes Collections"
          quantity={collectionData.length}
        />
        <div className=" flexColumn suroudedSpace_X24_YT32 overflow-y-auto gap-4 pb-8">
          {collectionData.length === 0 && (
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
