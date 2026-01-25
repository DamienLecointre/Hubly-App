import Link from "next/link";
import { ArrowIcon } from "../icons";

const LINK_BTN_ICON = {
  arrow: ArrowIcon,
  empty: () => <></>,
} as const;

type LinkBtnIcon = keyof typeof LINK_BTN_ICON;

type LinkBtnProps = {
  icon: LinkBtnIcon;
  link: string;
  label: string;
  variant: "base" | "accent";
};

function LinkBtn({ icon, link, label, variant = "base" }: LinkBtnProps) {
  const Icon = LINK_BTN_ICON[icon];
  return (
    <div className={`centerChild linkBtn cursor-pointer ${variant} `}>
      <Icon />
      <Link href={link} className="p-small">
        {label}
      </Link>
    </div>
  );
}

export default LinkBtn;
