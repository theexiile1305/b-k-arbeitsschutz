import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Brandschutzhelfer",
  "Ausbildung von Brandschutzhelfern nach ASR A2.2 - für mehr Sicherheit im Betrieb."
);

export default function Brandschutzhelfer() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">Brandschutzhelfer</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Ausbildung nach ASR A2.2 - damit Ihre Mitarbeiter im Ernstfall richtig handeln.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Brandschutzhelfer-Ausbildung" />
          <div className="space-y-5 text-bk-gray leading-relaxed">
            <p>
              Die Technische Regel für Arbeitsstätten ASR A2.2 schreibt vor, dass Arbeitgeber
              ausreichend Brandschutzhelfer ausbilden müssen. Wir bieten praxisnahe Schulungen mit
              Löschübungen.
            </p>
            <h3 className="text-bk-dark font-bold text-xl mt-6 font-bk-heading">
              Schulungsinhalte:
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Brandschutzrecht und -vorschriften</li>
              <li>Brandlehre und Brandklassen</li>
              <li>Feuerlöscheinrichtungen</li>
              <li>Praktische Löschübung</li>
              <li>Evakuierung und Verhalten im Brandfall</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABlock
        title="Brandschutzhelfer ausbilden lassen"
        buttonText="Jetzt anfragen"
        buttonHref="/beratungstermin"
      />
    </>
  );
}
