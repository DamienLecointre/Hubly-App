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
} as const;

export type InfoBadgeIcon = keyof typeof INFO_BADGE_ICONS;

type InfoBadgeProps = {
  icon: InfoBadgeIcon;
  label: string;
  btnSate?: "base" | "bgempty" | "active";
  onclick?: () => void;
};

function InfoBadge({ icon, label, btnSate = "base", onclick }: InfoBadgeProps) {
  const IconLeft = INFO_BADGE_ICONS[icon];
  return (
    <div className={`select-none infobadge ${btnSate} `} onClick={onclick}>
      <IconLeft />
      <p>{label}</p>
    </div>
  );
}

export default InfoBadge;
