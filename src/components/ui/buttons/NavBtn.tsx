"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// ICONS
import {
  HomeIcon,
  HeartIcon,
  PlusIcon,
  SearchIcon,
  UserIcon,
} from "@/components/ui/icons";

const NAV_BTN_ICONS = {
  home: HomeIcon,
  heart: HeartIcon,
  plus: PlusIcon,
  search: SearchIcon,
  user: UserIcon,
} as const;

type NavBtnIcon = keyof typeof NAV_BTN_ICONS;

type NavBtnProps = {
  href: string;
  label: string;
  icon: NavBtnIcon;
  variant?: "base" | "accent";
  className?: string;
};

function NavBtn({
  href,
  label,
  icon,
  variant = "base",
  className,
  ...rest
}: NavBtnProps) {
  const Icon = NAV_BTN_ICONS[icon];
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`navBtn ${variant} ${className ?? ""} ${isActive && href !== "/ajouter_collection" ? "activeLink" : ""} `}
      {...rest}
    >
      <Icon />
      {label}
    </Link>
  );
}

export default NavBtn;
