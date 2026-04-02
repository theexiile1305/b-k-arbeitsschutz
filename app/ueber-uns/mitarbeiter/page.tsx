import { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = buildMetadata(
  "Mitarbeiter",
  "Das Team hinter BK Arbeitsschutz - Experten mit Leidenschaft für Sicherheit."
);

export default function Mitarbeiter() {
  return (
    <>
      <PageHeader
        title="Unser Team"
        subtitle="Menschen, die Sicherheit nicht nur als Beruf, sondern als Berufung verstehen."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Kilian Berger" subtitle="Gründer & Eigentümer" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/employee_kilian_berger.jpg"
                alt="Kilian Berger"
                width={350}
                height={450}
                className="rounded-xl shadow-xl object-cover object-top"
              />
            </div>
            <div className="space-y-5 text-bk-gray leading-relaxed">
              <p>
                Als Gründer und Eigentümer von BK Arbeitsschutz verbindet Kilian Berger fundiertes
                Fachwissen mit einem praxisorientierten Ansatz.
              </p>
              <p>
                Mit langjähriger Erfahrung in der Arbeitssicherheit, dem Handwerk sowie dem
                Managementbereich kennt er die realen Herausforderungen in Betrieben aus erster
                Hand.
              </p>
              <p>
                Sein Ziel: Nicht nur rechtliche Anforderungen erfüllen, sondern echte
                Sicherheitskultur schaffen - messbar, nachhaltig und zugeschnitten auf die
                individuellen Bedürfnisse jedes Unternehmens.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Fachkraft für Arbeitssicherheit",
                  "Elektrofachkraft",
                  "Zertifizierter Trainer",
                  "Betriebswirt",
                  "Handwerksmeister",
                  "DGUV V2 Betreuung",
                  "Brandschutzbeauftragter",
                  "Gefahrstoffbeauftragter",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-bk-dark/10 text-bk-dark text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Gerlinde Bauer" subtitle="Assistenz & Administration" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/employee_gerlinde_bauer.jpg"
                alt="Gerlinde Bauer"
                width={350}
                height={450}
                className="rounded-xl shadow-xl object-cover object-top"
              />
            </div>
            <div className="space-y-5 text-bk-gray leading-relaxed">
              <p>
                Gerlinde Bauer ist die organisatorische Stütze von BK Arbeitsschutz. Als Assistenz
                und Backoffice-Verantwortliche sorgt sie dafür, dass Abläufe reibungslos
                funktionieren und Kunden stets einen kompetenten Ansprechpartner haben.
              </p>
              <p>
                Mit einem ausgeprägten Sinn für Struktur und Sorgfalt koordiniert sie administrative
                Prozesse, Terminplanung und die interne Kommunikation - zuverlässig und mit großem
                Engagement.
              </p>
              <p>
                Ihr Ziel: Dass sich Kunden und Kollegen jederzeit gut betreut und informiert fühlen.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Assistenz", "Backoffice", "Administration"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-bk-dark/10 text-bk-dark text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Markus Weber" subtitle="Prüfservice & Regalinspektion" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/employee_markus_weber.jpg"
                alt="Markus Weber"
                width={350}
                height={450}
                className="rounded-xl shadow-xl object-cover object-top"
              />
            </div>
            <div className="space-y-5 text-bk-gray leading-relaxed">
              <p>
                Markus Weber vereint ein breites Kompetenzspektrum: Als Regalinspekteur und
                UVV-Prüfer kennt er die sicherheitsrelevanten Anforderungen in Lagerbetrieben aus
                dem Effeff.
              </p>
              <p>
                Darüber hinaus bringt er IT-Kenntnisse und eine Ausbildung als Drohnenpilot mit -
                modernste Mittel, die er bei der drohnengestützten Dokumentation von Prüfungen
                effektiv einsetzt.
              </p>
              <p>
                Mit seinem vielseitigen Profil deckt er sowohl operative Prüftätigkeiten als auch
                administrative Aufgaben zuverlässig ab.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Prüfservice",
                  "Regalinspekteur",
                  "UVV Prüfer",
                  "IT",
                  "Drohnenpilot",
                  "Administration",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-bk-dark/10 text-bk-dark text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Yonas Habtemariam" subtitle="Prüfservice & Elektrotechnik" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/employee_yonas_habtemariam.jpg"
                alt="Yonas Habtemariam"
                width={350}
                height={450}
                className="rounded-xl shadow-xl object-cover object-top"
              />
            </div>
            <div className="space-y-5 text-bk-gray leading-relaxed">
              <p>
                Yonas Habtemariam bringt fundierte Fachkenntnisse in der Elektrotechnik und im
                Prüfservice mit. Als Elektrofachkraft (EFK) führt er Prüfungen nach DGUV V3 und
                weiteren Normen präzise und zuverlässig durch.
              </p>
              <p>
                Seine technische Expertise und sein strukturiertes Vorgehen machen ihn zu einem
                unverzichtbaren Teil des Prüfteams – ob bei elektrischen Betriebsmitteln oder bei
                der Beurteilung komplexer Anlagen.
              </p>
              <p>
                Sein Anspruch: Höchste Prüfqualität und klare, nachvollziehbare Ergebnisse für jeden
                Kunden.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Prüfservice", "Elektrotechnik", "EFK"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-bk-dark/10 text-bk-dark text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        title="Sprechen Sie mit unserem Team"
        buttonText="Jetzt Termin buchen"
        buttonHref="/kontakt"
      />
    </>
  );
}
