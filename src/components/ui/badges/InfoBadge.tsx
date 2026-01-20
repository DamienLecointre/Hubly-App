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
};

type InfoBadgeIcon = keyof typeof INFO_BADGE_ICONS;

type InfoBadgeProps = {
  icon: InfoBadgeIcon;
  label: string;
};

function InfoBadge({ icon, label }: InfoBadgeProps) {
  const IconLeft = INFO_BADGE_ICONS[icon];
  return (
    <div className="flex items-center text-secondary-btn bg-bg-secondary-btn rounded-full border border-border-secondary-btn px-4 py-2 gap-2">
      <IconLeft />
      <p>{label}</p>
    </div>
  );
}

export default InfoBadge;
