import InfoBadge from "@/components/ui/badges/InfoBadge";

type SectionHeaderProps = {
  title:
    | "Mes Collections"
    | "Mes Favoris"
    | "Chercher un article"
    | "Mon Profil";
  quantity: number;
};

function SectionHeader({ title, quantity }: SectionHeaderProps) {
  return (
    <div className="flex flex-col border-b border-b-card-border suroudedSpace_X16_Y24">
      <div className="centerBetween">
        <h4 className="text-primary">{title}</h4>
        <InfoBadge icon="filter" label="Filtrer" />
        {/* icon + label = Valeur dynamique */}
      </div>
      <p className="text-secondary">{quantity} collections</p>
    </div>
  );
}

export default SectionHeader;
