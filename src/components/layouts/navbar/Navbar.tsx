import NavBtn from "@/components/ui/buttons/NavBtn";

const buttonTypes = [
  {
    id: "button1",
    href: "/",
    label: "Home",
    icon: "home",
    variant: "base",
  },
  {
    id: "button2",
    href: "/likes",
    label: "Likes",
    icon: "heart",
    variant: "base",
  },
  {
    id: "button3",
    href: "/add",
    label: "Add",
    icon: "plus",
    variant: "accent",
  },
  {
    id: "button4",
    href: "/search",
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
    <nav className="max-h-21.25 w-auto flex items-center bg-card-background border-t border-t-card-border px-6 py-4 shadow-top">
      {buttonTypes.map((data) => (
        <NavBtn
          key={data.id}
          href={data.href}
          type="button"
          label={data.label}
          icon={data.icon}
          variant={data.variant}
        />
      ))}
    </nav>
  );
}

export default Navbar;
