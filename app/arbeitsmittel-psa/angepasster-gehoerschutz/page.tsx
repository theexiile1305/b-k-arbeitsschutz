import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";
import ArbeitsmittelPsaSubpageNavigation from "@/components/ui/ArbeitsmittelPsaSubpageNavigation";

export const metadata: Metadata = buildMetadata(
  "Angepasster Gehörschutz",
  "Individuell angepasster Gehörschutz für optimalen Schutz und maximalen Tragekomfort."
);

export default function AngepassterGehoerschutz() {
  return (
    <>
      <PageHeader
        title="Angepasster Gehörschutz"
        subtitle="Maßgeschneiderter Gehörschutz - für optimalen Schutz, der wirklich getragen wird."
      />

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

      <ArbeitsmittelPsaSubpageNavigation />

      <CTABlock title="Gehörschutz anfragen" buttonText="Jetzt anfragen" buttonHref="/kontakt" />
    </>
  );
}
