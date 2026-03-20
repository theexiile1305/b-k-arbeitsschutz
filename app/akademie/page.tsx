import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Akademie",
  "Zertifizierte Schulungen und Trainings: Fahrausbildung, Sicherheitsbeauftragte, Brandschutzhelfer, Elektrotechnik."
);

const courses = [
  {
    title: "Fahrausbildung",
    description:
      "Flurförderzeuge, Stapler und mehr - sichere Fahrausbildung nach aktuellen Standards.",
    href: "/akademie/fahrausbildung",
  },
  {
    title: "Sicherheitsbeauftragter",
    description: "Ausbildung und Weiterbildung für Sicherheitsbeauftragte nach DGUV.",
    href: "/akademie/sicherheitsbeauftragter",
  },
  {
    title: "Brandschutzhelfer",
    description: "Ausbildung von Brandschutzhelfern nach ASR A2.2.",
    href: "/akademie/brandschutzhelfer",
  },
  {
    title: "Elektrotechnik",
    description:
      "Schulungen für elektrotechnisch unterwiesene Personen (EUP) und Elektrofachkräfte.",
    href: "/akademie/elektrotechnik",
  },
];

export default function Akademie() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">BK Akademie</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Praxisnahe Schulungen und Zertifizierungen für Ihre Mitarbeiter.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Unsere Schulungsangebote"
            subtitle="Zertifiziert, praxisnah und auf Ihr Unternehmen zugeschnitten."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {courses.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group block bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 hover:border-bk-light transition-all p-6"
              >
                <h3 className="text-bk-dark font-bold text-xl mb-2 group-hover:text-bk-mid font-bk-heading">
                  {c.title}
                </h3>
                <p className="text-bk-gray text-sm leading-relaxed mb-4">{c.description}</p>
                <span className="text-bk-light text-sm font-semibold">Mehr erfahren →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title="Schulung für Ihr Team anfragen"
        buttonText="Beratungstermin buchen"
        buttonHref="/beratungstermin"
      />
    </>
  );
}
