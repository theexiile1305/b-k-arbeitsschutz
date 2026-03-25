import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Unterweisungen",
  "Professionelle Mitarbeiterunterweisungen - rechtssicher dokumentiert."
);

export default function Unterweisungen() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">Unterweisungen</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Wirksame Unterweisungen - verständlich, dokumentiert und auf Ihren Betrieb abgestimmt.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Warum Unterweisungen so wichtig sind" />
          <div className="space-y-5 text-bk-gray leading-relaxed">
            <p>
              Gemäß § 12 ArbSchG sind Arbeitgeber verpflichtet, ihre Beschäftigten über Sicherheits-
              und Gesundheitsschutzfragen zu unterweisen. BK Arbeitsschutz erstellt und führt
              Unterweisungen durch, die wirklich ankommen.
            </p>
            <p>
              Unsere Unterweisungen sind praxisnah, verständlich und vollständig dokumentiert. Sie
              erhalten alle Unterlagen digital und in Papierform für Ihre Betriebsakte.
            </p>
            <h3 className="text-bk-dark font-bold text-xl mt-8 font-bk-heading">
              Unterweisungsthemen (Auswahl):
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Allgemeine Arbeitssicherheit</li>
              <li>Brandschutz und Notfallverhalten</li>
              <li>Umgang mit Gefahrstoffen</li>
              <li>Bildschirmarbeitsplätze</li>
              <li>Heben und Tragen</li>
              <li>Persönliche Schutzausrüstung</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABlock
        title="Unterweisungen professionell organisieren"
        buttonText="Jetzt anfragen"
        buttonHref="/kontakt"
      />
    </>
  );
}
