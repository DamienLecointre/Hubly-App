"use client";

import { useState } from "react";

type UseToggleIdType = {
  defaultValue: string;
};

export function useToggleId({ defaultValue }: UseToggleIdType) {
  const [activeId, setActiveId] = useState(defaultValue);

  const toggleId = (id: string) => {
    setActiveId((prev) => (prev === id ? defaultValue : id));
  };

  return { activeId, setActiveId, toggleId };
}

export default useToggleId;
