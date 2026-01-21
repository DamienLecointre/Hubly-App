import HublyLogo from "@/components/ui/icons/HublyLogo";

function BrandHeader() {
  return (
    <div className="flex flex-col items-center">
      <HublyLogo height="h-[50px]" width="w-[50px]" />
      <div>
        <h1 className="font-primary font-semibold text-[48px] text-primary text-center tracking-wide">
          Hubly
        </h1>
        <p className="text-center text-accent tracking-wide">
          Centralisez tous vos contenus
        </p>
      </div>
      <p className="text-center text-primary tracking-wide text-wrap py-4">
        Un hub élégant et collaboratif pour gérer et partager vos livres,
        vinyles, BD et jeux.
      </p>
    </div>
  );
}

export default BrandHeader;
