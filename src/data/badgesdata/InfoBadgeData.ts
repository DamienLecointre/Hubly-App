import {
  BookIcon,
  BubbleIcon,
  DiskIcon,
  VideoGameIcon,
  BoardGameIcon,
  FilterIcon,
  GroupIcon,
} from "@/components/ui/icons";
import { ElementType } from "react";

export type InfoBadgeItem = {
  id: string;
  label: string;
  icon: ElementType | null;
};

export const InfoBadgeData: InfoBadgeItem[] = [
  {
    id: "EMPTY",
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
];
