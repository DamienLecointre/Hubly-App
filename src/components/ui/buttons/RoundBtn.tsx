import { ComponentPropsWithoutRef } from "react";
// ICONS
import {
  MoonIcon,
  SunIcon,
  CrossLineIcon,
  HeartIcon,
} from "@/components/ui/icons";
import { RoundBtnData } from "@/data/btnData/RoundBtnData";

// const ROUND_BTN_ICONS = {
//   moon: MoonIcon,
//   sun: SunIcon,
//   cross: CrossLineIcon,
//   heart: HeartIcon,
// } as const;

// type RoundBtnIcon = keyof typeof ROUND_BTN_ICONS;

// type RoundBtnProps = ComponentPropsWithoutRef<"button"> & {
//   // type: "button" | "submit";
//   icon: RoundBtnIcon;
//   variant?: "base" | "accent";
//   onClick: () => void;
// };

type RoundBtnProps = ComponentPropsWithoutRef<"button"> & {
  // type: "button" | "submit";
  btnId: string;
  // variant?: "base" | "accent";
  onClick: () => void;
};

function RoundBtn({ btnId, onClick }: RoundBtnProps) {
  // const Icon = ROUND_BTN_ICONS[icon];

  const btnContent = RoundBtnData.find((e) => e.id === btnId);

  if (!btnContent) {
    return null;
  }

  const Icon = btnContent.icon;

  return (
    <button
      type="button"
      className={`roundBtn ${btnContent.variant} `}
      onClick={onClick}
    >
      <Icon />
    </button>
  );
}

export default RoundBtn;
