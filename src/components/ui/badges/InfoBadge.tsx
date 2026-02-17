import { InfoBadgeData } from "@/data/badgesdata/InfoBadgeData";

type InfoBadgeProps = {
  iconId: string;
  labelValue?: string;
  btnSate?: "base" | "bgempty" | "active" | "little";
  onclick?: () => void;
};

function InfoBadge({
  iconId,
  labelValue,
  btnSate = "base",
  onclick,
}: InfoBadgeProps) {
  const badgeId = InfoBadgeData.find((e) => e.id === iconId);

  if (!badgeId) {
    return null;
  }

  const IconLeft = badgeId.icon;
  const label = labelValue ? labelValue : badgeId.label;

  return (
    <div className={`select-none infobadge ${btnSate} `} onClick={onclick}>
      {IconLeft && <IconLeft />}
      <p>{label}</p>
    </div>
  );
}

export default InfoBadge;
