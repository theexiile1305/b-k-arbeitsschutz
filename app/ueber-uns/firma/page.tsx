import { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Die Firma",
  "Erfahren Sie mehr über BK Arbeitsschutz - Geschichte, Werte und Leistungsportfolio."
);

export default function Firma() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">Die Firma</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            BK Arbeitsschutz - gegründet mit der Mission, Arbeitssicherheit neu zu denken.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="Unser Unternehmen" />
              <div className="space-y-5 text-bk-gray leading-relaxed">
                <p>
                  BK Arbeitsschutz ist ein mittelständisches Unternehmen mit Fokus auf ganzheitliche
                  Arbeitssicherheitslösungen. Wir begleiten Betriebe aller Branchen von der ersten
                  Analyse bis zur dauerhaften Betreuung.
                </p>
                <p>
                  Unser breites Leistungsspektrum umfasst Arbeitsschutzbetreuung nach DGUV V2,
                  Schulungen in unserer eigenen Akademie, Prüfleistungen sowie den Vertrieb von
                  Arbeitsmitteln und persönlicher Schutzausrüstung.
                </p>
                <p>
                  Was uns auszeichnet: Wir denken in Lösungen, nicht in Problemen. Jeder Betrieb ist
                  einzigartig - deshalb entwickeln wir individuelle Konzepte, die wirklich
                  funktionieren.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/bk.png"
                alt="BK Arbeitsschutz"
                width={400}
                height={300}
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        title="Lernen Sie uns persönlich kennen"
        buttonText="Beratungstermin buchen"
        buttonHref="/beratungstermin"
      />
    </>
  );
}
