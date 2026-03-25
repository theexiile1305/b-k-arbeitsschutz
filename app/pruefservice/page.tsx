import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Prüfservice",
  "DGUV V3 Prüfungen, UVV, Regale, Leitern, Tritte und kraftbetriebene Tore - alles aus einer Hand."
);

const services = [
  {
    title: "Betriebsmittelprüfung DGUV V3",
    href: "/pruefservice/betriebsmittelpruefung-dguv-v3",
    description: "Prüfung elektrischer Betriebsmittel nach DGUV Vorschrift 3.",
  },
  {
    title: "UVV-Prüfung",
    href: "/pruefservice/uvv",
    description: "Fahrzeugprüfungen nach Unfallverhütungsvorschriften.",
  },
  {
    title: "Regalprüfung",
    href: "/pruefservice/regale",
    description: "Prüfung von Lagerregalen nach DIN EN 15635.",
  },
  {
    title: "Leitern & Tritte",
    href: "/pruefservice/leitern-tritte",
    description: "Prüfung von Leitern und Tritten nach DGUV Regel 108-007.",
  },
  {
    title: "Kraftbetriebene Tore",
    href: "/pruefservice/kraftbetriebene-tore",
    description: "Prüfung kraftbetriebener Tore und Türen nach BGG/GUV-G 905.",
  },
];

export default function Pruefservice() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">Prüfservice</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Zuverlässige Prüfleistungen für alle relevanten Betriebsmittel und Anlagen.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Unsere Prüfleistungen"
            subtitle="Fristgerecht, dokumentiert und rechtssicher."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group block bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 hover:border-bk-light transition-all p-6"
              >
                <h3 className="text-bk-dark font-bold text-lg mb-2 group-hover:text-bk-mid font-bk-heading">
                  {s.title}
                </h3>
                <p className="text-bk-gray text-sm leading-relaxed mb-4">{s.description}</p>
                <span className="text-bk-light text-sm font-semibold">Mehr erfahren →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Prüftermin vereinbaren" buttonText="Jetzt anfragen" buttonHref="/kontakt" />
    </>
  );
}
