"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import Navbar from "@/components/layouts/navbar/Navbar";
import BrandHeader from "@/components/layouts/header/BrandHeader";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [appReady, setAppReady] = useState(false);
  const pathname = usePathname();
  const hideNavbar = pathname === "/login" || pathname === "/signup";

  useEffect(() => {
    // const hasLoaded = sessionStorage.getItem("app_loaded");

    const timer = setTimeout(
      () => {
        // sessionStorage.setItem("app_loaded", "true");
        setAppReady(true);
      },
      3000,
      // hasLoaded ? 0 : 3000,
    );

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!appReady && (
        <div className="h-full w-full centerChild">
          <BrandHeader location="loading" />
        </div>
      )}

      {appReady && (
        <>
          {children}
          {!hideNavbar && <Navbar />}
        </>
      )}
    </>
  );
}
