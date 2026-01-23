"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/layouts/navbar/Navbar";
import BrandHeader from "@/components/layouts/header/BrandHeader";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [appReady, setAppReady] = useState(false);

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
          <BrandHeader />
        </div>
      )}

      {appReady && (
        <>
          {children}
          <Navbar />
        </>
      )}
    </>
  );
}
