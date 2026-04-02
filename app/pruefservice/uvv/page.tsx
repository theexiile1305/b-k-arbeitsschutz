import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";
import ContentWithImage from "@/components/ui/ContentWithImage";

export const metadata: Metadata = buildMetadata(
  "UVV-Prüfung",
  "Fahrzeug- und Geräteprüfungen nach Unfallverhütungsvorschriften."
);

export default function UVV() {
  return (
    <>
      <PageHeader
        title="UVV-Prüfung"
        subtitle="Prüfungen nach Unfallverhütungsvorschriften - für Fahrzeuge und Betriebsmittel."
      />

      <ContentWithImage
        imageSrc="/uvv.jpeg"
        imageAlt="UVV-Prüfung von Fahrzeugen und Betriebsmitteln"
      >
        <SectionHeading title="UVV-Prüfung im Überblick" />
        <div className="space-y-5 text-bk-gray leading-relaxed">
          <p>
            Die Unfallverhütungsvorschriften (UVV) der Berufsgenossenschaften schreiben regelmäßige
            Prüfungen für Fahrzeuge und bestimmte Betriebsmittel vor. Wir führen diese Prüfungen
            qualifiziert durch.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Flurförderzeuge (Stapler, Hubwagen)</li>
            <li>Betriebsfahrzeuge und Anhänger</li>
            <li>Hebebühnen und Arbeitsbühnen</li>
            <li>Weitere prüfpflichtige Betriebsmittel</li>
          </ul>
        </div>
      </ContentWithImage>

      <CTABlock title="UVV-Prüfung beauftragen" buttonText="Jetzt anfragen" buttonHref="/kontakt" />
    </>
  );
}
