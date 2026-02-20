import { useMemo } from "react";

// Liste des particules à laisser en minuscule
const PARTICLES = [
  "de",
  "la",
  "du",
  "des",
  "van",
  "von",
  "le",
  "el",
  "y",
  "d'",
];

function capitalizeWord(word: string): string {
  return word.length === 0
    ? ""
    : word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export function useCapitalizeWord(name: string): string {
  return useMemo(() => {
    if (!name) return "";

    return name
      .split(" ")
      .map((word) =>
        PARTICLES.includes(word.toLowerCase())
          ? word.toLowerCase()
          : capitalizeWord(word),
      )
      .join(" ");
  }, [name]);
}
