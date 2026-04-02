import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";
import ContentWithImage from "@/components/ui/ContentWithImage";
import ArbeitsmittelPsaSubpageNavigation from "@/components/ui/ArbeitsmittelPsaSubpageNavigation";

export const metadata: Metadata = buildMetadata(
  "Exoskelett",
  "Ergonomische Exoskelette für körperlich belastende Tätigkeiten - weniger Ausfälle, mehr Leistung."
);

export default function Exoskelett() {
  return (
    <>
      <PageHeader
        title="Exoskelett"
        subtitle="Zukunftstechnologie für ergonomisches Arbeiten - schützt Rücken, Schultern und Gelenke."
      />

      <ContentWithImage imageSrc="/exoskelett.jpg" imageAlt="Exoskelett im Einsatz">
        <SectionHeading title="Exoskelette im Betrieb" />
        <div className="space-y-5 text-bk-gray leading-relaxed">
          <p>
            Muskel-Skelett-Erkrankungen sind die häufigste Ursache für krankheitsbedingte Fehltage.
            Exoskelette unterstützen Ihren Körper bei schwerer körperlicher Arbeit und reduzieren
            die Belastung signifikant.
          </p>
          <p>
            Wir beraten Sie bei der Auswahl des richtigen Exoskeletts für Ihre spezifischen
            Einsatzbereiche und begleiten die Einführung im Betrieb.
          </p>
          <h3 className="text-bk-dark font-bold text-xl mt-6 font-bk-heading">Einsatzbereiche:</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Überkopfarbeiten in Produktion und Montage</li>
            <li>Heben und Tragen schwerer Lasten</li>
            <li>Langzeitstehen und statische Haltungen</li>
            <li>Logistik und Kommissionierung</li>
          </ul>
        </div>
      </ContentWithImage>

      <ArbeitsmittelPsaSubpageNavigation />

      <CTABlock
        title="Exoskelett-Beratung anfragen"
        buttonText="Jetzt anfragen"
        buttonHref="/kontakt"
      />
    </>
  );
}
