import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";
import ContentWithImage from "@/components/ui/ContentWithImage";

export const metadata: Metadata = buildMetadata(
  "Kraftbetriebene Tore",
  "Prüfung kraftbetriebener Tore und Türen nach BGG/GUV-G 905."
);

export default function KraftbetriebseneTore() {
  return (
    <>
      <PageHeader
        title="Kraftbetriebene Tore"
        subtitle="Sicherheitsprüfung kraftbetriebener Tore und Türen - nach gesetzlichen Vorgaben."
      />

      <ContentWithImage
        imageSrc="/kraftbetriebene-tore.jpeg"
        imageAlt="Prüfung kraftbetriebener Tore"
      >
        <SectionHeading title="Warum Torprüfungen wichtig sind" />
        <div className="space-y-5 text-bk-gray leading-relaxed">
          <p>
            Kraftbetriebene Tore können bei Fehlfunktionen eine erhebliche Verletzungsgefahr
            darstellen. Regelmäßige Prüfungen nach BGG/GUV-G 905 sind daher Pflicht für Betreiber.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Rolltore und Sektionaltore</li>
            <li>Schnelllauftore</li>
            <li>Schiebetore und Drehtüren</li>
            <li>Garagen- und Hallentore</li>
          </ul>
        </div>
      </ContentWithImage>

      <CTABlock title="Torprüfung beauftragen" buttonText="Jetzt anfragen" buttonHref="/kontakt" />
    </>
  );
}
