import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Angepasster Gehörschutz",
  "Individuell angepasster Gehörschutz für optimalen Schutz und maximalen Tragekomfort."
);

export default function AngepassterGehoerschutz() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">
            Angepasster Gehörschutz
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Maßgeschneiderter Gehörschutz - für optimalen Schutz, der wirklich getragen wird.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Warum angepasster Gehörschutz?" />
          <div className="space-y-5 text-bk-gray leading-relaxed">
            <p>
              Gehörschutz der nicht richtig passt, wird nicht oder falsch getragen - und schützt
              damit nicht. Individuell angepasster Gehörschutz sitzt perfekt, schützt zuverlässig
              und wird von Mitarbeitern gerne getragen.
            </p>
            <h3 className="text-bk-dark font-bold text-xl mt-6 font-bk-heading">Vorteile:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Maximaler Schutz durch perfekte Passform</li>
              <li>Hoher Tragekomfort - ganzen Tag tragbar</li>
              <li>Langlebig und hygienisch</li>
              <li>Verschiedene Dämmklassen verfügbar</li>
              <li>Auch mit Kommunikationsfunktion erhältlich</li>
            </ul>
            <p>
              Unser Service umfasst die Abdrucknahme direkt im Betrieb, die Fertigung nach Maß sowie
              die Einweisung Ihrer Mitarbeiter.
            </p>
          </div>
        </div>
      </section>

      <CTABlock
        title="Gehörschutz anfragen"
        buttonText="Jetzt anfragen"
        buttonHref="/kontakt"
      />
    </>
  );
}
