"use client";

import { useEffect, useState } from "react";

type MembersType = {
  user_id: string;
  can_edit: boolean;
};

type CollectionType = {
  _id: string;
  title: string;
  type: "DEFAULT" | "BOOK" | "DISK" | "BUBBLE" | "BOARD_GAME" | "VIDEO_GAME";
  members: MembersType[];
  is_public: boolean;
  owner_id: string;
};

export function useFetchCollection() {
  const [collectionData, setCollectionData] = useState<CollectionType[]>([]);

  useEffect(() => {
    async function fetchCollection() {
      try {
        const res = await fetch("/api/addCollection");

        if (!res.ok) {
          throw new Error("Erreur lors du fetch");
        }

        const data = await res.json();

        setCollectionData(data.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCollection();
  }, []);
  // console.log(collectionData);

  return { collectionData };
}
