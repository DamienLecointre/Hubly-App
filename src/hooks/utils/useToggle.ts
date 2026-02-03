import { useState } from "react";

export function useToggle() {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => {
    setIsActive((prev) => !prev);
  };
  return { toggle, isActive, setIsActive };
}
