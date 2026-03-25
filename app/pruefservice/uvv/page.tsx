import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "UVV-Prüfung",
  "Fahrzeug- und Geräteprüfungen nach Unfallverhütungsvorschriften."
);

export default function UVV() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">UVV-Prüfung</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Prüfungen nach Unfallverhütungsvorschriften - für Fahrzeuge und Betriebsmittel.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="UVV-Prüfung im Überblick" />
          <div className="space-y-5 text-bk-gray leading-relaxed">
            <p>
              Die Unfallverhütungsvorschriften (UVV) der Berufsgenossenschaften schreiben
              regelmäßige Prüfungen für Fahrzeuge und bestimmte Betriebsmittel vor. Wir führen diese
              Prüfungen qualifiziert durch.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Flurförderzeuge (Stapler, Hubwagen)</li>
              <li>Betriebsfahrzeuge und Anhänger</li>
              <li>Hebebühnen und Arbeitsbühnen</li>
              <li>Weitere prüfpflichtige Betriebsmittel</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABlock title="UVV-Prüfung beauftragen" buttonText="Jetzt anfragen" buttonHref="/kontakt" />
    </>
  );
}
