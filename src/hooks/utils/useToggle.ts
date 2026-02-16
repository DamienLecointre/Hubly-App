import { useState } from "react";

export function useToggle() {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => {
    // console.log("useToggle : ", isActive);

    setIsActive((prev) => !prev);
  };
  return { toggle, isActive, setIsActive };
}
