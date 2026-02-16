import {
  BookIcon,
  BubbleIcon,
  DiskIcon,
  VideoGameIcon,
  BoardGameIcon,
  FilterIcon,
  GroupIcon,
  HeartIcon,
} from "@/components/ui/icons";
import { ElementType } from "react";

export type InfoBadgeItem = {
  id: string;
  label: string;
  icon: ElementType | null;
};

export const InfoBadgeData: InfoBadgeItem[] = [
  {
    id: "TOUTES",
    label: "Toutes",
    icon: null,
  },
  {
    id: "BOOK",
    label: "Livres",
    icon: BookIcon,
  },
  {
    id: "DISK",
    label: "Musiques",
    icon: DiskIcon,
  },
  {
    id: "BUBBLE",
    label: "Bandes-dessinées",
    icon: BubbleIcon,
  },
  {
    id: "BOARD_GAME",
    label: "Jeux de société",
    icon: BoardGameIcon,
  },
  {
    id: "VIDEO_GAME",
    label: "Jeux vidéo",
    icon: VideoGameIcon,
  },
  {
    id: "FILTER",
    label: "Filtrer",
    icon: FilterIcon,
  },
  {
    id: "GROUP",
    label: "",
    icon: GroupIcon,
  },
  {
    id: "TRIER",
    label: "Trier",
    icon: null,
  },
  {
    id: "TOUS",
    label: "Tous",
    icon: null,
  },
  {
    id: "LIKES",
    label: "Likes",
    icon: HeartIcon,
  },
  {
    id: "IN_PROGRESS",
    label: "En cours",
    icon: null,
  },
  {
    id: "DONE",
    label: "Terminé",
    icon: null,
  },
];
