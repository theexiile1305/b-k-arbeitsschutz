import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Arbeitsmittel & PSA",
  "Moderne Arbeitsmittel und persönliche Schutzausrüstung - Exoskelette und angepasster Gehörschutz."
);

export default function ArbeitsmittelPSA() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">
            Arbeitsmittel & PSA
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Innovative Arbeitsmittel und maßgeschneiderte Schutzausrüstung für Ihren Betrieb.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Unser PSA-Portfolio" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            {[
              {
                title: "Exoskelett",
                description:
                  "Ergonomische Unterstützung für körperlich belastende Tätigkeiten - reduziert Muskel-Skelett-Erkrankungen.",
                href: "/arbeitsmittel-psa/exoskelett",
              },
              {
                title: "Angepasster Gehörschutz",
                description:
                  "Individuell angepasster Gehörschutz für optimalen Tragekomfort und maximalen Schutz.",
                href: "/arbeitsmittel-psa/angepasster-gehoerschutz",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 hover:border-bk-light transition-all p-8"
              >
                <h3 className="text-bk-dark font-bold text-2xl mb-3 group-hover:text-bk-mid font-bk-heading">
                  {item.title}
                </h3>
                <p className="text-bk-gray leading-relaxed mb-4">{item.description}</p>
                <span className="text-bk-light font-semibold">Mehr erfahren →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title="PSA-Beratung anfragen"
        buttonText="Jetzt anfragen"
        buttonHref="/kontakt"
      />
    </>
  );
}
