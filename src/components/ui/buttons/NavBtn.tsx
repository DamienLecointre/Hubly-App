"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavBtnData } from "@/data/btnData/NavBtnData";

type NavBtnProps = {
  btnId: string;
};

function NavBtn({ btnId }: NavBtnProps) {
  const pathname = usePathname();
  const BtnIconId = NavBtnData.find((e) => e.id === btnId);
  if (!BtnIconId) {
    return null;
  }
  const Icon = BtnIconId.icon;
  const isActive = pathname === BtnIconId.href;

  return (
    <Link
      href={BtnIconId.href}
      className={`navBtn 
        ${BtnIconId?.variant} 
        ${isActive && BtnIconId.href !== "/nouvel_element" ? "activeLink" : ""} 
        ${(isActive && BtnIconId.href === "/nouvel_element") || BtnIconId.href.startsWith("/nouvel_element/") ? "addActive" : ""} `}
    >
      <Icon />
      {BtnIconId.label}
    </Link>
  );
}

export default NavBtn;
