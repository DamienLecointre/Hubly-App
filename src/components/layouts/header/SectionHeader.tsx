import InfoBadge from "@/components/ui/badges/InfoBadge";

function SectionHeader() {
  return (
    <div className="flex flex-col border-b border-b-card-border px-6 py-4 ">
      <div className="flex items-center justify-between">
        <h4 className="text-primary">Titre section</h4>{" "}
        {/* Titre section = Valeur dynamique */}
        <InfoBadge icon="book" label="Livres" />{" "}
        {/* icon + label = Valeur dynamique */}
      </div>
      <p className="text-secondary">X collections</p>{" "}
      {/* X = Valeur dynamique */}
    </div>
  );
}

export default SectionHeader;
