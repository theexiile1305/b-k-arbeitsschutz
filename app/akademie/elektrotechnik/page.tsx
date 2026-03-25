import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Elektrotechnik",
  "Schulungen für elektrotechnisch unterwiesene Personen (EUP) und Elektrofachkräfte."
);

export default function Elektrotechnik() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">Elektrotechnik</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Sicherheitsschulungen für elektrotechnische Tätigkeiten - nach DGUV Vorschrift 3.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Elektrotechnische Schulungen" />
          <div className="space-y-5 text-bk-gray leading-relaxed">
            <p>
              Elektrische Gefährdungen gehören zu den häufigsten Unfallursachen am Arbeitsplatz.
              Unsere Schulungen qualifizieren Ihre Mitarbeiter für den sicheren Umgang mit
              elektrischen Betriebsmitteln.
            </p>
            <h3 className="text-bk-dark font-bold text-xl mt-6 font-bk-heading">
              Schulungsangebote:
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Elektrotechnisch unterwiesene Person (EUP)</li>
              <li>Wiederholungsschulung für EUP</li>
              <li>Grundlagen der elektrischen Sicherheit</li>
              <li>Erstmaßnahmen bei Elektrounfällen</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABlock
        title="Elektrotechnik-Schulung anfragen"
        buttonText="Jetzt anfragen"
        buttonHref="/kontakt"
      />
    </>
  );
}
