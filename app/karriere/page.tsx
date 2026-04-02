import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHeader from "@/components/ui/PageHeader";
import KarriereForm from "@/components/forms/KarriereForm";

export const metadata: Metadata = buildMetadata(
  "Karriere",
  "Job Perspektiven bei BK - Arbeitsschutz. Werden Sie Teil unseres Teams."
);

const jobs = [
  {
    title: "Sicherheitsfachkraft (MWD)",
    type: "Vollzeit / Teilzeit - Mobilarbeit",
    taetigkeiten: [
      "Sie beraten unsere Kunden vollumfänglich als Sicherheitsfachkraft gemäß § 6 ASiG.",
      "Sie treiben die Digitalisierung im Arbeitsschutz voran und entwickeln moderne Vorlagen / Standards für Gefährdungsbeurteilungen.",
      "Sie sensibilisieren Belegschaften durch interaktive Mitarbeiterunterweisungen.",
      "Sie führen qualifizierte Betriebsbegehungen durch und sorgen für sichere Arbeitsplätze.",
      "Sie leiten und koordinieren die regelmäßigen ASA-Sitzungen.",
      "Uvm.",
    ],
    voraussetzungen: [
      "Abgeschlossenes technisches Studium oder eine Berufsausbildung als Meister / Techniker",
      "Idealerweise zwei Jahre Berufserfahrung in der Funktion als Fachkraft für Arbeitssicherheit",
      "Ausbildung zur Fachkraft für Arbeitssicherheit gemäß § 7 ASiG",
    ],
    perspektive: [
      "Eigenständige Arbeitsweise mit flexiblen Arbeitszeiten",
      "Firmenfahrzeug auch zur Privatnutzung",
      "Motiviertes Team",
    ],
  },
  {
    title: "Fachkraft für Prüfservice (MWD)",
    type: "Vollzeit / Teilzeit / Minijob",
    taetigkeiten: [
      "Prüfen von ortsveränderlichen elektrischen Betriebsmittel / Maschinen und Geräte",
      "Prüfen feststehender Regalanlagen bei unseren Kunden vor Ort",
      "Prüfen von kraftbetriebenen Toren, Flurförderzeugen, …",
      "Prüfen von Leitern Tritten und Kleingerüsten",
    ],
    voraussetzungen: [
      "Elektrofachkraft ( EFK) bzw. mindesten für festgelegte Tätigkeiten (EFKfft)",
      "Regalinspekteur (kann gerne erworben werden)",
      "UVV Prüfer für die jeweilige Anforderung",
      "Befähigte Person zum Prüfen von Leitern / Tritten / Kleingerüsten (kann gerne erworben werden)",
      "freundlichen Kontakt zu unseren Kunden",
    ],
    perspektive: null,
  },
  {
    title: "Teamassistenz (MWD)",
    type: "Vollzeit / Teilzeit / Minijob - Mobilearbeit",
    taetigkeiten: [
      "Übernahme administrativer und organisatorischer Aufgaben im Tagesgeschäft",
      "Unterstützung beim Aufbau strukturierter Arbeitsabläufe sowie bei der Optimierung von Ablagesystemen",
      "Schnittstelle zwischen verschiedenen Fachbereichen und Ansprechpartner für interne Anliegen",
      "Fachliche Zuarbeit und Unterstützung in unterschiedlichen Themengebieten",
      "uvm.",
    ],
    voraussetzungen: [
      "Freundliches, kommunikatives und vertrauenswürdiges Auftreten sowie ein hohes Maß an Loyalität und Diskretion",
      "Abgeschlossene kaufmännische Ausbildung oder eine vergleichbare Qualifikation",
      "Gute IT-Kenntnisse, insbesondere im Umgang mit Microsoft Office",
      "Selbstständige, strukturierte und sorgfältige Arbeitsweise sowie schnelle Auffassungsgabe",
      "Teamfähigkeit und Freude an der Zusammenarbeit mit verschiedenen Fachbereichen",
    ],
    perspektive: null,
  },
];

export default function Karriere() {
  return (
    <>
      <PageHeader title="Karriere" subtitle="Job Perspektiven bei BK - Arbeitsschutz" />

      {/* Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-bk-text leading-relaxed mb-4">
              Unsere Mitarbeiter sind unser wertvollstes Potenzial, unsere Wissensbasis und das
              Gesicht zu unseren Kunden. Da Ihre Zufriedenheit für uns oberste Priorität hat,
              fördern wir gezielt Ihre individuellen Weiterbildungswünsche, um Ihre Expertise
              gewinnbringend für unser Team und unsere Kunden einzusetzen.
            </p>
            <p className="text-bk-text leading-relaxed mb-4">
              Wir suchen motivierte und strukturiert arbeitende Kollegen, die mit uns an einem
              Strang ziehen. Wenn Sie eine eigenständige, zielorientierte Arbeitsweise schätzen,
              bieten wir Ihnen im Gegenzug flexible Arbeitszeiten sowie eine attraktive,
              leistungsorientierte Vergütung.
            </p>
            <p className="text-bk-text leading-relaxed mb-4">
              Möchten Sie als Teil eines Premiumdienstleisters den Arbeitsschutz der Zukunft
              mitgestalten?
            </p>
            <p className="text-bk-dark font-semibold">
              Dann freuen wir uns darauf, Sie kennenzulernen!
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Derzeit suchen wir:" />
          <div className="mt-10 space-y-8">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-8"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-bk-dark font-bk-heading mb-1">
                    {job.title}
                  </h2>
                  <p className="text-sm text-bk-light font-medium">{job.type}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-bk-dark mb-3">
                      Tätigkeiten
                    </h3>
                    <ul className="space-y-2">
                      {job.taetigkeiten.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-bk-text">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-bk-light shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-bk-dark mb-3">
                        Voraussetzungen
                      </h3>
                      <ul className="space-y-2">
                        {job.voraussetzungen.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-bk-text">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-bk-light shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {job.perspektive && (
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-bk-dark mb-3">
                          Perspektive
                        </h3>
                        <ul className="space-y-2">
                          {job.perspektive.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-bk-text">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-bk-light shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Jetzt bewerben"
            subtitle="Haben Sie Interesse? Schreiben Sie uns - wir freuen uns auf Ihre Nachricht."
          />
          <KarriereForm />
        </div>
      </section>
    </>
  );
}
