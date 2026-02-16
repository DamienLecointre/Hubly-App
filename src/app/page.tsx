"use client";

import { useState } from "react";
import { useFetchCollection } from "@/hooks/api/useFetchCollection";

import Header from "@/components/layouts/header/Header";
import SectionHeader from "@/components/layouts/header/SectionHeader";
import CollectionCard, {
  CollectionType,
} from "@/components/modules/cards/CollectionCard";

export default function Home() {
  const { collectionData } = useFetchCollection();

  const [category, setCategory] = useState<CollectionType["type"] | null>(null);

  const filteredCollections =
    category !== "TOUTES"
      ? collectionData.filter((e: CollectionType) => e.type === category)
      : collectionData;

  return (
    <>
      <Header />
      <main className="fixeSafeSpace">
        <SectionHeader
          title="Mes Collections"
          subtitle={category}
          quantity={filteredCollections.length}
          selectedCategory={setCategory}
        />
        <div className=" flexColumn suroudedSpace_X24_YT32 overflow-y-auto gap-4 pb-8">
          {filteredCollections.length === 0 && (
            <p className="text-secondary">
              Vous n'avez pas encore créé de collection. Cliquez sur le bouton
              add dans la barre de navigation pour créer votre première
              collection.
            </p>
          )}
          {filteredCollections.map((collection: CollectionType) => (
            <CollectionCard key={collection._id} collection={collection} />
          ))}
        </div>
      </main>
    </>
  );
}
