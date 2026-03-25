import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("Impressum");

export default function Impressum() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-bk-dark font-bk-heading mb-8">Impressum</h1>

      <div className="space-y-6 text-bk-gray leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-bk-dark mb-2 font-bk-heading">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            BK Arbeitsschutz
            <br />
            Am Bichl 6a
            <br />
            82335 Berg
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bk-dark mb-2 font-bk-heading">Kontakt</h2>
          <p>
            Telefon:{" "}
            <a href="tel:+498171386711" className="text-bk-blue hover:underline">
              +49 (0) 8171 38 67 11
            </a>
            <br />
            E-Mail:{" "}
            <a href="mailto:info@b-k-arbeitsschutz.de" className="text-bk-blue hover:underline">
              info@b-k-arbeitsschutz.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bk-dark mb-2 font-bk-heading">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            DE342770875
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bk-dark mb-2 font-bk-heading">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>
            Kilian Berger
            <br />
            Am Bichl 6a, 82335 Berg
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bk-dark mb-2 font-bk-heading">
            Haftungsausschluss
          </h2>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          </p>
        </section>
      </div>
    </div>
  );
}
