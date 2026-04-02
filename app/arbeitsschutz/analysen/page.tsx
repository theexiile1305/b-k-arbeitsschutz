import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";
import ContentWithImage from "@/components/ui/ContentWithImage";

export const metadata: Metadata = buildMetadata(
  "Analysen",
  "Tiefgehende Analysen Ihrer Arbeitsprozesse - Basis für nachhaltige Verbesserungen."
);

export default function Analysen() {
  return (
    <>
      <PageHeader
        title="Analysen"
        subtitle="Datenbasierte Analyse Ihrer Sicherheitssituation als Grundlage für gezielte Maßnahmen."
      />

      <ContentWithImage
        imageSrc="/analysen.jpeg"
        imageAlt="Fachkraft für Arbeitssicherheit bei der Analyse von Arbeitsprozessen"
      >
        <SectionHeading title="Warum Analysen entscheidend sind" />
        <div className="space-y-5 text-bk-gray leading-relaxed">
          <p>
            Ohne fundierte Analyse bleibt Arbeitsschutz reaktiv. Wir helfen Ihnen, die
            Sicherheitssituation in Ihrem Betrieb systematisch zu erfassen und auf Basis von Daten
            die richtigen Prioritäten zu setzen.
          </p>
          <h3 className="text-bk-dark font-bold text-xl mt-6 font-bk-heading">
            Analyse-Leistungen:
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Unfallstatistik und -ursachenanalyse</li>
            <li>Gefährdungspotenzialanalyse</li>
            <li>Ergonomie-Screening</li>
            <li>Belastungsanalyse (physisch & psychisch)</li>
            <li>Vergleich mit Branchenkennzahlen</li>
          </ul>
        </div>
      </ContentWithImage>

      <CTABlock
        title="Jetzt Analyse beauftragen"
        buttonText="Beratungstermin buchen"
        buttonHref="/kontakt"
      />
    </>
  );
}
