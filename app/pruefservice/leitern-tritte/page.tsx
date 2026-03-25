import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Leitern & Tritte",
  "Prüfung von Leitern und Tritten nach DGUV Regel 108-007."
);

export default function LeiternTritte() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">Leitern & Tritte</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Professionelle Prüfung von Leitern und Tritten - für sichere Höhenarbeit.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Leitern- und Tritteprüfung" />
          <div className="space-y-5 text-bk-gray leading-relaxed">
            <p>
              Leitern und Tritte müssen regelmäßig auf ihren sicheren Zustand geprüft werden.
              Defekte Leitern sind eine häufige Ursache für Absturzunfälle. Wir prüfen alle Typen
              und Materialien.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Anlegeleitern und Stehleitern</li>
              <li>Mehrzweckleitern</li>
              <li>Tritte und Podestleitern</li>
              <li>Aluminium-, Stahl- und Holzleitern</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABlock title="Leitern prüfen lassen" buttonText="Jetzt anfragen" buttonHref="/kontakt" />
    </>
  );
}
