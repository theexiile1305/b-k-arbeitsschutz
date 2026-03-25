import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Über uns",
  "Lernen Sie BK Arbeitsschutz kennen - unser Team, unsere Vision und unsere Werte."
);

export default function UeberUns() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">Über uns</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Lernen Sie BK Arbeitsschutz kennen - ein Unternehmen, das Sicherheit lebt.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="BK Arbeitsschutz" subtitle="Ihr zuverlässiger Partner" />
              <p className="text-bk-gray leading-relaxed mb-6">
                BK Arbeitsschutz wurde gegründet, um Unternehmen jeder Größe einen kompetenten und
                zuverlässigen Partner im Bereich Arbeitssicherheit und Gesundheitsschutz zu bieten.
                Unser Anspruch: mehr als nur Compliance - wir schaffen echte Sicherheitskultur.
              </p>
              <p className="text-bk-gray leading-relaxed mb-8">
                Von der Beratung kleiner Handwerksbetriebe bis zur Betreuung großer
                Industrieunternehmen - wir kennen die Herausforderungen und haben die passenden
                Lösungen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {[
                  { href: "/ueber-uns/vision", label: "Unsere Vision" },
                  { href: "/ueber-uns/firma", label: "Die Firma" },
                  { href: "/ueber-uns/mitarbeiter", label: "Mitarbeiter" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block bg-bk-dark text-white text-center py-3 px-4 rounded-lg hover:bg-bk-mid transition-colors text-sm font-semibold"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/me.png"
                alt="Kilian Berger - BK Arbeitsschutz"
                width={400}
                height={500}
                className="rounded-xl shadow-xl object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        title="Sprechen Sie uns an"
        subtitle="Wir freuen uns auf Ihre Anfrage."
        buttonText="Beratungstermin buchen"
        buttonHref="/kontakt"
      />
    </>
  );
}
