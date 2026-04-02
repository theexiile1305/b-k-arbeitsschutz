import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import ArbeitsschutzSubpageNavigation from "@/components/ui/ArbeitsschutzSubpageNavigation";
import ContentWithImage from "@/components/ui/ContentWithImage";

export const metadata: Metadata = buildMetadata(
  "GBU / BA / AA",
  "Gefährdungsbeurteilungen, Betriebsanweisungen und Arbeitsanweisungen - professionell erstellt."
);

export default function GBU() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">GBU / BA / AA</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Gefährdungsbeurteilungen, Betriebsanweisungen und Arbeitsanweisungen - alles aus einer
            Hand.
          </p>
        </div>
      </div>

      <ContentWithImage
        imageSrc="/gbu-ba-aa.png"
        imageAlt="Symbolbild für Gefährdungsbeurteilungen, Betriebsanweisungen und Arbeitsanweisungen"
      >
        <div>
          <SectionHeading title="Gefährdungsbeurteilung (GBU)" />
          <p className="text-bk-gray leading-relaxed">
            Die Gefährdungsbeurteilung ist das zentrale Instrument des Arbeitsschutzes. Wir
            ermitteln systematisch alle Gefährdungen an Ihren Arbeitsplätzen und entwickeln wirksame
            Schutzmaßnahmen - dokumentiert nach gesetzlichen Anforderungen.
          </p>
        </div>
        <div>
          <SectionHeading title="Betriebsanweisungen (BA)" />
          <p className="text-bk-gray leading-relaxed">
            Betriebsanweisungen regeln den sicheren Umgang mit Gefahrstoffen, Maschinen und Anlagen.
            Wir erstellen praxistaugliche Anweisungen, die Ihre Mitarbeiter wirklich verstehen und
            anwenden.
          </p>
        </div>
        <div>
          <SectionHeading title="Arbeitsanweisungen (AA)" />
          <p className="text-bk-gray leading-relaxed">
            Arbeitsanweisungen beschreiben Tätigkeiten Schritt für Schritt und helfen dabei, Fehler
            zu vermeiden. Wir entwickeln maßgeschneiderte Anweisungen für Ihre spezifischen
            Arbeitsprozesse.
          </p>
        </div>
      </ContentWithImage>

      <ArbeitsschutzSubpageNavigation />

      <CTABlock
        title="GBU & Anweisungen professionell erstellen lassen"
        buttonText="Jetzt anfragen"
        buttonHref="/kontakt"
      />
    </>
  );
}
