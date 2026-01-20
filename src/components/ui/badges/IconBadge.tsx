import { CameraIcon, PencilIcon } from "@/components/ui/icons";

const BADGE_ICONS = {
  camera: CameraIcon,
  pencil: PencilIcon,
} as const;

type IconBadgeIcon = keyof typeof BADGE_ICONS;

type IconBadgeProps = {
  icon: IconBadgeIcon;
};

function IconBadge({ icon }: IconBadgeProps) {
  const Icon = BADGE_ICONS[icon];
  return (
    <div className="centerChild text-primary-icon bg-bg-input rounded-md p-2 border border-border-secondary-btn ">
      <Icon />
    </div>
  );
}

export default IconBadge;
