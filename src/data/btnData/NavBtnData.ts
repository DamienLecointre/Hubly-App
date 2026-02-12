import {
  HomeIcon,
  HeartIcon,
  PlusIcon,
  SearchIcon,
  UserIcon,
} from "@/components/ui/icons";

export const NavBtnData = [
  {
    id: "HOME",
    href: "/",
    label: "Home",
    icon: HomeIcon,
    variant: "base",
  },
  {
    id: "FAVORITE",
    href: "/favoris",
    label: "Likes",
    icon: HeartIcon,
    variant: "base",
  },
  {
    id: "ADD_NEW",
    href: "/nouvel_element",
    label: "Add",
    icon: PlusIcon,
    variant: "accent",
  },
  {
    id: "SEARCH",
    href: "/recherche",
    label: "Search",
    icon: SearchIcon,
    variant: "base",
  },
  {
    id: "PROFIL",
    href: "/profil",
    label: "Profil",
    icon: UserIcon,
    variant: "base",
  },
];
