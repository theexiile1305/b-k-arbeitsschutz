import Image from "next/image";
import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";
import ContentWithImage from "@/components/ui/ContentWithImage";
import AkademieSubpageNavigation from "@/components/ui/AkademieSubpageNavigation";

export const metadata: Metadata = buildMetadata(
  "Fahrausbildung",
  "Professionelle Fahrausbildung für Flurförderzeuge und Stapler."
);

const fahrausbildungen = [
  {
    title: "Flurförderzeug DGUV V68",
    imageSrc: "/flurfoerderzeug.jpeg",
    imageAlt: "Gabelstapler und Flurförderzeuge in einem Lagerhaus",
    description:
      "Ausbildung für das sichere Bedienen von Gabelstaplern und Flurförderzeugen gemäß DGUV Vorschrift 68. Unsere zertifizierten Ausbilder vermitteln sowohl theoretische Grundlagen als auch praktische Fahrübungen mit abschließender Prüfung.",
  },
  {
    title: "Telemaschinen nach DGUV 308-009",
    imageSrc: "/telemaschinen.jpeg",
    imageAlt: "Teleskopstapler und Teleskoparbeitsbühnen in Aktion auf einer Baustelle",
    description:
      "Qualifizierung für den sicheren Einsatz von Teleskopmaschinen wie Teleskopstaplern und Teleskoparbeitsbühnen in verschiedenen Arbeitsumgebungen. Die Schulung umfasst Maschinenkunde, Standsicherheit sowie rechtliche Anforderungen nach DGUV Grundsatz 308-009.",
  },
  {
    title: "Erd-/Baumaschinen nach DGUV Grundsatz 301-005 / DGUV Regel 100-500",
    imageSrc: "/erd_baumaschinen.png",
    imageAlt: "Erd- und Baumaschinen wie Bagger, Radlader und Planierraupen",
    description:
      "Schulung für das fachgerechte Bedienen von Erd- und Baumaschinen wie Baggern, Radladern und Planierraupen unter Berücksichtigung aktueller Sicherheitsrichtlinien. Inhalte sind u.\u00a0a. Maschinenführung, Standsicherheit, Gefahrenbereiche und die gesetzlichen Vorschriften gemäß DGUV.",
  },
  {
    title: "Kranführer / Kranschein nach DGUV Grundsatz 309-003",
    imageSrc: "/kran.jpeg",
    imageAlt: "Kranführer bedient einen Brückenkran in einem Industriegebäude",
    description:
      "Ausbildung zum sicheren Führen von Krananlagen - von Brückenkranen bis hin zu Mobilkranen - nach den geltenden DGUV Grundsätzen. Der Lehrgang schließt mit einer praktischen und theoretischen Prüfung ab, nach der die Teilnehmer den anerkannten Kranführerschein erhalten.",
  },
];

export default function Fahrausbildung() {
  return (
    <>
      <PageHeader
        title="Fahrausbildung"
        subtitle="Sichere Fahrausbildung für Flurförderzeuge, Stapler und weitere Fahrzeuge."
      />

      <ContentWithImage
        imageSrc="/fahrausbildung.jpeg"
        imageAlt="Fachkraft für Arbeitssicherheit bei der Fahrausbildung von Staplern"
      >
        <SectionHeading title="Unsere Fahrausbildungen" />
        <div className="space-y-5 text-bk-gray leading-relaxed">
          <p>
            Die DGUV Grundsatz 308-001 (ehemals BGG 925) regelt die Ausbildung von Staplern und
            Flurförderzeugen. Unsere zertifizierten Ausbilder schulen Ihre Mitarbeiter praxisnah und
            rechtssicher.
          </p>
          <h3 className="text-bk-dark font-bold text-xl mt-6 font-bk-heading">
            Ausbildungsinhalte:
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Rechtliche Grundlagen und Vorschriften</li>
            <li>Aufbau und Funktion von Flurförderzeugen</li>
            <li>Praktische Fahrübungen</li>
            <li>Lastaufnahme und Transport</li>
            <li>Prüfung mit Zertifikat</li>
          </ul>
        </div>
      </ContentWithImage>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Unsere Fahrausbildungen im Überblick"
            subtitle="Alle verfügbaren Ausbildungen auf einen Blick."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {fahrausbildungen.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-6"
              >
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 mb-5 flex flex-col items-center justify-center gap-3 text-gray-400 border-gray-300">
                  {f.imageSrc ? (
                    <Image
                      src={f.imageSrc}
                      alt={f.imageAlt ?? ""}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gray-400 border-2 border-dashed border-gray-300 rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                        />
                      </svg>
                      <span className="text-sm font-medium tracking-wide">Bild folgt</span>
                    </div>
                  )}
                </div>
                <h3 className="text-bk-dark font-bold text-xl mb-3 font-bk-heading">{f.title}</h3>
                <p className="text-bk-gray text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AkademieSubpageNavigation />

      <CTABlock title="Fahrausbildung anfragen" buttonText="Jetzt anfragen" buttonHref="/kontakt" />
    </>
  );
}
