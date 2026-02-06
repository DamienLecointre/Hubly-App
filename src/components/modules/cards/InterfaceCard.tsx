import { CameraIcon, PencilIcon } from "@/components/ui/icons";

const CARD_ICON = {
  camera: CameraIcon,
  pencil: PencilIcon,
} as const;

type CardIcon = keyof typeof CARD_ICON;

type InterfaceCardPorps = {
  icon: CardIcon;
  title: string;
  description: string;
};

function InterfaceCard({ icon, title, description }: InterfaceCardPorps) {
  const Icon = CARD_ICON[icon];

  return (
    <div className="flex items-center bg-card-background p-4 border border-card-border-light rounded-3xl gap-4">
      <div className=" w-fit text-secondary  border border-card-border-light rounded-md p-2 ">
        <Icon />
      </div>
      <div>
        <p>{title}</p>
        <p className="p-small text-secondary">{description}</p>
      </div>
    </div>
  );
}

export default InterfaceCard;
