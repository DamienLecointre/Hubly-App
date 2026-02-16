"use client";

import { useState } from "react";

export function useToggleId() {
  const [activeId, setActiveId] = useState("TOUTES");

  const toggleId = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
    console.log("useToggleId : ", id);
  };

  return { activeId, setActiveId, toggleId };
}

export default useToggleId;
