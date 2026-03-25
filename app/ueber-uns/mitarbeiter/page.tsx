import { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Mitarbeiter",
  "Das Team hinter BK Arbeitsschutz - Experten mit Leidenschaft für Sicherheit."
);

export default function Mitarbeiter() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">Unser Team</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Menschen, die Sicherheit nicht nur als Beruf, sondern als Berufung verstehen.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Kilian Berger" subtitle="Gründer & Geschäftsführer" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/me.png"
                alt="Kilian Berger"
                width={350}
                height={450}
                className="rounded-xl shadow-xl object-cover object-top"
              />
            </div>
            <div className="space-y-5 text-bk-gray leading-relaxed">
              <p>
                Als Gründer und Geschäftsführer von BK Arbeitsschutz verbindet Kilian Berger
                fundiertes Fachwissen mit einem praxisorientierten Ansatz. Mit langjähriger
                Erfahrung in der Arbeitssicherheit kennt er die realen Herausforderungen in
                Betrieben aus erster Hand.
              </p>
              <p>
                Sein Ziel: Nicht nur rechtliche Anforderungen erfüllen, sondern echte
                Sicherheitskultur schaffen - messbar, nachhaltig und zugeschnitten auf die
                individuellen Bedürfnisse jedes Unternehmens.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Fachkraft für Arbeitssicherheit",
                  "DGUV V2 Betreuung",
                  "Brandschutzbeauftragter",
                  "Schulungsexperte",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-bk-dark/10 text-bk-dark text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        title="Sprechen Sie mit unserem Team"
        buttonText="Jetzt Termin buchen"
        buttonHref="/kontakt"
      />
    </>
  );
}
