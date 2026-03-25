import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Brandschutz",
  "Präventiver und organisatorischer Brandschutz - Beratung, Begehungen und Schulungen."
);

export default function Brandschutz() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">Brandschutz</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Umfassender Brandschutz für Ihren Betrieb - präventiv, organisatorisch und technisch.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="Unsere Brandschutzleistungen" />
              <div className="space-y-5 text-bk-gray leading-relaxed">
                <p>
                  Brandschutz ist mehr als Feuerlöscher und Fluchtwege. Wir entwickeln ganzheitliche
                  Brandschutzkonzepte für Ihren Betrieb und begleiten Sie von der Planung bis zur
                  Umsetzung.
                </p>
                <p>
                  Als erfahrene Brandschutzexperten kennen wir die gesetzlichen Anforderungen und
                  helfen Ihnen, diese rechtssicher zu erfüllen.
                </p>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    title: "Brandschutzbegehungen",
                    text: "Systematische Inspektion Ihrer Brandschutzsituation.",
                  },
                  {
                    title: "Brandschutzordnung",
                    text: "Erstellung und Aktualisierung nach DIN 14096.",
                  },
                  {
                    title: "Evakuierungsplanung",
                    text: "Flucht- und Rettungswegeplanung für Ihr Gebäude.",
                  },
                  {
                    title: "Brandschutzhelfer-Ausbildung",
                    text: "Qualifizierung Ihrer Mitarbeiter nach ASR A2.2.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-lg shadow-sm border border-gray-100 p-5"
                  >
                    <h3 className="font-bold text-bk-dark mb-1 font-bk-heading">{item.title}</h3>
                    <p className="text-bk-gray text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        title="Brandschutz jetzt optimieren"
        buttonText="Beratungstermin buchen"
        buttonHref="/kontakt"
      />
    </>
  );
}
