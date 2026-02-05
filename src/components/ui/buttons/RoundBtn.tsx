import { ComponentPropsWithoutRef } from "react";
// ICONS
import {
  MoonIcon,
  SunIcon,
  CrossLineIcon,
  HeartIcon,
} from "@/components/ui/icons";

const ROUND_BTN_ICONS = {
  moon: MoonIcon,
  sun: SunIcon,
  cross: CrossLineIcon,
  heart: HeartIcon,
} as const;

type RoundBtnIcon = keyof typeof ROUND_BTN_ICONS;

type RoundBtnProps = ComponentPropsWithoutRef<"button"> & {
  type: "button" | "submit";
  icon: RoundBtnIcon;
  variant?: "base" | "accent";
  onClick: () => void;
};

function RoundBtn({ type, icon, variant = "base", onClick }: RoundBtnProps) {
  const Icon = ROUND_BTN_ICONS[icon];
  return (
    <button type={type} className={`roundBtn ${variant} `} onClick={onClick}>
      <Icon />
    </button>
  );
}

export default RoundBtn;
