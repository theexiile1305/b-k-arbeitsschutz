import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Kraftbetriebene Tore",
  "Prüfung kraftbetriebener Tore und Türen nach BGG/GUV-G 905."
);

export default function KraftbetriebseneTore() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">
            Kraftbetriebene Tore
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Sicherheitsprüfung kraftbetriebener Tore und Türen - nach gesetzlichen Vorgaben.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Warum Torprüfungen wichtig sind" />
          <div className="space-y-5 text-bk-gray leading-relaxed">
            <p>
              Kraftbetriebene Tore können bei Fehlfunktionen eine erhebliche Verletzungsgefahr
              darstellen. Regelmäßige Prüfungen nach BGG/GUV-G 905 sind daher Pflicht für Betreiber.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Rolltore und Sektionaltore</li>
              <li>Schnelllauftore</li>
              <li>Schiebetore und Drehtüren</li>
              <li>Garagen- und Hallentore</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABlock title="Torprüfung beauftragen" buttonText="Jetzt anfragen" buttonHref="/kontakt" />
    </>
  );
}
