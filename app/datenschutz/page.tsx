import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("Datenschutz");

export default function Datenschutz() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-bk-dark font-bk-heading mb-8">Datenschutzerklärung</h1>

      <div className="space-y-8 text-bk-gray leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-bk-dark mb-3 font-bk-heading">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="font-semibold text-bk-text mb-2">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bk-dark mb-3 font-bk-heading">
            2. Verantwortlicher
          </h2>
          <p>Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
          <p className="mt-2">
            BK Arbeitsschutz - Kilian Berger
            <br />
            {/* TODO: Vollständige Adresse */}
            Musterstraße 1, 12345 Musterstadt
            <br />
            E-Mail: info@bk-arbeitsschutz.de
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bk-dark mb-3 font-bk-heading">
            3. Datenerfassung auf dieser Website
          </h2>
          <h3 className="font-semibold text-bk-text mb-2">Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
            der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
            weiter.
          </p>
          <p className="mt-3">
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche
            Maßnahmen).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bk-dark mb-3 font-bk-heading">4. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
            personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der
            Datenverarbeitung. Außerdem haben Sie das Recht auf Berichtigung, Sperrung oder Löschung
            dieser Daten.
          </p>
          <p className="mt-3">Wenden Sie sich hierfür an: info@bk-arbeitsschutz.de</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-bk-dark mb-3 font-bk-heading">
            5. Server-Log-Dateien
          </h2>
          <p>
            Der Provider dieser Website erhebt und speichert automatisch Informationen in
            Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und
            Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden
            Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
          </p>
        </section>

        <p className="text-sm text-bk-gray pt-4 border-t border-gray-200">
          {/* TODO: Datum der letzten Aktualisierung anpassen */}
          Stand: März 2026
        </p>
      </div>
    </div>
  );
}
