import { inputDataType, InterfaceCardType } from "@/types/Inputs/inputDataType";

import InterfaceCard from "../cards/InterfaceCard";
import LinkBtn from "@/components/ui/buttons/LinkBtn";

type ChoicePopupProps = {
  goBackTo: string;
  title: string;
  dataFile: readonly InterfaceCardType[];
};

function ChoicePopup({ goBackTo, title, dataFile }: ChoicePopupProps) {
  return (
    <div className="absolute w-[calc(100%-48px)] flexColumn cardGradient p-4 z-50 top-[50%] transform translate-y-[-50%] gap-2">
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
            iconId={data.iconId}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ChoicePopup;
