import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Betriebsmittelprüfung DGUV V3",
  "Prüfung elektrischer Betriebsmittel nach DGUV Vorschrift 3 - termingerecht und dokumentiert."
);

export default function BetriebsmittelpruefungDGUV() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">
            Betriebsmittelprüfung DGUV V3
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Prüfung elektrischer Betriebsmittel nach DGUV Vorschrift 3 - für sichere Arbeitsplätze.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Was wird geprüft?" />
          <div className="space-y-5 text-bk-gray leading-relaxed">
            <p>
              Die DGUV Vorschrift 3 verpflichtet Arbeitgeber, elektrische Anlagen und Betriebsmittel
              regelmäßig auf ihren sicheren Zustand zu prüfen. Wir führen diese Prüfungen
              termingerecht durch und liefern eine vollständige Dokumentation.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Ortsfeste elektrische Anlagen</li>
              <li>Ortsveränderliche elektrische Betriebsmittel</li>
              <li>Verlängerungsleitungen und Mehrfachsteckdosen</li>
              <li>Elektrisch betriebene Maschinen</li>
            </ul>
            <p>
              Nach der Prüfung erhalten Sie eine übersichtliche Prüfdokumentation und Prüfplaketten
              für alle geprüften Geräte.
            </p>
          </div>
        </div>
      </section>

      <CTABlock
        title="DGUV V3 Prüfung beauftragen"
        buttonText="Jetzt anfragen"
        buttonHref="/kontakt"
      />
    </>
  );
}
