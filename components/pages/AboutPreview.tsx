import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              title="Über BK Arbeitsschutz"
              subtitle="Ihr Partner für professionellen Arbeitsschutz in der Region"
            />
            <p className="text-bk-gray leading-relaxed mb-6">
              Als Gründer und Geschäftsführer von BK Arbeitsschutz bringe ich, Kilian Berger,
              langjährige Expertise im Arbeitsschutz und der Arbeitssicherheit mit. Unser Ziel ist
              es, Unternehmen nicht nur rechtssicher aufzustellen, sondern eine nachhaltige
              Sicherheitskultur zu etablieren.
            </p>
            <p className="text-bk-gray leading-relaxed mb-8">
              Wir verstehen Ihr Anliegen als unsere Aufgabe - und Ihren Erfolg als unser Ziel. Von
              der ersten Beratung bis zur laufenden Betreuung stehen wir Ihnen als zuverlässiger
              Partner zur Seite.
            </p>
            <Link
              href="/ueber-uns"
              className="inline-flex items-center gap-2 bg-bk-dark hover:bg-bk-mid text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Mehr über uns
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-bk-light/20 rounded-2xl" />
              <Image
                src="/me.png"
                alt="Kilian Berger - Geschäftsführer BK Arbeitsschutz"
                width={400}
                height={500}
                className="relative rounded-xl shadow-xl object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
