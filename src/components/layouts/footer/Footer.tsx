import Copyright from "@/components/ui/icons/Copyright";
import HublyLogo from "@/components/ui/icons/HublyLogo";

function Footer() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <HublyLogo height="h-[18px]" width="w-[18px]" />
        <h1 className="font-primary font-medium text-[20px] text-primary">
          Hubly
        </h1>
      </div>
      <div className="flex items-center text-secondary gap-2 ">
        <Copyright />
        <p className="caption">2026 Hubly. Créé avec passion</p>
      </div>
    </div>
  );
}

export default Footer;
