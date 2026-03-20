import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Sicherheitsbeauftragter",
  "Ausbildung und Weiterbildung für Sicherheitsbeauftragte nach DGUV."
);

export default function Sicherheitsbeauftragter() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">
            Sicherheitsbeauftragter
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Qualifizierung von Sicherheitsbeauftragten - praxisnah und nach aktuellen
            DGUV-Standards.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Ausbildung zum Sicherheitsbeauftragten" />
          <div className="space-y-5 text-bk-gray leading-relaxed">
            <p>
              Sicherheitsbeauftragte sind wichtige Multiplikatoren für den Arbeitsschutz im Betrieb.
              Wir qualifizieren Ihre Mitarbeiter umfassend für diese verantwortungsvolle Aufgabe.
            </p>
            <h3 className="text-bk-dark font-bold text-xl mt-6 font-bk-heading">
              Schulungsinhalte:
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Aufgaben und Rechte des Sicherheitsbeauftragten</li>
              <li>Rechtliche Grundlagen des Arbeitsschutzes</li>
              <li>Gefährdungsbeurteilungen begleiten</li>
              <li>Kommunikation und Motivation</li>
              <li>Unfallmeldung und -analyse</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABlock
        title="Sicherheitsbeauftragte ausbilden"
        buttonText="Jetzt anfragen"
        buttonHref="/beratungstermin"
      />
    </>
  );
}
