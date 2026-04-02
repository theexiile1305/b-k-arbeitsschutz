import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";
import ContentWithImage from "@/components/ui/ContentWithImage";

export const metadata: Metadata = buildMetadata(
  "Regalprüfung",
  "Prüfung von Lagerregalen nach DIN EN 15635 - Sicherheit im Lager."
);

export default function Regale() {
  return (
    <>
      <PageHeader
        title="Regalprüfung"
        subtitle="Sichere Lagerregale durch regelmäßige Prüfung nach DIN EN 15635."
      />

      <ContentWithImage imageSrc="/regale.jpeg" imageAlt="Regalprüfung">
        <SectionHeading title="Regalprüfung nach Norm" />
        <div className="space-y-5 text-bk-gray leading-relaxed">
          <p>
            Beschädigte Lagerregale sind eine häufige Unfallursache in Lagerbetrieben. Die Norm DIN
            EN 15635 schreibt regelmäßige Inspektionen vor. Unsere Prüfer identifizieren Schäden und
            empfehlen Maßnahmen.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Sichtprüfung aller Regalkomponenten</li>
            <li>Bewertung von Schäden nach Schadensklassen</li>
            <li>Dokumentation mit drohnengestützter Foto- und Videodokumentation</li>
            <li>Prüfbericht mit Handlungsempfehlungen</li>
          </ul>
        </div>
      </ContentWithImage>

      <CTABlock
        title="Regalprüfung beauftragen"
        buttonText="Jetzt anfragen"
        buttonHref="/kontakt"
      />
    </>
  );
}
