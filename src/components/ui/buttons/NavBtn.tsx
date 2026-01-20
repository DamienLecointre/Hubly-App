import { ComponentPropsWithoutRef } from "react";
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

type NavBtn = ComponentPropsWithoutRef<"button"> & {
  label: string;
  icon: NavBtnIcon;
  variant: "base" | "accent";
};

function NavBtn({ label, icon, variant = "base", ...rest }: NavBtn) {
  const Icon = NAV_BTN_ICONS[icon];
  return (
    <button {...rest} className={`navBtn ${variant} ${rest.className ?? ""} `}>
      <Icon />
      {label}
    </button>
  );
}

export default NavBtn;
