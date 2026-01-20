import {
  Book,
  Bubble,
  Disk,
  VideoGame,
  BoardGame,
  Filter,
  Group,
} from "@/components/ui/icons";

const INFO_BADGE_ICONS = {
  book: Book,
  bubble: Bubble,
  disk: Disk,
  videoGame: VideoGame,
  boardGame: BoardGame,
  filter: Filter,
  group: Group,
};

type InfoBadgeIcon = keyof typeof INFO_BADGE_ICONS;

type InfoBadgeProps = {
  icon: InfoBadgeIcon;
  label: string;
};

function InfoBadge({ icon, label }: InfoBadgeProps) {
  const IconLeft = INFO_BADGE_ICONS[icon];
  return (
    <div className="flex items-center text-secondary-btn bg-bg-secondary-btn rounded-full border border-border-secondary-btn px-[16] py-[8] gap-[8]">
      <IconLeft />
      <p>{label}</p>
    </div>
  );
}

export default InfoBadge;
