import type { Metadata } from "next";

const defaultTitle = "BK Arbeitsschutz - Ihr Anliegen, Unsere Aufgabe, Ihr Erfolg";
const defaultDescription =
  "BK Arbeitsschutz bietet professionelle Lösungen in Arbeitsschutz, Sicherheitstraining, Prüfservice und Brandschutz für Unternehmen.";

export function buildMetadata(title: string, description?: string): Metadata {
  return {
    title: `${title} | BK Arbeitsschutz`,
    description: description ?? defaultDescription,
    openGraph: {
      title: `${title} | BK Arbeitsschutz`,
      description: description ?? defaultDescription,
      images: [{ url: "/bk.png" }],
      locale: "de_DE",
      type: "website",
    },
  };
}

export const defaultMetadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: "/bk.png" }],
    locale: "de_DE",
    type: "website",
  },
};
