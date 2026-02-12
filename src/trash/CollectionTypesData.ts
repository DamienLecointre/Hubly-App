export const COLLECTION_TYPES = {
  DEFAULT: { label: "Sélectionner une catégorie", icon: "empty" },
  BOOK: { label: "Livres", icon: "book" },
  MUSIC: { label: "Musiques", icon: "disk" },
  COMIC: { label: "Bandes-dessinées", icon: "bubble" },
  BOARD_GAME: { label: "Jeux de société", icon: "boardGame" },
  VIDEO_GAME: { label: "Jeux vidéo", icon: "videoGame" },
} as const;

export type CollectionCategory = keyof typeof COLLECTION_TYPES;
