import { IconBadgeData } from "@/data/badgesdata/IconBadgeData";

type IconBadgeProps = {
  iconId: string;
};

function IconBadge({ iconId }: IconBadgeProps) {
  const badgeId = IconBadgeData.find((e) => e.id === iconId);

  if (!badgeId) {
    return;
  }

  const Icon = badgeId.icon;

  return (
    <div className="centerChild text-primary-icon bg-bg-input rounded-md p-2 border border-border-secondary-btn ">
      <Icon />
    </div>
  );
}

export default IconBadge;
