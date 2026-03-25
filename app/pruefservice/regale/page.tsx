import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Regalprüfung",
  "Prüfung von Lagerregalen nach DIN EN 15635 - Sicherheit im Lager."
);

export default function Regale() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">Regalprüfung</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Sichere Lagerregale durch regelmäßige Prüfung nach DIN EN 15635.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Regalprüfung nach Norm" />
          <div className="space-y-5 text-bk-gray leading-relaxed">
            <p>
              Beschädigte Lagerregale sind eine häufige Unfallursache in Lagerbetrieben. Die Norm
              DIN EN 15635 schreibt regelmäßige Inspektionen vor. Unsere Prüfer identifizieren
              Schäden und empfehlen Maßnahmen.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Sichtprüfung aller Regalkomponenten</li>
              <li>Bewertung von Schäden nach Schadensklassen</li>
              <li>Dokumentation mit Fotodokumentation</li>
              <li>Prüfbericht mit Handlungsempfehlungen</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABlock
        title="Regalprüfung beauftragen"
        buttonText="Jetzt anfragen"
        buttonHref="/kontakt"
      />
    </>
  );
}
