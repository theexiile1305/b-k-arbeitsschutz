import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Begehungen",
  "Regelmäßige Arbeitsstättenbegehungen zur Identifikation und Beseitigung von Gefährdungen."
);

export default function Begehungen() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">Begehungen</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Regelmäßige Begehungen Ihrer Arbeitsstätten - systematisch, dokumentiert und wirksam.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Was wir bei Begehungen prüfen" />
          <div className="space-y-5 text-bk-gray leading-relaxed">
            <p>
              Regelmäßige Begehungen sind ein wesentlicher Bestandteil des betrieblichen
              Arbeitsschutzes. Unsere erfahrenen Fachkräfte inspizieren Ihre Arbeitsstätten
              systematisch und identifizieren Mängel, bevor sie zum Problem werden.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Ordnung und Sauberkeit am Arbeitsplatz</li>
              <li>Zustand von Maschinen und Arbeitsmitteln</li>
              <li>Kennzeichnung von Fluchtwegen und Notausgängen</li>
              <li>Lagerung von Gefahrstoffen</li>
              <li>Persönliche Schutzausrüstung</li>
              <li>Ergonomie der Arbeitsplätze</li>
            </ul>
            <p>
              Nach jeder Begehung erhalten Sie einen detaillierten Bericht mit Empfehlungen und
              Maßnahmen - priorisiert nach Dringlichkeit.
            </p>
          </div>
        </div>
      </section>

      <CTABlock
        title="Begehung beauftragen"
        buttonText="Jetzt anfragen"
        buttonHref="/kontakt"
      />
    </>
  );
}
