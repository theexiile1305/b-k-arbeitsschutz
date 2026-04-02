import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    quote:
      "BK Arbeitsschutz hat unsere Gefährdungsbeurteilungen vollständig modernisiert und unser Team professionell unterwiesen. Die Zusammenarbeit war unkompliziert und äußerst kompetent.",
    author: "Thomas M.",
    company: "Produktionsbetrieb, Bayern",
    area: "Arbeitsschutz",
  },
  {
    quote:
      "Die Schulungen der BK Akademie sind praxisnah und auf den Punkt. Unsere Mitarbeiter sind begeistert - und wir sind endlich rechtssicher aufgestellt.",
    author: "Sandra K.",
    company: "Logistikunternehmen, NRW",
    area: "Akademie",
  },
  {
    quote:
      "Der Prüfservice ist zuverlässig, termingerecht und die Dokumentation vorbildlich. Wir können BK Arbeitsschutz jedem mittelständischen Betrieb empfehlen.",
    author: "Markus R.",
    company: "Handwerksbetrieb, Baden-Württemberg",
    area: "Prüfservice",
  },
  {
    quote:
      "Dank der professionellen Brandschutzberatung durch BK Arbeitsschutz sind wir nun optimal auf den Ernstfall vorbereitet. Die Begehungen wurden gründlich und effizient durchgeführt.",
    author: "Julia H.",
    company: "Pflegeeinrichtung, Bayern",
    area: "Brandschutz",
  },
  {
    quote:
      "Die DGUV V3-Prüfungen wurden schnell und reibungslos organisiert. Alle Unterlagen waren sofort verfügbar - das hat uns bei der nächsten Betriebsprüfung sehr geholfen.",
    author: "Stefan W.",
    company: "Industriebetrieb, Sachsen",
    area: "Prüfservice",
  },
  {
    quote:
      "Unser Sicherheitsbeauftragter hat die Ausbildung bei der BK Akademie absolviert und ist seitdem ein echter Gewinn für unser Unternehmen. Sehr empfehlenswerte Kurse!",
    author: "Andrea B.",
    company: "Einzelhandel, Hessen",
    area: "Akademie",
  },
];

export default function ReferenzenSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Das sagen unsere Kunden"
          subtitle="Vertrauen, das durch Qualität entsteht."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
