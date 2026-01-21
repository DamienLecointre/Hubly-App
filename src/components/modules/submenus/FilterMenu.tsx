import InfoBadge from "@/components/ui/badges/InfoBadge";

const filterMenuContent = [
  {
    id: "filter1",
    icon: "empty",
    label: "Toutes",
  },
  {
    id: "filter2",
    icon: "book",
    label: "Livres",
  },
  {
    id: "filter3",
    icon: "disk",
    label: "Musiques",
  },
  {
    id: "filter4",
    icon: "bubble",
    label: "Bandes-dessinées",
  },
  {
    id: "filter5",
    icon: "boardGame",
    label: "Jeux de société",
  },
  {
    id: "filter6",
    icon: "videoGame",
    label: "Jeux vidéo",
  },
] as const;

function FilterMenu() {
  return (
    <div className="flex items-center overflow-x-auto gap-2 pt-6 ">
      {filterMenuContent.map((data) => (
        <InfoBadge
          key={data.id}
          icon={data.icon}
          label={data.label}
          variant="bgempty"
        />
      ))}
    </div>
  );
}

export default FilterMenu;
