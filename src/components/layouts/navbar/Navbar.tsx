import { NavBtnData } from "@/data/navData/NavBtnData";
import NavBtn from "@/components/ui/buttons/NavBtn";

function Navbar() {
  return (
    <nav className="fixed h-21.25 centerBetween bg-card-background border-t border-b border-t-card-border border-b-card-border suroudedSpace_X16_Y24 shadow-top bottom-0 left-0 right-0 z-100">
      {NavBtnData.map((data) => (
        <NavBtn
          key={data.id}
          href={data.href}
          label={data.label}
          icon={data.icon}
          variant={data.variant}
        />
      ))}
    </nav>
  );
}

export default Navbar;
