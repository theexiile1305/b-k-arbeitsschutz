import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";
import ContentWithImage from "@/components/ui/ContentWithImage";

export const metadata: Metadata = buildMetadata(
  "Brandschutzhelfer",
  "Ausbildung von Brandschutzhelfern nach ASR A2.2 - für mehr Sicherheit im Betrieb."
);

export default function Brandschutzhelfer() {
  return (
    <>
      <PageHeader
        title="Brandschutzhelfer"
        subtitle="Ausbildung nach ASR A2.2 - damit Ihre Mitarbeiter im Ernstfall richtig handeln."
      />

      <ContentWithImage
        imageSrc="/brandschutzhelfer.jpeg"
        imageAlt="Fachkraft für Arbeitssicherheit bei der Ausbildung von Brandschutzhelfern"
      >
        <SectionHeading title="Brandschutzhelfer-Ausbildung" />
        <div className="space-y-5 text-bk-gray leading-relaxed">
          <p>
            Die Technische Regel für Arbeitsstätten ASR A2.2 schreibt vor, dass Arbeitgeber
            ausreichend Brandschutzhelfer ausbilden müssen. Wir bieten praxisnahe Schulungen mit
            Löschübungen.
          </p>
          <h3 className="text-bk-dark font-bold text-xl mt-6 font-bk-heading">Schulungsinhalte:</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Brandschutzrecht und -vorschriften</li>
            <li>Brandlehre und Brandklassen</li>
            <li>Feuerlöscheinrichtungen</li>
            <li>Praktische Löschübung</li>
            <li>Evakuierung und Verhalten im Brandfall</li>
          </ul>
        </div>
      </ContentWithImage>

      <CTABlock
        title="Brandschutzhelfer ausbilden lassen"
        buttonText="Jetzt anfragen"
        buttonHref="/kontakt"
      />
    </>
  );
}
