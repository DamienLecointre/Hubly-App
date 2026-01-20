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
  icon: RoundBtnIcon;
  variant?: "base" | "accent";
};

function RoundBtn({ icon, variant = "base", ...rest }: RoundBtnProps) {
  const Icon = ROUND_BTN_ICONS[icon];
  return (
    <button {...rest} className={`roundBtn ${variant} ${rest.className ?? ""}`}>
      <Icon />
    </button>
  );
}

export default RoundBtn;
