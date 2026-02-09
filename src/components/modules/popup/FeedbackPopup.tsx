import Thumb from "@/components/ui/icons/Thumb";

type FeedbackPopupProps = {
  title: string;
  subtitle: string;
};

function FeedbackPopup({ title, subtitle }: FeedbackPopupProps) {
  return (
    <div className="w-[calc(100%-48px)] flexColumn items-center fixed top-12 left-1/2 transform -translate-x-1/2 bg-card-gradient border border-valid rounded-3xl shadow-bottom p-6 gap-2 z-5 opacity-0 translatePopup ">
      <div className=" w-fit text-valid border border-valid rounded-md p-2 ">
        <Thumb />
      </div>
      <h4 className="text-primary">{title}</h4>
      <p className="text-primary">{subtitle}</p>
    </div>
  );
}

export default FeedbackPopup;
