import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";
import ContentWithImage from "@/components/ui/ContentWithImage";

export const metadata: Metadata = buildMetadata(
  "Elektrotechnik",
  "Schulungen für elektrotechnisch unterwiesene Personen (EUP) und Elektrofachkräfte."
);

export default function Elektrotechnik() {
  return (
    <>
      <PageHeader
        title="Elektrotechnik"
        subtitle="Sicherheitsschulungen für elektrotechnische Tätigkeiten - nach DGUV Vorschrift 3."
      />

      <ContentWithImage
        imageSrc="/elektrotechnik.jpeg"
        imageAlt="Fachkraft für Arbeitssicherheit bei der Schulung von elektrotechnisch unterwiesenen Personen"
      >
        <SectionHeading title="Elektrotechnische Schulungen" />
        <div className="space-y-5 text-bk-gray leading-relaxed">
          <p>
            Elektrische Gefährdungen gehören zu den häufigsten Unfallursachen am Arbeitsplatz.
            Unsere Schulungen qualifizieren Ihre Mitarbeiter für den sicheren Umgang mit
            elektrischen Betriebsmitteln.
          </p>
          <h3 className="text-bk-dark font-bold text-xl mt-6 font-bk-heading">
            Schulungsangebote:
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Elektrotechnisch unterwiesene Person (EUP)</li>
            <li>Wiederholungsschulung für EUP</li>
            <li>Grundlagen der elektrischen Sicherheit</li>
            <li>Erstmaßnahmen bei Elektrounfällen</li>
          </ul>
        </div>
      </ContentWithImage>

      <CTABlock
        title="Elektrotechnik-Schulung anfragen"
        buttonText="Jetzt anfragen"
        buttonHref="/kontakt"
      />
    </>
  );
}
