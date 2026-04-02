import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = buildMetadata(
  "Referenzen",
  "Unsere Kunden sprechen für uns - Referenzen und Erfahrungsberichte von BK Arbeitsschutz."
);

const testimonials = [
  {
    quote:
      "BK Arbeitsschutz hat unsere gesamte Gefährdungsbeurteilung überarbeitet und professionell dokumentiert. Wir sind nun rechtssicher aufgestellt und haben klare Prozesse.",
    author: "Thomas M.",
    company: "Produktionsbetrieb, Dachau",
    area: "Arbeitsschutz",
  },
  {
    quote:
      "Die Schulungen der BK Akademie sind praxisnah und auf den Punkt. Unser Team hat die Inhalte sofort im Alltag angewendet. Absolut empfehlenswert.",
    author: "Sandra K.",
    company: "Logistikunternehmen, Gramisch-Partenkirchen",
    area: "Akademie",
  },
  {
    quote:
      "Der Prüfservice ist zuverlässig, die Dokumentation vorbildlich und die Terminabsprache unkompliziert. Wir verlängern den Vertrag jedes Jahr.",
    author: "Markus R.",
    company: "Handwerksbetrieb, Olching",
    area: "Prüfservice",
  },
  {
    quote:
      "Dank der professionellen Brandschutzberatung durch BK Arbeitsschutz sind wir nun optimal auf den Ernstfall vorbereitet. Die Begehungen wurden gründlich und effizient durchgeführt.",
    author: "Julia H.",
    company: "Pflegeeinrichtung, Starnberg",
    area: "Brandschutz",
  },
  {
    quote:
      "Die DGUV V3-Prüfungen wurden schnell und reibungslos organisiert. Alle Unterlagen waren sofort verfügbar - das hat uns bei der nächsten Betriebsprüfung sehr geholfen.",
    author: "Stefan W.",
    company: "Industriebetrieb, Kirchheim",
    area: "Prüfservice",
  },
  {
    quote:
      "Unser Sicherheitsbeauftragter hat die Ausbildung bei der BK Akademie absolviert und ist seitdem ein echter Gewinn für unser Unternehmen. Sehr empfehlenswerte Kurse!",
    author: "Andrea B.",
    company: "Einzelhandel, Bad Tölz",
    area: "Akademie",
  },
  {
    quote:
      "Kilian Berger hat uns von Anfang an als echter Partner begleitet - nicht als Dienstleister, sondern als Teil unseres Teams. Genau das haben wir gesucht.",
    author: "Julia W.",
    company: "Pharmaunternehmen, München",
    area: "Arbeitsschutz",
  },
  {
    quote:
      "Die Brandschutzbegehung war sehr gründlich. Der Bericht enthielt klare Maßnahmen, die wir sofort umsetzen konnten. Hervorragende Arbeit.",
    author: "Andreas T.",
    company: "Lagerlogistik, Erding",
    area: "Brandschutz",
  },
  {
    quote:
      "Der angepasste Gehörschutz aus dem BK-Sortiment hat die Akzeptanz bei unseren Mitarbeitern deutlich erhöht. Jetzt wird er wirklich getragen.",
    author: "Petra L.",
    company: "Metallverarbeitung, Wolfratshausen",
    area: "Arbeitsmittel & PSA",
  },
];

export default function Referenzen() {
  return (
    <>
      <PageHeader
        title="Referenzen"
        subtitle="Überzeugen Sie sich selbst - was unsere Kunden über uns sagen."
      />

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
        buttonHref="/kontakt"
      />
    </>
  );
}
