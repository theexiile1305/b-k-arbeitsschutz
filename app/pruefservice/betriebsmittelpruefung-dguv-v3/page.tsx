import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";
import ContentWithImage from "@/components/ui/ContentWithImage";
import PruefserviceSubpageNavigation from "@/components/ui/PruefserviceSubpageNavigation";

export const metadata: Metadata = buildMetadata(
  "Betriebsmittelprüfung DGUV V3",
  "Prüfung elektrischer Betriebsmittel nach DGUV Vorschrift 3 - termingerecht und dokumentiert."
);

export default function BetriebsmittelpruefungDGUV() {
  return (
    <>
      <PageHeader
        title="Betriebsmittelprüfung DGUV V3"
        subtitle="Prüfung elektrischer Betriebsmittel nach DGUV Vorschrift 3 - für sichere Arbeitsplätze."
      />

      <ContentWithImage
        imageSrc="/betriebsmittelpruefung-dguv-v3.jpeg"
        imageAlt="Elektrische Betriebsmittelprüfung nach DGUV Vorschrift 3"
      >
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
      </ContentWithImage>

      <PruefserviceSubpageNavigation />

      <CTABlock
        title="DGUV V3 Prüfung beauftragen"
        buttonText="Jetzt anfragen"
        buttonHref="/kontakt"
      />
    </>
  );
}
