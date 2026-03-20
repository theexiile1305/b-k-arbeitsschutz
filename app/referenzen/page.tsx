import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Referenzen",
  "Unsere Kunden sprechen für uns - Referenzen und Erfahrungsberichte von BK Arbeitsschutz."
);

const testimonials = [
  {
    quote:
      "BK Arbeitsschutz hat unsere gesamte Gefährdungsbeurteilung überarbeitet und professionell dokumentiert. Wir sind nun rechtssicher aufgestellt und haben klare Prozesse.",
    author: "Thomas M.",
    company: "Produktionsbetrieb, Bayern",
    area: "Arbeitsschutz",
  },
  {
    quote:
      "Die Schulungen der BK Akademie sind praxisnah und auf den Punkt. Unser Team hat die Inhalte sofort im Alltag angewendet. Absolut empfehlenswert.",
    author: "Sandra K.",
    company: "Logistikunternehmen, NRW",
    area: "Akademie",
  },
  {
    quote:
      "Der Prüfservice ist zuverlässig, die Dokumentation vorbildlich und die Terminabsprache unkompliziert. Wir verlängern den Vertrag jedes Jahr.",
    author: "Markus R.",
    company: "Handwerksbetrieb, Baden-Württemberg",
    area: "Prüfservice",
  },
  {
    quote:
      "Kilian Berger hat uns von Anfang an als echter Partner begleitet - nicht als Dienstleister, sondern als Teil unseres Teams. Genau das haben wir gesucht.",
    author: "Julia W.",
    company: "Pharmaunternehmen, Hessen",
    area: "Arbeitsschutz",
  },
  {
    quote:
      "Die Brandschutzbegehung war sehr gründlich. Der Bericht enthielt klare Maßnahmen, die wir sofort umsetzen konnten. Hervorragende Arbeit.",
    author: "Andreas T.",
    company: "Lagerlogistik, Sachsen",
    area: "Brandschutz",
  },
  {
    quote:
      "Der angepasste Gehörschutz aus dem BK-Sortiment hat die Akzeptanz bei unseren Mitarbeitern deutlich erhöht. Jetzt wird er wirklich getragen.",
    author: "Petra L.",
    company: "Metallverarbeitung, Bayern",
    area: "Arbeitsmittel & PSA",
  },
];

export default function Referenzen() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">Referenzen</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Überzeugen Sie sich selbst - was unsere Kunden über uns sagen.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Kundenstimmen"
            subtitle="Vertrauen, das durch Qualität entsteht."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title="Werden Sie unser nächster Referenzkunde"
        subtitle="Sprechen Sie uns an - unverbindlich und kostenlos."
        buttonText="Beratungstermin buchen"
        buttonHref="/beratungstermin"
      />
    </>
  );
}
