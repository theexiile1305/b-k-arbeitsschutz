import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Exoskelett",
  "Ergonomische Exoskelette für körperlich belastende Tätigkeiten - weniger Ausfälle, mehr Leistung."
);

export default function Exoskelett() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">Exoskelett</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Zukunftstechnologie für ergonomisches Arbeiten - schützt Rücken, Schultern und Gelenke.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Exoskelette im Betrieb" />
          <div className="space-y-5 text-bk-gray leading-relaxed">
            <p>
              Muskel-Skelett-Erkrankungen sind die häufigste Ursache für krankheitsbedingte
              Fehltage. Exoskelette unterstützen Ihren Körper bei schwerer körperlicher Arbeit und
              reduzieren die Belastung signifikant.
            </p>
            <p>
              Wir beraten Sie bei der Auswahl des richtigen Exoskeletts für Ihre spezifischen
              Einsatzbereiche und begleiten die Einführung im Betrieb.
            </p>
            <h3 className="text-bk-dark font-bold text-xl mt-6 font-bk-heading">
              Einsatzbereiche:
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Überkopfarbeiten in Produktion und Montage</li>
              <li>Heben und Tragen schwerer Lasten</li>
              <li>Langzeitstehen und statische Haltungen</li>
              <li>Logistik und Kommissionierung</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABlock
        title="Exoskelett-Beratung anfragen"
        buttonText="Jetzt anfragen"
        buttonHref="/beratungstermin"
      />
    </>
  );
}
