import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";
import ContentWithImage from "@/components/ui/ContentWithImage";

export const metadata: Metadata = buildMetadata(
  "Fahrausbildung",
  "Professionelle Fahrausbildung für Flurförderzeuge und Stapler."
);

export default function Fahrausbildung() {
  return (
    <>
      <PageHeader
        title="Fahrausbildung"
        subtitle="Sichere Fahrausbildung für Flurförderzeuge, Stapler und weitere Fahrzeuge."
      />

      <ContentWithImage
        imageSrc="/fahrausbildung.jpeg"
        imageAlt="Fachkraft für Arbeitssicherheit bei der Fahrausbildung von Staplern"
      >
        <SectionHeading title="Unsere Fahrausbildungen" />
        <div className="space-y-5 text-bk-gray leading-relaxed">
          <p>
            Die DGUV Grundsatz 308-001 (ehemals BGG 925) regelt die Ausbildung von Staplern und
            Flurförderzeugen. Unsere zertifizierten Ausbilder schulen Ihre Mitarbeiter praxisnah und
            rechtssicher.
          </p>
          <h3 className="text-bk-dark font-bold text-xl mt-6 font-bk-heading">
            Ausbildungsinhalte:
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Rechtliche Grundlagen und Vorschriften</li>
            <li>Aufbau und Funktion von Flurförderzeugen</li>
            <li>Praktische Fahrübungen</li>
            <li>Lastaufnahme und Transport</li>
            <li>Prüfung mit Zertifikat</li>
          </ul>
        </div>
      </ContentWithImage>

      <CTABlock title="Fahrausbildung anfragen" buttonText="Jetzt anfragen" buttonHref="/kontakt" />
    </>
  );
}
