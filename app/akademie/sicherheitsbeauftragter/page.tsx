import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";
import ContentWithImage from "@/components/ui/ContentWithImage";
import AkademieSubpageNavigation from "@/components/ui/AkademieSubpageNavigation";

export const metadata: Metadata = buildMetadata(
  "Sicherheitsbeauftragter",
  "Ausbildung und Weiterbildung für Sicherheitsbeauftragte nach DGUV."
);

export default function Sicherheitsbeauftragter() {
  return (
    <>
      <PageHeader
        title="Sicherheitsbeauftragter"
        subtitle="Qualifizierung von Sicherheitsbeauftragten - praxisnah und nach aktuellen DGUV-Standards."
      />

      <ContentWithImage
        imageSrc="/sicherheitsbeauftragter.jpeg"
        imageAlt="Fachkraft für Arbeitssicherheit bei der Ausbildung von Sicherheitsbeauftragten"
      >
        <SectionHeading title="Ausbildung zum Sicherheitsbeauftragten" />
        <div className="space-y-5 text-bk-gray leading-relaxed">
          <p>
            Sicherheitsbeauftragte sind wichtige Multiplikatoren für den Arbeitsschutz im Betrieb.
            Wir qualifizieren Ihre Mitarbeiter umfassend für diese verantwortungsvolle Aufgabe.
          </p>
          <h3 className="text-bk-dark font-bold text-xl mt-6 font-bk-heading">Schulungsinhalte:</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Aufgaben und Rechte des Sicherheitsbeauftragten</li>
            <li>Rechtliche Grundlagen des Arbeitsschutzes</li>
            <li>Gefährdungsbeurteilungen begleiten</li>
            <li>Kommunikation und Motivation</li>
            <li>Unfallmeldung und -analyse</li>
          </ul>
        </div>
      </ContentWithImage>

      <AkademieSubpageNavigation />

      <CTABlock
        title="Sicherheitsbeauftragte ausbilden"
        buttonText="Jetzt anfragen"
        buttonHref="/kontakt"
      />
    </>
  );
}
