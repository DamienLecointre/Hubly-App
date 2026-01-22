import NavBtn from "@/components/ui/buttons/NavBtn";

const buttonData = [
  {
    id: "button1",
    href: "/",
    label: "Home",
    icon: "home",
    variant: "base",
  },
  {
    id: "button2",
    href: "/favoris",
    label: "Likes",
    icon: "heart",
    variant: "base",
  },
  {
    id: "button3",
    href: "/ajouter_collection",
    label: "Add",
    icon: "plus",
    variant: "accent",
  },
  {
    id: "button4",
    href: "/recherche",
    label: "Search",
    icon: "search",
    variant: "base",
  },
  {
    id: "button5",
    href: "/profil",
    label: "Profil",
    icon: "user",
    variant: "base",
  },
] as const;

function Navbar() {
  return (
    <nav className="fixed h-21.25 centerBetween bg-card-background border-t border-b border-t-card-border border-b-card-border suroudedSpace_X16_Y24 shadow-top bottom-0 left-0 right-0">
      {buttonData.map((data) => (
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
