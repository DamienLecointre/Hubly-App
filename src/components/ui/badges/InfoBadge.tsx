import {
  BookIcon,
  BubbleIcon,
  DiskIcon,
  VideoGameIcon,
  BoardGameIcon,
  FilterIcon,
  GroupIcon,
} from "@/components/ui/icons";

const INFO_BADGE_ICONS = {
  book: BookIcon,
  bubble: BubbleIcon,
  disk: DiskIcon,
  videoGame: VideoGameIcon,
  boardGame: BoardGameIcon,
  filter: FilterIcon,
  group: GroupIcon,
  empty: () => <></>,
};

type InfoBadgeIcon = keyof typeof INFO_BADGE_ICONS;

type InfoBadgeProps = {
  icon: InfoBadgeIcon;
  label: string;
  variant?: "base" | "bgempty" | "active";
};

function InfoBadge({ icon, label, variant = "base" }: InfoBadgeProps) {
  const IconLeft = INFO_BADGE_ICONS[icon];
  return (
    <div className={`infobadge ${variant}`}>
      <IconLeft />
      <p>{label}</p>
    </div>
  );
}

export default InfoBadge;
