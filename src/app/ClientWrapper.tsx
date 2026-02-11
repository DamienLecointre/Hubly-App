"use client";

import { useEffect, useState } from "react";
import AuthProvider from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "@/components/layouts/navbar/Navbar";
import BrandHeader from "@/components/layouts/header/BrandHeader";
import AddCollectionProvider from "@/context/AddCollectionContext";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [appReady, setAppReady] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/me");

        if (res.ok) {
          if (isAuthPage) router.replace("/");
          else setAppReady(true);
        } else {
          if (!isAuthPage) router.replace("/login");
          else setAppReady(true);
        }
      } catch (err) {
        console.error("serveur erreur : ", err);

        if (!isAuthPage) router.replace("/login");
      }
    };

    const hasLoadedBefore = sessionStorage.getItem("app_loaded");
    const delay = hasLoadedBefore ? 0 : 3000;

    const timer = setTimeout(() => {
      sessionStorage.setItem("app_loaded", "true");
      checkAuth();
    }, delay);

    return () => clearTimeout(timer);
  }, [pathname, router, isAuthPage]);

  if (!appReady) {
    return (
      <div className="flex-1 centerChild">
        <BrandHeader location="loading" />
      </div>
    );
  }

  return (
    <AuthProvider>
      <AddCollectionProvider>
        <div className="flexFullHeight">
          {children}
          {!isAuthPage && <Navbar />}
        </div>
      </AddCollectionProvider>
    </AuthProvider>
  );
}
