import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Analysen",
  "Tiefgehende Analysen Ihrer Arbeitsprozesse - Basis für nachhaltige Verbesserungen."
);

export default function Analysen() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">Analysen</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Datenbasierte Analyse Ihrer Sicherheitssituation als Grundlage für gezielte Maßnahmen.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      <CTABlock
        title="Jetzt Analyse beauftragen"
        buttonText="Beratungstermin buchen"
        buttonHref="/beratungstermin"
      />
    </>
  );
}
