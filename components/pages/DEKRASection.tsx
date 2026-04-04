import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function DEKRASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Unsere Zertifizierung"
          subtitle="Exklusiver Ansprechpartner unter der Flagge der DEKRA"
          centered
        />
        <div className="flex flex-col items-center gap-6 mt-12">
          <Image
            src="/dekra.png"
            alt="DEKRA Logo"
            width={200}
            height={100}
            className="object-contain"
          />
          <p className="text-bk-gray text-center max-w-xl text-lg">
            BK Arbeitsschutz ist zertifiziert durch DEKRA - ein Zeichen für höchste
            Qualitätsstandards und geprüfte Kompetenz im Arbeitsschutz.
          </p>
        </div>
      </div>
    </section>
  );
}
