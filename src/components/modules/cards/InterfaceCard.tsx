import Link from "next/link";

import IconBadge from "@/components/ui/badges/IconBadge";

type InterfaceCardPorps = {
  link: string;
  iconId: string;
  title: string;
  description: string;
};

function InterfaceCard({
  link,
  iconId,
  title,
  description,
}: InterfaceCardPorps) {
  return (
    <Link
      href={link}
      className="flex items-center bg-card-background p-4 border border-card-border-light rounded-3xl gap-4 cursor-pointer select-none"
    >
      <IconBadge iconId={iconId} />
      <div>
        <p>{title}</p>
        <p className="p-small text-secondary  ">{description}</p>
      </div>
    </Link>
  );
}

export default InterfaceCard;
