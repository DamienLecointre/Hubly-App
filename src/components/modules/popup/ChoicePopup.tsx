import InterfaceCard from "../cards/InterfaceCard";
import LinkBtn from "@/components/ui/buttons/LinkBtn";

type ChoicePopupItem = Readonly<{
  id: string;
  link: string;
  icon: "camera" | "pencil" | "folder" | "layerPlus";
  title: string;
  description: string;
}>;

type ChoicePopupProps = {
  goBackTo: string;
  title: string;
  dataFile: readonly ChoicePopupItem[];
};

function ChoicePopup({ goBackTo, title, dataFile }: ChoicePopupProps) {
  return (
    <div className="absolute w-[calc(100%-48px)] flexColumn cardGradient px-4 z-50 top-[50%] transform translate-y-[-50%] ">
      <div className="flex items-start">
        <LinkBtn icon="arrow" link={goBackTo} label="Retour" variant="base" />
      </div>
      <div className="py-4">
        <h4 className="text-center">{title}</h4>
      </div>
      <div className="flexColumn gap-4">
        {dataFile?.map((data) => (
          <InterfaceCard
            key={data.id}
            link={data.link}
            icon={data.icon}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ChoicePopup;
