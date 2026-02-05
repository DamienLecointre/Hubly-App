"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import RoundBtn from "@/components/ui/buttons/RoundBtn";
import HublyLogo from "@/components/ui/icons/HublyLogo";

function Header() {
  const [user, setUser] = useState("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    fetch("api/me", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setUser(data.data.username));
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    fetch("/api/theme", {
      method: "POST",
      body: JSON.stringify({ theme }),
    });
  };

  return (
    <header className="fixed h-20.5 w-full centerBetween bg-card-background border-b border-b-card-border top-0 left-0 right-0 suroudedSpace_X16_Y24 shadow-bottom z-100">
      <div className="flex items-center">
        <HublyLogo height="h-[40px]" width="w-[40px]" />
        <div className="flex flex-col pl-6">
          <p className="p-small text-secondary ">Bonjour,</p>
          <h4 className="text-primary">{user}</h4>
        </div>
      </div>
      <RoundBtn
        type="button"
        icon={theme === "light" ? "sun" : "moon"}
        variant="base"
        onClick={toggleTheme}
      />
    </header>
  );
}

export default Header;
