import { Camera, Pencil } from "@/components/ui/icons";

const BADGE_ICONS = {
  camera: Camera,
  pencil: Pencil,
} as const;

type IconBadgeIcon = keyof typeof BADGE_ICONS;

type IconBadgeProps = {
  icon: IconBadgeIcon;
};

function IconBadge({ icon }: IconBadgeProps) {
  const Icon = BADGE_ICONS[icon];
  return (
    <div className="centerChild text-primary-icon bg-bg-input rounded-md p-[8] border border-border-secondary-btn ">
      <Icon />
    </div>
  );
}

export default IconBadge;
