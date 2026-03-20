import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABlock from "@/components/ui/CTABlock";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Vision",
  "Unsere Vision: Nachhaltige Sicherheitskultur in Unternehmen etablieren."
);

export default function Vision() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">Unsere Vision</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Ihr Anliegen, Unsere Aufgabe, Ihr Erfolg - das ist mehr als ein Slogan. Es ist unser
            Versprechen.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Was uns antreibt" />
          <div className="space-y-6 text-bk-gray leading-relaxed">
            <p>
              Wir glauben, dass Arbeitsschutz kein notwendiges Übel ist, sondern ein strategischer
              Vorteil. Unternehmen, die in die Sicherheit ihrer Mitarbeiter investieren, profitieren
              von weniger Ausfällen, höherer Motivation und einem starken Arbeitgeberimage.
            </p>
            <p>
              Unsere Vision ist es, eine Welt zu gestalten, in der jeder Mensch sicher und gesund
              nach Hause geht. Dafür setzen wir uns täglich ein - mit Expertise, Leidenschaft und
              dem Blick für das Wesentliche.
            </p>
            <p>
              Wir verstehen uns als Partner auf Augenhöhe. Nicht als Kontrollinstanz, sondern als
              Enabler: Wir helfen Ihnen, Ihre gesetzlichen Pflichten zu erfüllen und gleichzeitig
              eine echte Sicherheitskultur in Ihrem Unternehmen zu verankern.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Sicherheit", text: "Rechtssichere Lösungen, die wirklich schützen." },
              {
                title: "Partnerschaft",
                text: "Langfristige Beziehungen statt einmaliger Einsätze.",
              },
              { title: "Wirkung", text: "Messbare Verbesserungen in Ihrem Betrieb." },
            ].map((v) => (
              <div key={v.title} className="bg-bk-dark rounded-xl p-6 text-white">
                <h3 className="text-bk-light font-bold text-lg mb-2 font-bk-heading">{v.title}</h3>
                <p className="text-gray-300 text-sm">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        title="Gemeinsam Sicherheit gestalten"
        buttonText="Jetzt Termin buchen"
        buttonHref="/beratungstermin"
      />
    </>
  );
}
