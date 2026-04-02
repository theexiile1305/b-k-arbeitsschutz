import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";
import ContentWithImage from "@/components/ui/ContentWithImage";

export const metadata: Metadata = buildMetadata(
  "Begehungen",
  "Regelmäßige Arbeitsstättenbegehungen zur Identifikation und Beseitigung von Gefährdungen."
);

export default function Begehungen() {
  return (
    <>
      <PageHeader
        title="Begehungen"
        subtitle="Regelmäßige Begehungen Ihrer Arbeitsstätten - systematisch, dokumentiert und wirksam."
      />

      <ContentWithImage
        imageSrc="/begehungen.jpg"
        imageAlt="Fachkraft für Arbeitssicherheit bei einer Begehung"
      >
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
      </ContentWithImage>

      <CTABlock title="Begehung beauftragen" buttonText="Jetzt anfragen" buttonHref="/kontakt" />
    </>
  );
}
