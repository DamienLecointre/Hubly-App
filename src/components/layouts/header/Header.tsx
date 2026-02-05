"use client";

import { useEffect, useState } from "react";
import RoundBtn from "@/components/ui/buttons/RoundBtn";
import HublyLogo from "@/components/ui/icons/HublyLogo";

function Header() {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("api/me", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setUser(data.data.username));
  }, []);
  return (
    <header className="h-20.5 w-full centerBetween bg-card-background border-b border-b-card-border top-0 left-0 right-0 suroudedSpace_X16_Y24 shadow-bottom">
      <div className="flex items-center">
        <HublyLogo height="h-[40px]" width="w-[40px]" />
        <div className="flex flex-col pl-6">
          <p className="p-small text-secondary ">Bonjour,</p>
          <h4 className="text-primary">{user}</h4>{" "}
          {/* Utilisateur = Valeur dynamique */}
        </div>
      </div>
      <RoundBtn type="button" icon="moon" variant="base" />
    </header>
  );
}

export default Header;
