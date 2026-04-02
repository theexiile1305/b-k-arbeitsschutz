import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";
import ContentWithImage from "@/components/ui/ContentWithImage";
import PruefserviceSubpageNavigation from "@/components/ui/PruefserviceSubpageNavigation";

export const metadata: Metadata = buildMetadata(
  "Leitern & Tritte",
  "Prüfung von Leitern und Tritten nach DGUV Regel 108-007."
);

export default function LeiternTritte() {
  return (
    <>
      <PageHeader
        title="Leitern & Tritte"
        subtitle="Professionelle Prüfung von Leitern und Tritten - für sichere Höhenarbeit."
      />

      <ContentWithImage imageSrc="/leitern-tritte.jpeg" imageAlt="Leitern- und Tritteprüfung">
        <SectionHeading title="Leitern- und Tritteprüfung" />
        <div className="space-y-5 text-bk-gray leading-relaxed">
          <p>
            Leitern und Tritte müssen regelmäßig auf ihren sicheren Zustand geprüft werden. Defekte
            Leitern sind eine häufige Ursache für Absturzunfälle. Wir prüfen alle Typen und
            Materialien.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Anlegeleitern und Stehleitern</li>
            <li>Mehrzweckleitern</li>
            <li>Tritte und Podestleitern</li>
            <li>Aluminium-, Stahl- und Holzleitern</li>
          </ul>
        </div>
      </ContentWithImage>

      <PruefserviceSubpageNavigation />

      <CTABlock title="Leitern prüfen lassen" buttonText="Jetzt anfragen" buttonHref="/kontakt" />
    </>
  );
}
