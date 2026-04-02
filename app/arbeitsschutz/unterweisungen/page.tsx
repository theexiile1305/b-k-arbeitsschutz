import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";
import ContentWithImage from "@/components/ui/ContentWithImage";
import ArbeitsschutzSubpageNavigation from "@/components/ui/ArbeitsschutzSubpageNavigation";

export const metadata: Metadata = buildMetadata(
  "Unterweisungen",
  "Professionelle Mitarbeiterunterweisungen - rechtssicher dokumentiert."
);

export default function Unterweisungen() {
  return (
    <>
      <PageHeader
        title="Unterweisungen"
        subtitle="Wirksame Unterweisungen - verständlich, dokumentiert und auf Ihren Betrieb abgestimmt."
      />

      <ContentWithImage
        imageSrc="/unterweisungen.jpeg"
        imageAlt="Mitarbeiterunterweisung im Plenum"
      >
        <SectionHeading title="Warum Unterweisungen so wichtig sind" />
        <div className="space-y-5 text-bk-gray leading-relaxed">
          <p>
            Gemäß § 12 ArbSchG sind Arbeitgeber verpflichtet, ihre Beschäftigten über Sicherheits-
            und Gesundheitsschutzfragen zu unterweisen. BK Arbeitsschutz erstellt und führt
            Unterweisungen durch, die wirklich ankommen.
          </p>
          <p>
            Unsere Unterweisungen sind praxisnah, verständlich und vollständig dokumentiert. Sie
            erhalten alle Unterlagen digital und in Papierform für Ihre Betriebsakte.
          </p>
          <h3 className="text-bk-dark font-bold text-xl mt-8 font-bk-heading">
            Unterweisungsthemen (Auswahl):
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Allgemeine Arbeitssicherheit</li>
            <li>Brandschutz und Notfallverhalten</li>
            <li>Umgang mit Gefahrstoffen</li>
            <li>Bildschirmarbeitsplätze</li>
            <li>Heben und Tragen</li>
            <li>Persönliche Schutzausrüstung</li>
          </ul>
        </div>
      </ContentWithImage>

      <ArbeitsschutzSubpageNavigation />

      <CTABlock
        title="Unterweisungen professionell organisieren"
        buttonText="Jetzt anfragen"
        buttonHref="/kontakt"
      />
    </>
  );
}
