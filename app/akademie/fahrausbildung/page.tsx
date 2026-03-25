import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Fahrausbildung",
  "Professionelle Fahrausbildung für Flurförderzeuge und Stapler."
);

export default function Fahrausbildung() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">Fahrausbildung</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Sichere Fahrausbildung für Flurförderzeuge, Stapler und weitere Fahrzeuge.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Unsere Fahrausbildungen" />
          <div className="space-y-5 text-bk-gray leading-relaxed">
            <p>
              Die DGUV Grundsatz 308-001 (ehemals BGG 925) regelt die Ausbildung von Staplern und
              Flurförderzeugen. Unsere zertifizierten Ausbilder schulen Ihre Mitarbeiter praxisnah
              und rechtssicher.
            </p>
            <h3 className="text-bk-dark font-bold text-xl mt-6 font-bk-heading">
              Ausbildungsinhalte:
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Rechtliche Grundlagen und Vorschriften</li>
              <li>Aufbau und Funktion von Flurförderzeugen</li>
              <li>Praktische Fahrübungen</li>
              <li>Lastaufnahme und Transport</li>
              <li>Prüfung mit Zertifikat</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABlock
        title="Fahrausbildung anfragen"
        buttonText="Jetzt anfragen"
        buttonHref="/kontakt"
      />
    </>
  );
}
