"use client";

import { useState } from "react";

export function useToggleId() {
  const [activeId, setActiveId] = useState("filter1");

  const toggleId = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return { activeId, setActiveId, toggleId };
}

export default useToggleId;
