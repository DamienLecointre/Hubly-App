import { ComponentPropsWithoutRef } from "react";
import { RoundBtnData } from "@/data/btnData/RoundBtnData";

type RoundBtnProps = ComponentPropsWithoutRef<"button"> & {
  btnId: string;
  onClick: () => void;
};

function RoundBtn({ btnId, onClick }: RoundBtnProps) {
  const btnContent = RoundBtnData.find((e) => e.id === btnId);

  if (!btnContent) {
    return null;
  }

  const Icon = btnContent.icon;

  return (
    <button
      type="button"
      className={`roundBtn ${btnContent.variant} `}
      onClick={onClick}
    >
      <Icon />
    </button>
  );
}

export default RoundBtn;
