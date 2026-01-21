import RoundBtn from "@/components/ui/buttons/RoundBtn";
import CheckboxInput from "@/components/ui/inputs/CheckboxInput";

const sortlabels = [
  {
    id: "label1",
    label: "Ordre alphabétique",
  },
  {
    id: "label2",
    label: "Par auteurs",
  },
  {
    id: "label3",
    label: "Par titres",
  },
  {
    id: "label4",
    label: "Par statut",
  },
  {
    id: "label5",
    label: "Ajouter par",
  },
];

function SortMenu() {
  return (
    <div className="flex flex-col border-b border-b-card-border gap-6 p-6">
      <div className="flex items-center justify-between ">
        <p className="text-primary">Trier par :</p>
        <RoundBtn type="button" icon="cross" variant="base" />
      </div>
      {sortlabels.map((data) => (
        <CheckboxInput key={data.id} label={data.label} />
      ))}
    </div>
  );
}

export default SortMenu;
