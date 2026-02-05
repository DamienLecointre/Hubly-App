"use client";

import { useState } from "react";

export function useToggleId() {
  const [activeId, setActiveId] = useState("filter1");

  const toggle = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return { activeId, setActiveId, toggle };
}

export default useToggleId;
