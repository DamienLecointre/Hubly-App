import LinkBtn from "@/components/ui/buttons/LinkBtn";
import InterfaceCard from "../cards/InterfaceCard";

const AddedOptionPopupData = [
  {
    id: "addedOption1",
    icon: "camera",
    title: "Scanner",
    descritpion: "Utilisez votre caméra pour scanner votre contenu",
  },
  {
    id: "addedOption2",
    icon: "pencil",
    title: "Saisie manuelle",
    descritpion: "Remplissez les informations manuellement",
  },
] as const;

function AddedOptionPopup() {
  return (
    <div className="absolute w-[calc(100%-48px)] flexColumn bg-card-gradient border border-card-border-light shadow-bottom rounded-3xl gap-2 p-4 z-50 top-[50%] transform translate-y-[-50%] ">
      <div className="flex items-start">
        <LinkBtn icon="arrow" link="/" label="Retour" variant="base" />
      </div>
      <div className="py-4">
        <h4 className="text-center">Ajouter un élément</h4>
      </div>
      <div className="flexColumn gap-4">
        {AddedOptionPopupData.map((data) => (
          <div key={data.id}>
            <InterfaceCard
              icon={data.icon}
              title={data.title}
              description={data.descritpion}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddedOptionPopup;
