import RoundBtn from "@/components/ui/buttons/RoundBtn";
import HublyLogo from "@/components/ui/icons/HublyLogo";

function Header() {
  return (
    <header className="min-h-20.5 w-full flex items-center justify-between bg-card-background border-b border-b-card-border px-6 py-4 shadow-bottom">
      <div className="flex items-center">
        <HublyLogo height="h-[40px]" width="w-[40px]" />
        <div className="flex flex-col pl-6">
          <p className="p-small text-secondary ">Bonjour,</p>
          <h4 className="text-primary">Utilisateur</h4>{" "}
          {/* Utilisateur = Valeur dynamique */}
        </div>
      </div>
      <RoundBtn type="button" icon="moon" variant="base" />
    </header>
  );
}

export default Header;
