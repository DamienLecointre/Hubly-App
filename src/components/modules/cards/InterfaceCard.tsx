import Link from "next/link";

import {
  CameraIcon,
  FolderIcon,
  LayerPlusIcon,
  PencilIcon,
} from "@/components/ui/icons";

const CARD_ICON = {
  camera: CameraIcon,
  pencil: PencilIcon,
  folder: FolderIcon,
  layerPlus: LayerPlusIcon,
} as const;

type CardIcon = keyof typeof CARD_ICON;

type InterfaceCardPorps = {
  link: string;
  icon: CardIcon;
  title: string;
  description: string;
};

function InterfaceCard({ link, icon, title, description }: InterfaceCardPorps) {
  const Icon = CARD_ICON[icon];

  return (
    <Link
      href={link}
      className="flex items-center bg-card-background p-4 border border-card-border-light rounded-3xl gap-4 cursor-pointer select-none"
    >
      <div className=" w-fit text-secondary border border-card-border-light rounded-md p-2 ">
        <Icon />
      </div>
      <div>
        <p>{title}</p>
        <p className="p-small text-secondary  ">{description}</p>
      </div>
    </Link>
  );
}

export default InterfaceCard;
