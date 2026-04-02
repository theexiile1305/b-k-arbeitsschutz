import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = buildMetadata(
  "Arbeitsschutz",
  "Professionelle Arbeitsschutzbetreuung nach DGUV V2 - Gefährdungsbeurteilungen, Unterweisungen und mehr."
);

const subpages = [
  {
    title: "Betreuung nach DGUV V2",
    description: "Rechtssichere Betreuung nach dem Regelwerk der DGUV Vorschrift 2.",
    href: "/arbeitsschutz/betreuung-dguv-v2",
  },
  {
    title: "Unterweisungen",
    description: "Professionelle Mitarbeiterunterweisungen - dokumentiert und wirksam.",
    href: "/arbeitsschutz/unterweisungen",
  },
  {
    title: "GBU / BA / AA",
    description:
      "Gefährdungsbeurteilungen, Betriebsanweisungen und Arbeitsanweisungen aus einer Hand.",
    href: "/arbeitsschutz/gbu-ba-aa",
  },
  {
    title: "Begehungen",
    description: "Regelmäßige Arbeitsstättenbegehungen zur Identifikation von Risiken.",
    href: "/arbeitsschutz/begehungen",
  },
  {
    title: "Analysen",
    description: "Tiefgehende Analysen Ihrer Arbeitsprozesse und Sicherheitssituation.",
    href: "/arbeitsschutz/analysen",
  },
];

export default function Arbeitsschutz() {
  return (
    <>
      <PageHeader
        title="Arbeitsschutz"
        subtitle="Rechtssichere, ganzheitliche Arbeitsschutzbetreuung für Ihren Betrieb."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Unsere Arbeitsschutzleistungen"
            subtitle="Alles was Ihr Betrieb für rechtssichere Arbeitssicherheit braucht."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {subpages.map((s) => (
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

      <CTABlock
        title="Jetzt Arbeitsschutz optimieren"
        buttonText="Beratungstermin buchen"
        buttonHref="/kontakt"
      />
    </>
  );
}
