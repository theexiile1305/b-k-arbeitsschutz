import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Betreuung nach DGUV V2",
  "Rechtssichere Betreuung nach DGUV Vorschrift 2 - Ihre Pflichten erfüllen, Ihre Mitarbeiter schützen."
);

export default function BetreuungDGUV() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">
            Betreuung nach DGUV V2
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Rechtssichere Betreuung Ihres Unternehmens nach dem Regelwerk der DGUV Vorschrift 2.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Was ist die DGUV V2?" />
          <div className="space-y-5 text-bk-gray leading-relaxed">
            <p>
              Die DGUV Vorschrift 2 regelt die betriebsärztliche und sicherheitstechnische Betreuung
              von Betrieben. Als Arbeitgeber sind Sie verpflichtet, Ihren Betrieb durch eine
              Fachkraft für Arbeitssicherheit und einen Betriebsarzt betreuen zu lassen.
            </p>
            <p>
              BK Arbeitsschutz übernimmt die sicherheitstechnische Betreuung Ihres Unternehmens -
              flexibel, rechtssicher und auf Ihren Betrieb zugeschnitten.
            </p>
            <h3 className="text-bk-dark font-bold text-xl mt-8 font-bk-heading">
              Unsere Leistungen umfassen:
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Jährliche Begehungen und Beratung</li>
              <li>Unterstützung bei Gefährdungsbeurteilungen</li>
              <li>Unfallanalyse und -prävention</li>
              <li>Stellungnahmen zu geplanten Betriebsanlagen</li>
              <li>Schulung und Unterweisung</li>
              <li>Dokumentation und Berichterstattung</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABlock
        title="Jetzt DGUV V2 Betreuung anfragen"
        buttonText="Beratungstermin buchen"
        buttonHref="/kontakt"
      />
    </>
  );
}
