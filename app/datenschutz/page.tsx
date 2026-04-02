import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("Datenschutz");

const p = "text-bk-gray leading-relaxed";
const h2 = "text-xl font-bold text-bk-dark mb-3 font-bk-heading scroll-mt-20";
const h3 = "font-semibold text-bk-text mb-2 mt-4";
const ul = "list-disc list-outside ml-5 space-y-1 text-bk-gray";
const strong = "font-semibold text-bk-text";
const a = "text-bk-light hover:underline break-all";

export default function Datenschutz() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-bk-dark font-bk-heading mb-8">Datenschutzerklärung</h1>

      <div className="space-y-10 text-bk-gray leading-relaxed">
        {/* Präambel */}
        <section id="m716">
          <h2 className={h2}>Präambel</h2>
          <p className={p}>
            Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten
            Ihrer personenbezogenen Daten (nachfolgend auch kurz als &quot;Daten&quot; bezeichnet)
            wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt
            für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen
            der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in
            mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.&nbsp;B. unserer
            Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als
            &quot;Onlineangebot&quot;).
          </p>
          <p className={`${p} mt-3`}>Die verwendeten Begriffe sind nicht geschlechtsspezifisch.</p>
          <p className={`${p} mt-3`}>Stand: 2. April 2026</p>
        </section>

        {/* Inhaltsübersicht */}
        <section>
          <h2 className={h2}>Inhaltsübersicht</h2>
          <ul className={ul}>
            {[
              ["#m716", "Präambel"],
              ["#m3", "Verantwortlicher"],
              ["#mOverview", "Übersicht der Verarbeitungen"],
              ["#m2427", "Maßgebliche Rechtsgrundlagen"],
              ["#m27", "Sicherheitsmaßnahmen"],
              ["#m25", "Übermittlung von personenbezogenen Daten"],
              ["#m24", "Internationale Datentransfers"],
              ["#m12", "Allgemeine Informationen zur Datenspeicherung und Löschung"],
              ["#m10", "Rechte der betroffenen Personen"],
              ["#m317", "Geschäftliche Leistungen"],
              ["#m225", "Bereitstellung des Onlineangebots und Webhosting"],
              ["#m182", "Kontakt- und Anfrageverwaltung"],
              ["#m136", "Präsenzen in sozialen Netzwerken (Social Media)"],
              ["#m2324", "Datenschutzinformationen für Hinweisgeber"],
              ["#m15", "Änderung und Aktualisierung"],
              ["#m42", "Begriffsdefinitionen"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className={a}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Verantwortlicher */}
        <section id="m3">
          <h2 className={h2}>Verantwortlicher</h2>
          <p className={p}>
            BK Arbeitsschutz
            <br />
            Am Bichl 6a
            <br />
            82335 Berg
          </p>
          <p className={`${p} mt-3`}>Vertretungsberechtigte Personen: Kilian Berger</p>
          <p className={`${p} mt-3`}>E-Mail-Adresse: info@b-k-arbeitsschutz.de</p>
          <p className={`${p} mt-3`}>
            Impressum:{" "}
            <a
              href="https://b-k-arbeitsschutz.de/impressum"
              target="_blank"
              rel="noopener noreferrer"
              className={a}
            >
              https://b-k-arbeitsschutz.de/impressum
            </a>
          </p>
        </section>

        {/* Übersicht der Verarbeitungen */}
        <section id="mOverview">
          <h2 className={h2}>Übersicht der Verarbeitungen</h2>
          <p className={p}>
            Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer
            Verarbeitung zusammen und verweist auf die betroffenen Personen.
          </p>
          <h3 className={h3}>Arten der verarbeiteten Daten</h3>
          <ul className={ul}>
            {[
              "Bestandsdaten.",
              "Beschäftigtendaten.",
              "Zahlungsdaten.",
              "Kontaktdaten.",
              "Inhaltsdaten.",
              "Vertragsdaten.",
              "Nutzungsdaten.",
              "Meta-, Kommunikations- und Verfahrensdaten.",
              "Protokolldaten.",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className={h3}>Kategorien betroffener Personen</h3>
          <ul className={ul}>
            {[
              "Leistungsempfänger und Auftraggeber.",
              "Beschäftigte.",
              "Interessenten.",
              "Kommunikationspartner.",
              "Nutzer.",
              "Geschäfts- und Vertragspartner.",
              "Bildungs- und Kursteilnehmer.",
              "Dritte Personen.",
              "Hinweisgeber.",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className={h3}>Zwecke der Verarbeitung</h3>
          <ul className={ul}>
            {[
              "Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten.",
              "Kommunikation.",
              "Sicherheitsmaßnahmen.",
              "Büro- und Organisationsverfahren.",
              "Organisations- und Verwaltungsverfahren.",
              "Feedback.",
              "Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.",
              "Informationstechnische Infrastruktur.",
              "Hinweisgeberschutz.",
              "Öffentlichkeitsarbeit.",
              "Geschäftsprozesse und betriebswirtschaftliche Verfahren.",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Maßgebliche Rechtsgrundlagen */}
        <section id="m2427">
          <h2 className={h2}>Maßgebliche Rechtsgrundlagen</h2>
          <p className={p}>
            <strong className={strong}>Maßgebliche Rechtsgrundlagen nach der DSGVO: </strong>
            Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis
            wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den
            Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder
            Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen
            maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
          </p>
          <ul className={`${ul} mt-3`}>
            <li>
              <strong className={strong}>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</strong> -
              Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden
              personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke
              gegeben.
            </li>
            <li>
              <strong className={strong}>
                Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)
              </strong>{" "}
              - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die
              betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich,
              die auf Anfrage der betroffenen Person erfolgen.
            </li>
            <li>
              <strong className={strong}>
                Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)
              </strong>{" "}
              - Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der
              der Verantwortliche unterliegt.
            </li>
            <li>
              <strong className={strong}>
                Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)
              </strong>{" "}
              - die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen
              oder eines Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und
              Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten
              verlangen, nicht überwiegen.
            </li>
          </ul>
          <p className={`${p} mt-3`}>
            <strong className={strong}>Nationale Datenschutzregelungen in Deutschland: </strong>
            Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum
            Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor
            Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz –
            BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht
            auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien
            personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie
            automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner
            können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.
          </p>
          <p className={`${p} mt-3`}>
            <strong className={strong}>Hinweis auf Geltung DSGVO und Schweizer DSG: </strong>
            Diese Datenschutzhinweise dienen sowohl der Informationserteilung nach dem Schweizer DSG
            als auch nach der Datenschutzgrundverordnung (DSGVO). Aus diesem Grund bitten wir Sie zu
            beachten, dass aufgrund der breiteren räumlichen Anwendung und Verständlichkeit die
            Begriffe der DSGVO verwendet werden. Insbesondere statt der im Schweizer DSG verwendeten
            Begriffe &bdquo;Bearbeitung&ldquo; von &bdquo;Personendaten&ldquo;, &quot;überwiegendes
            Interesse&quot; und &quot;besonders schützenswerte Personendaten&quot; werden die in der
            DSGVO verwendeten Begriffe &bdquo;Verarbeitung&ldquo; von &bdquo;personenbezogenen
            Daten&ldquo; sowie &quot;berechtigtes Interesse&quot; und &quot;besondere Kategorien von
            Daten&quot; verwendet. Die gesetzliche Bedeutung der Begriffe wird jedoch im Rahmen der
            Geltung des Schweizer DSG weiterhin nach dem Schweizer DSG bestimmt.
          </p>
        </section>

        {/* Sicherheitsmaßnahmen */}
        <section id="m27">
          <h2 className={h2}>Sicherheitsmaßnahmen</h2>
          <p className={p}>
            Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der
            Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der
            Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und
            des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete
            technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau
            zu gewährleisten.
          </p>
          <p className={`${p} mt-3`}>
            Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und
            Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den
            Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung
            der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die
            eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die
            Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz
            personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software
            sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und
            durch datenschutzfreundliche Voreinstellungen.
          </p>
          <p className={`${p} mt-3`}>
            Kürzung der IP-Adresse: Sofern IP-Adressen von uns oder von den eingesetzten
            Dienstleistern und Technologien verarbeitet werden und die Verarbeitung einer
            vollständigen IP-Adresse nicht erforderlich ist, wird die IP-Adresse gekürzt (auch als
            &quot;IP-Masking&quot; bezeichnet). Hierbei werden die letzten beiden Ziffern, bzw. der
            letzte Teil der IP-Adresse nach einem Punkt entfernt, bzw. durch Platzhalter ersetzt.
            Mit der Kürzung der IP-Adresse soll die Identifizierung einer Person anhand ihrer
            IP-Adresse verhindert oder wesentlich erschwert werden.
          </p>
          <p className={`${p} mt-3`}>
            Sicherung von Online-Verbindungen durch TLS-/SSL-Verschlüsselungstechnologie (HTTPS): Um
            die Daten der Nutzer, die über unsere Online-Dienste übertragen werden, vor unerlaubten
            Zugriffen zu schützen, setzen wir auf die TLS-/SSL-Verschlüsselungstechnologie. Secure
            Sockets Layer (SSL) und Transport Layer Security (TLS) sind die Eckpfeiler der sicheren
            Datenübertragung im Internet. Diese Technologien verschlüsseln die Informationen, die
            zwischen der Website oder App und dem Browser des Nutzers (oder zwischen zwei Servern)
            übertragen werden, wodurch die Daten vor unbefugtem Zugriff geschützt sind. TLS, als die
            weiterentwickelte und sicherere Version von SSL, gewährleistet, dass alle
            Datenübertragungen den höchsten Sicherheitsstandards entsprechen. Wenn eine Website
            durch ein SSL-/TLS-Zertifikat gesichert ist, wird dies durch die Anzeige von HTTPS in
            der URL signalisiert. Dies dient als ein Indikator für die Nutzer, dass ihre Daten
            sicher und verschlüsselt übertragen werden.
          </p>
        </section>

        {/* Übermittlung */}
        <section id="m25">
          <h2 className={h2}>Übermittlung von personenbezogenen Daten</h2>
          <p className={p}>
            Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass diese an
            andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder
            Personen übermittelt beziehungsweise ihnen gegenüber offengelegt werden. Zu den
            Empfängern dieser Daten können z.&nbsp;B. mit IT-Aufgaben beauftragte Dienstleister
            gehören oder Anbieter von Diensten und Inhalten, die in eine Website eingebunden sind.
            In solchen Fällen beachten wir die gesetzlichen Vorgaben und schließen insbesondere
            entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den
            Empfängern Ihrer Daten ab.
          </p>
          <p className={`${p} mt-3`}>
            Datenübermittlung innerhalb der Organisation: Wir können personenbezogene Daten an
            andere Abteilungen oder Einheiten innerhalb unserer Organisation übermitteln oder ihnen
            den Zugriff darauf gewähren. Sofern die Datenweitergabe zu administrativen Zwecken
            erfolgt, beruht sie auf unseren berechtigten unternehmerischen und
            betriebswirtschaftlichen Interessen oder erfolgt, sofern sie zur Erfüllung unserer
            vertragsbezogenen Verpflichtungen erforderlich ist beziehungsweise wenn eine
            Einwilligung der Betroffenen oder eine gesetzliche Erlaubnis vorliegt.
          </p>
        </section>

        {/* Internationale Datentransfers */}
        <section id="m24">
          <h2 className={h2}>Internationale Datentransfers</h2>
          <p className={p}>
            Datenverarbeitung in Drittländern: Sofern wir Daten in ein Drittland (d. h. außerhalb
            der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) übermitteln
            oder dies im Rahmen der Nutzung von Diensten Dritter oder der Offenlegung bzw.
            Übermittlung von Daten an andere Personen, Stellen oder Unternehmen geschieht, erfolgt
            dies stets im Einklang mit den gesetzlichen Vorgaben.
          </p>
          <p className={`${p} mt-3`}>
            Für Datenübermittlungen in die USA stützen wir uns vorrangig auf das Data Privacy
            Framework (DPF), welches durch einen Angemessenheitsbeschluss der EU-Kommission vom
            10.07.2023 als sicherer Rechtsrahmen anerkannt wurde. Zusätzlich haben wir mit den
            jeweiligen Anbietern Standardvertragsklauseln abgeschlossen, die den Vorgaben der
            EU-Kommission entsprechen und vertragliche Verpflichtungen zum Schutz Ihrer Daten
            festlegen.
          </p>
          <p className={`${p} mt-3`}>
            Diese zweifache Absicherung gewährleistet einen umfassenden Schutz Ihrer Daten: Das DPF
            bildet die primäre Schutzebene, während die Standardvertragsklauseln als zusätzliche
            Sicherheit dienen. Sollten sich Änderungen im Rahmen des DPF ergeben, greifen die
            Standardvertragsklauseln als zuverlässige Rückfalloption ein. So stellen wir sicher,
            dass Ihre Daten auch bei etwaigen politischen oder rechtlichen Veränderungen stets
            angemessen geschützt bleiben.
          </p>
          <p className={`${p} mt-3`}>
            Bei den einzelnen Diensteanbietern informieren wir Sie darüber, ob sie nach dem DPF
            zertifiziert sind und ob Standardvertragsklauseln vorliegen. Weitere Informationen zum
            DPF und eine Liste der zertifizierten Unternehmen finden Sie auf der Website des
            US-Handelsministeriums unter{" "}
            <a
              href="https://www.dataprivacyframework.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className={a}
            >
              https://www.dataprivacyframework.gov/
            </a>{" "}
            (in englischer Sprache).
          </p>
          <p className={`${p} mt-3`}>
            Für Datenübermittlungen in andere Drittländer gelten entsprechende Sicherheitsmaßnahmen,
            insbesondere Standardvertragsklauseln, ausdrückliche Einwilligungen oder gesetzlich
            erforderliche Übermittlungen. Informationen zu Drittlandtransfers und geltenden
            Angemessenheitsbeschlüssen können Sie dem Informationsangebot der EU-Kommission
            entnehmen:{" "}
            <a
              href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=de"
              target="_blank"
              rel="noopener noreferrer"
              className={a}
            >
              https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en
            </a>
            .
          </p>
        </section>

        {/* Datenspeicherung */}
        <section id="m12">
          <h2 className={h2}>Allgemeine Informationen zur Datenspeicherung und Löschung</h2>
          <p className={p}>
            Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen
            Bestimmungen, sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine
            weiteren rechtlichen Grundlagen für die Verarbeitung bestehen. Dies betrifft Fälle, in
            denen der ursprüngliche Verarbeitungszweck entfällt oder die Daten nicht mehr benötigt
            werden. Ausnahmen von dieser Regelung bestehen, wenn gesetzliche Pflichten oder
            besondere Interessen eine längere Aufbewahrung oder Archivierung der Daten erfordern.
          </p>
          <p className={`${p} mt-3`}>
            Insbesondere müssen Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt
            werden müssen oder deren Speicherung notwendig ist zur Rechtsverfolgung oder zum Schutz
            der Rechte anderer natürlicher oder juristischer Personen, entsprechend archiviert
            werden.
          </p>
          <p className={`${p} mt-3`}>
            Unsere Datenschutzhinweise enthalten zusätzliche Informationen zur Aufbewahrung und
            Löschung von Daten, die speziell für bestimmte Verarbeitungsprozesse gelten.
          </p>
          <p className={`${p} mt-3`}>
            Bei mehreren Angaben zur Aufbewahrungsdauer oder Löschungsfristen eines Datums, ist
            stets die längste Frist maßgeblich. Daten, die nicht mehr für den ursprünglich
            vorgesehenen Zweck, sondern aufgrund gesetzlicher Vorgaben oder anderer Gründe
            aufbewahrt werden, verarbeiten wir ausschließlich zu den Gründen, die ihre Aufbewahrung
            rechtfertigen.
          </p>
          <p className={`${p} mt-3`}>
            Aufbewahrung und Löschung von Daten: Die folgenden allgemeinen Fristen gelten für die
            Aufbewahrung und Archivierung nach deutschem Recht:
          </p>
          <ul className={`${ul} mt-3`}>
            <li>
              10 Jahre – Aufbewahrungsfrist für Bücher und Aufzeichnungen, Jahresabschlüsse,
              Inventare, Lageberichte, Eröffnungsbilanz sowie die zu ihrem Verständnis
              erforderlichen Arbeitsanweisungen und sonstigen Organisationsunterlagen (§ 147 Abs. 1
              Nr. 1 i.V.m. Abs. 3 AO, § 14b Abs. 1 UStG, § 257 Abs. 1 Nr. 1 i.V.m. Abs. 4 HGB).
            </li>
            <li>
              8 Jahre – Buchungsbelege, wie z.&nbsp;B. Rechnungen und Kostenbelege (§ 147 Abs. 1 Nr.
              4 und 4a i.V.m. Abs. 3 Satz 1 AO sowie § 257 Abs. 1 Nr. 4 i.V.m. Abs. 4 HGB).
            </li>
            <li>
              6 Jahre – Übrige Geschäftsunterlagen: empfangene Handels- oder Geschäftsbriefe,
              Wiedergaben der abgesandten Handels- oder Geschäftsbriefe, sonstige Unterlagen, soweit
              sie für die Besteuerung von Bedeutung sind, z.&nbsp;B. Stundenlohnzettel,
              Betriebsabrechnungsbögen, Kalkulationsunterlagen, Preisauszeichnungen, aber auch
              Lohnabrechnungsunterlagen, soweit sie nicht bereits Buchungsbelege sind und
              Kassenstreifen (§ 147 Abs. 1 Nr. 2, 3, 5 i.V.m. Abs. 3 AO, § 257 Abs. 1 Nr. 2 u. 3
              i.V.m. Abs. 4 HGB).
            </li>
            <li>
              3 Jahre – Daten, die erforderlich sind, um potenzielle Gewährleistungs- und
              Schadensersatzansprüche oder ähnliche vertragliche Ansprüche und Rechte zu
              berücksichtigen sowie damit verbundene Anfragen zu bearbeiten, basierend auf früheren
              Geschäftserfahrungen und üblichen Branchenpraktiken, werden für die Dauer der
              regulären gesetzlichen Verjährungsfrist von drei Jahren gespeichert (§§ 195, 199 BGB).
            </li>
          </ul>
          <p className={`${p} mt-3`}>
            Fristbeginn mit Ablauf des Jahres: Beginnt eine Frist nicht ausdrücklich zu einem
            bestimmten Datum und beträgt sie mindestens ein Jahr, so startet sie automatisch am Ende
            des Kalenderjahres, in dem das fristauslösende Ereignis eingetreten ist. Im Fall
            laufender Vertragsverhältnisse, in deren Rahmen Daten gespeichert werden, ist das
            fristauslösende Ereignis der Zeitpunkt des Wirksamwerdens der Kündigung oder sonstige
            Beendigung des Rechtsverhältnisses.
          </p>
        </section>

        {/* Rechte */}
        <section id="m10">
          <h2 className={h2}>Rechte der betroffenen Personen</h2>
          <p className={p}>
            Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als Betroffene nach der
            DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
          </p>
          <ul className={`${ul} mt-3`}>
            <li>
              <strong className={strong}>
                Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen
                Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden
                personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt,
                Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes
                Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um
                Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die
                Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger
                Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher
                Direktwerbung in Verbindung steht.
              </strong>
            </li>
            <li>
              <strong className={strong}>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das
              Recht, erteilte Einwilligungen jederzeit zu widerrufen.
            </li>
            <li>
              <strong className={strong}>Auskunftsrecht:</strong> Sie haben das Recht, eine
              Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf
              Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten
              entsprechend den gesetzlichen Vorgaben.
            </li>
            <li>
              <strong className={strong}>Recht auf Berichtigung:</strong> Sie haben entsprechend den
              gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder
              die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
            </li>
            <li>
              <strong className={strong}>
                Recht auf Löschung und Einschränkung der Verarbeitung:
              </strong>{" "}
              Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie
              betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der
              gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.
            </li>
            <li>
              <strong className={strong}>Recht auf Datenübertragbarkeit:</strong> Sie haben das
              Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der
              gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format
              zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.
            </li>
            <li>
              <strong className={strong}>Beschwerde bei Aufsichtsbehörde:</strong> Sie haben
              unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen
              Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem
              Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts
              des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie
              betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.
            </li>
          </ul>
        </section>

        {/* Geschäftliche Leistungen */}
        <section id="m317">
          <h2 className={h2}>Geschäftliche Leistungen</h2>
          <p className={p}>
            Wir verarbeiten personenbezogene Daten unserer Vertrags- und Geschäftspartner, etwa
            Kunden, Auftraggeber, Interessenten, Lieferanten und sonstige Kooperationspartner
            (zusammenfassend &bdquo;Vertragspartner&ldquo;), zur Anbahnung, Durchführung und
            Abwicklung von Vertragsverhältnissen sowie vergleichbaren Rechtsverhältnissen. Dies
            umfasst auch vorvertragliche Maßnahmen, die auf Anfrage erfolgen, sowie die
            Kommunikation im Zusammenhang mit dem jeweiligen Vertragsverhältnis.
          </p>
          <p className={`${p} mt-3`}>
            Die Verarbeitung dient insbesondere der Erfüllung unserer vertraglichen Haupt- und
            Nebenpflichten. Hierzu zählen die Erbringung der vereinbarten Leistungen, etwaige
            Aktualisierungs- und Informationspflichten, die Bearbeitung von Gewährleistungs- und
            sonstigen Leistungsstörungen, die Abwicklung von Widerrufen, Kündigungen von
            Dauerschuldverhältnissen, Rückabwicklungen, Erstattungen sowie die Bearbeitung sonstiger
            vertragsbezogener Erklärungen und Anfragen.
          </p>
          <p className={`${p} mt-3`}>
            Verarbeitet werden insbesondere Stammdaten wie Name, Anschrift und ggf. Firma,
            Kontaktdaten wie E-Mail-Adresse und Telefonnummer, Vertrags- und Leistungsdaten,
            Zahlungs- und Abrechnungsdaten sowie Kommunikationsinhalte und -historien.
          </p>
          <p className={`${p} mt-3`}>
            Die Löschung der Daten erfolgt, sobald sie für die vorgenannten Zwecke nicht mehr
            erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO sowie Art. 6 Abs. 1 lit.
            c DSGVO. Soweit die Verarbeitung auf berechtigten Interessen beruht, erfolgt sie auf
            Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          </p>
          <ul className={`${ul} mt-3`}>
            <li>
              <strong className={strong}>Verarbeitete Datenarten:</strong> Bestandsdaten;
              Zahlungsdaten; Kontaktdaten; Vertragsdaten.
            </li>
            <li>
              <strong className={strong}>Betroffene Personen:</strong> Leistungsempfänger und
              Auftraggeber; Interessenten; Geschäfts- und Vertragspartner; Bildungs- und
              Kursteilnehmer.
            </li>
            <li>
              <strong className={strong}>Zwecke der Verarbeitung:</strong> Erbringung vertraglicher
              Leistungen; Kommunikation; Büro- und Organisationsverfahren; Geschäftsprozesse und
              betriebswirtschaftliche Verfahren.
            </li>
            <li>
              <strong className={strong}>Rechtsgrundlagen:</strong> Vertragserfüllung und
              vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO); Rechtliche Verpflichtung
              (Art. 6 Abs. 1 S. 1 lit. c) DSGVO); Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
              DSGVO).
            </li>
          </ul>
          <p className={`${p} mt-4`}>
            <strong className={strong}>
              Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
            </strong>
          </p>
          <ul className={`${ul} mt-2`}>
            <li>
              <strong className={strong}>Bildungs- und Schulungsleistungen: </strong>Wir verarbeiten
              die Daten der Teilnehmer unserer Bildungs- und Schulungsangebote, um ihnen gegenüber
              unsere Schulungsleistungen erbringen zu können. Rechtsgrundlagen: Vertragserfüllung
              und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).
            </li>
          </ul>
        </section>

        {/* Webhosting */}
        <section id="m225">
          <h2 className={h2}>Bereitstellung des Onlineangebots und Webhosting</h2>
          <p className={p}>
            Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung
            stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die
            notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder
            das Endgerät der Nutzer zu übermitteln.
          </p>
          <ul className={`${ul} mt-3`}>
            <li>
              <strong className={strong}>Verarbeitete Datenarten:</strong> Nutzungsdaten; Meta-,
              Kommunikations- und Verfahrensdaten; Protokolldaten.
            </li>
            <li>
              <strong className={strong}>Betroffene Personen:</strong> Nutzer.
            </li>
            <li>
              <strong className={strong}>Zwecke der Verarbeitung:</strong> Bereitstellung unseres
              Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische Infrastruktur;
              Sicherheitsmaßnahmen.
            </li>
            <li>
              <strong className={strong}>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
              Abs. 1 S. 1 lit. f) DSGVO).
            </li>
          </ul>
          <p className={`${p} mt-4`}>
            <strong className={strong}>
              Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
            </strong>
          </p>
          <ul className={`${ul} mt-2`}>
            <li>
              <strong className={strong}>
                Bereitstellung Onlineangebot auf gemietetem Speicherplatz:{" "}
              </strong>
              Für die Bereitstellung unseres Onlineangebotes nutzen wir Speicherplatz,
              Rechenkapazität und Software, die wir von einem entsprechenden Serveranbieter mieten
              oder anderweitig beziehen. Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S.
              1 lit. f) DSGVO).
            </li>
            <li>
              <strong className={strong}>Erhebung von Zugriffsdaten und Logfiles: </strong>
              Der Zugriff auf unser Onlineangebot wird in Form von sogenannten
              &quot;Server-Logfiles&quot; protokolliert. Zu den Serverlogfiles können die Adresse
              und der Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs,
              übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version,
              das Betriebssystem des Nutzers, Referrer URL und IP-Adressen gehören.
              Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und danach
              gelöscht oder anonymisiert. Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1 S.
              1 lit. f) DSGVO).
            </li>
            <li>
              <strong className={strong}>Content-Delivery-Network: </strong>
              Wir setzen ein &quot;Content-Delivery-Network&quot; (CDN) ein. Ein CDN ist ein Dienst,
              mit dessen Hilfe Inhalte eines Onlineangebotes, insbesondere große Mediendateien, mit
              Hilfe regional verteilter und über das Internet verbundener Server schneller und
              sicherer ausgeliefert werden können. Rechtsgrundlagen: Berechtigte Interessen (Art. 6
              Abs. 1 S. 1 lit. f) DSGVO).
            </li>
          </ul>
        </section>

        {/* Kontaktverwaltung */}
        <section id="m182">
          <h2 className={h2}>Kontakt- und Anfrageverwaltung</h2>
          <p className={p}>
            Bei der Kontaktaufnahme mit uns (z.&nbsp;B. per Post, Kontaktformular, E-Mail, Telefon
            oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen
            werden die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung
            der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
          </p>
          <ul className={`${ul} mt-3`}>
            <li>
              <strong className={strong}>Verarbeitete Datenarten:</strong> Kontaktdaten;
              Inhaltsdaten; Meta-, Kommunikations- und Verfahrensdaten.
            </li>
            <li>
              <strong className={strong}>Betroffene Personen:</strong> Kommunikationspartner.
            </li>
            <li>
              <strong className={strong}>Zwecke der Verarbeitung:</strong> Kommunikation;
              Organisations- und Verwaltungsverfahren; Feedback; Bereitstellung unseres
              Onlineangebotes und Nutzerfreundlichkeit.
            </li>
            <li>
              <strong className={strong}>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
              Abs. 1 S. 1 lit. f) DSGVO); Vertragserfüllung und vorvertragliche Anfragen (Art. 6
              Abs. 1 S. 1 lit. b) DSGVO).
            </li>
          </ul>
          <p className={`${p} mt-4`}>
            <strong className={strong}>
              Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
            </strong>
          </p>
          <ul className={`${ul} mt-2`}>
            <li>
              <strong className={strong}>Kontaktformular: </strong>Bei Kontaktaufnahme über unser
              Kontaktformular, per E-Mail oder anderen Kommunikationswegen, verarbeiten wir die uns
              übermittelten personenbezogenen Daten zur Beantwortung und Bearbeitung des jeweiligen
              Anliegens. Dies umfasst in der Regel Angaben wie Name, Kontaktinformationen und
              gegebenenfalls weitere Informationen, die uns mitgeteilt werden und zur angemessenen
              Bearbeitung erforderlich sind. Wir nutzen diese Daten ausschließlich für den
              angegebenen Zweck der Kontaktaufnahme und Kommunikation. Rechtsgrundlagen:
              Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO);
              Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
            </li>
          </ul>
        </section>

        {/* Social Media */}
        <section id="m136">
          <h2 className={h2}>Präsenzen in sozialen Netzwerken (Social Media)</h2>
          <p className={p}>
            Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem
            Rahmen Nutzerdaten, um mit den dort aktiven Nutzern zu kommunizieren oder Informationen
            über uns anzubieten.
          </p>
          <p className={`${p} mt-3`}>
            Wir weisen darauf hin, dass dabei Nutzerdaten außerhalb des Raumes der Europäischen
            Union verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben,
            weil so zum Beispiel die Durchsetzung der Nutzerrechte erschwert werden könnte.
          </p>
          <p className={`${p} mt-3`}>
            Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall für
            Marktforschungs- und Werbezwecke verarbeitet. So können beispielsweise anhand des
            Nutzungsverhaltens und sich daraus ergebender Interessen der Nutzer Nutzungsprofile
            erstellt werden. Letztere finden möglicherweise wiederum Verwendung, um etwa
            Werbeanzeigen innerhalb und außerhalb der Netzwerke zu schalten, die mutmaßlich den
            Interessen der Nutzer entsprechen. Daher werden im Regelfall Cookies auf den Rechnern
            der Nutzer gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer
            gespeichert werden.
          </p>
          <p className={`${p} mt-3`}>
            Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen und der
            Widerspruchsmöglichkeiten (Opt-out) verweisen wir auf die Datenschutzerklärungen und
            Angaben der Betreiber der jeweiligen Netzwerke.
          </p>
          <p className={`${p} mt-3`}>
            Auch im Fall von Auskunftsanfragen und der Geltendmachung von Betroffenenrechten weisen
            wir darauf hin, dass diese am effektivsten bei den Anbietern geltend gemacht werden
            können. Nur Letztere haben jeweils Zugriff auf die Nutzerdaten und können direkt
            entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe
            benötigen, dann können Sie sich an uns wenden.
          </p>
          <ul className={`${ul} mt-3`}>
            <li>
              <strong className={strong}>Verarbeitete Datenarten:</strong> Kontaktdaten;
              Inhaltsdaten; Nutzungsdaten.
            </li>
            <li>
              <strong className={strong}>Betroffene Personen:</strong> Nutzer.
            </li>
            <li>
              <strong className={strong}>Zwecke der Verarbeitung:</strong> Kommunikation; Feedback;
              Öffentlichkeitsarbeit.
            </li>
            <li>
              <strong className={strong}>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
              Abs. 1 S. 1 lit. f) DSGVO).
            </li>
          </ul>
          <p className={`${p} mt-4`}>
            <strong className={strong}>
              Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:
            </strong>
          </p>
          <ul className={`${ul} mt-2`}>
            <li>
              <strong className={strong}>Instagram: </strong>Soziales Netzwerk, ermöglicht das
              Teilen von Fotos und Videos, das Kommentieren und Favorisieren von Beiträgen,
              Nachrichtenversand, Abonnieren von Profilen und Seiten.{" "}
              <strong className={strong}>Dienstanbieter:</strong> Meta Platforms Ireland Limited,
              Merrion Road, Dublin 4, D04 X2K5, Irland.{" "}
              <strong className={strong}>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6
              Abs. 1 S. 1 lit. f) DSGVO). <strong className={strong}>Website:</strong>{" "}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={a}
              >
                https://www.instagram.com
              </a>
              . <strong className={strong}>Datenschutzerklärung:</strong>{" "}
              <a
                href="https://privacycenter.instagram.com/policy/"
                target="_blank"
                rel="noopener noreferrer"
                className={a}
              >
                https://privacycenter.instagram.com/policy/
              </a>
              . <strong className={strong}>Grundlage Drittlandtransfers:</strong> Data Privacy
              Framework (DPF).
            </li>
          </ul>
        </section>

        {/* Hinweisgeber */}
        <section id="m2324">
          <h2 className={h2}>Datenschutzinformationen für Hinweisgeber</h2>
          <p className={p}>
            In diesem Abschnitt finden Sie Informationen darüber, wie wir Daten von Personen, die
            Hinweise geben (Hinweisgeber), sowie von betroffenen und beteiligten Parteien im Rahmen
            unseres Hinweisgeberverfahrens handhaben.
          </p>
          <p className={`${p} mt-3`}>
            Rechtsgrundlagen (Deutschland): Soweit wir Daten zur Erfüllung unserer gesetzlichen
            Pflichten entsprechend dem Hinweisgeberschutzgesetz (HinSchG) verarbeiten, ist die
            rechtliche Basis der Verarbeitung Artikel 6 Abs. 1 S. 1 lit. c) DSGVO und im Fall
            besonderer Kategorien personenbezogener Daten Art. 9 Abs. 2 lit. g) DSGVO, § 22 BDSG,
            jeweils in Verbindung mit § 10 HinSchG.
          </p>
          <p className={`${p} mt-3`}>
            Verarbeitete Datenarten: Im Rahmen der Entgegennahme und Bearbeitung von Hinweisen sowie
            im anschließenden Hinweisgeber-Verfahren können wir verschiedene Daten erheben. Diese
            umfassen insbesondere die von einem Hinweisgeber bereitgestellten Daten, wie zum
            Beispiel: Name, Kontaktdaten und Aufenthaltsort der Person, die den Hinweis gibt, Namen
            und Daten zu möglichen Zeugen oder Personen, die von dem Hinweis betroffen sind, Daten
            über das mutmaßliche Fehlverhalten sowie weitere relevante Details.
          </p>
          <p className={`${p} mt-3`}>
            Nutzung unserer Onlineformulare: Bitte beachten Sie, dass die Möglichkeit besteht,
            Hinweise anonym abzugeben. Um die Sicherheit Ihrer Daten bei der Nutzung unserer
            Online-Formulare zu gewährleisten, empfehlen wir, diese im sogenannten
            &quot;Inkognito-Modus&quot; Ihres Browsers aufzurufen.
          </p>
          <p className={`${p} mt-3`}>
            Angabe von Namen: Sie haben die Möglichkeit, Hinweise anonym abzugeben. Insofern es
            nicht durch nationale Gesetzgebungen untersagt ist, empfehlen wir jedoch die Angabe
            Ihres Namens und Ihrer Kontaktdaten. Dies ermöglicht uns, die Meldung effektiver
            nachzugehen und gegebenenfalls direkt mit Ihnen in Kontakt zu treten.
          </p>
          <p className={`${p} mt-3`}>
            Bereitstellung von Daten an Dritte: Daten, die im Zusammenhang mit den abgegebenen
            Hinweisen stehen, werden von uns nur unter bestimmten Umständen an Dritte weitergegeben.
            Dies geschieht entweder wenn Sie uns Ihre ausdrückliche Einwilligung dazu erteilt haben,
            oder wenn eine gesetzliche Verpflichtung zur Weitergabe der Daten besteht.
          </p>
          <p className={`${p} mt-3`}>
            Datenaufbewahrung und -löschung: Personenbezogene Daten werden nur so lange verarbeitet,
            wie es zur Erfüllung der oben beschriebenen Verarbeitungszwecke erforderlich ist. Sind
            diese Daten für die genannten Zwecke nicht mehr notwendig, erfolgt eine Löschung.
          </p>
          <p className={`${p} mt-3`}>
            Technische und organisatorische Maßnahmen: Wir haben die erforderlichen vertraglichen,
            technischen und organisatorischen Maßnahmen implementiert, um die Sicherheit aller von
            uns verarbeiteten Daten zu gewährleisten.
          </p>
          <ul className={`${ul} mt-3`}>
            <li>
              <strong className={strong}>Zwecke der Verarbeitung:</strong> Hinweisgeberschutz.
            </li>
            <li>
              <strong className={strong}>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1
              lit. a) DSGVO); Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO);
              Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).
            </li>
          </ul>
        </section>

        {/* Änderung */}
        <section id="m15">
          <h2 className={h2}>Änderung und Aktualisierung</h2>
          <p className={p}>
            Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu
            informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns
            durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald
            durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.&nbsp;B. Einwilligung) oder
            eine sonstige individuelle Benachrichtigung erforderlich wird.
          </p>
          <p className={`${p} mt-3`}>
            Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von
            Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich
            über die Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
          </p>
        </section>

        {/* Begriffsdefinitionen */}
        <section id="m42">
          <h2 className={h2}>Begriffsdefinitionen</h2>
          <p className={p}>
            In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung
            verwendeten Begrifflichkeiten. Soweit die Begrifflichkeiten gesetzlich definiert sind,
            gelten deren gesetzliche Definitionen. Die nachfolgenden Erläuterungen sollen dagegen
            vor allem dem Verständnis dienen.
          </p>
          <ul className={`${ul} mt-3 space-y-4`}>
            {[
              [
                "Beschäftigte",
                "Als Beschäftigte werden Personen bezeichnet, die in einem Beschäftigungsverhältnis stehen, sei es als Mitarbeiter, Angestellte oder in ähnlichen Positionen. Ein Beschäftigungsverhältnis ist eine rechtliche Beziehung zwischen einem Arbeitgeber und einem Arbeitnehmer, die durch einen Arbeitsvertrag oder eine Vereinbarung festgelegt wird.",
              ],
              [
                "Bestandsdaten",
                "Bestandsdaten umfassen wesentliche Informationen, die für die Identifikation und Verwaltung von Vertragspartnern, Benutzerkonten, Profilen und ähnlichen Zuordnungen notwendig sind. Diese Daten können u.a. persönliche und demografische Angaben wie Namen, Kontaktinformationen, Geburtsdaten und spezifische Identifikatoren beinhalten.",
              ],
              [
                "Inhaltsdaten",
                "Inhaltsdaten umfassen Informationen, die im Zuge der Erstellung, Bearbeitung und Veröffentlichung von Inhalten aller Art generiert werden. Diese Kategorie von Daten kann Texte, Bilder, Videos, Audiodateien und andere multimediale Inhalte einschließen.",
              ],
              [
                "Kontaktdaten",
                "Kontaktdaten sind essentielle Informationen, die die Kommunikation mit Personen oder Organisationen ermöglichen. Sie umfassen u.a. Telefonnummern, postalische Adressen und E-Mail-Adressen, sowie Kommunikationsmittel wie soziale Medien-Handles und Instant-Messaging-Identifikatoren.",
              ],
              [
                "Meta-, Kommunikations- und Verfahrensdaten",
                "Meta-, Kommunikations- und Verfahrensdaten sind Kategorien, die Informationen über die Art und Weise enthalten, wie Daten verarbeitet, übermittelt und verwaltet werden. Meta-Daten beschreiben den Kontext, die Herkunft und die Struktur anderer Daten. Kommunikationsdaten erfassen den Austausch von Informationen zwischen Nutzern. Verfahrensdaten beschreiben die Prozesse und Abläufe innerhalb von Systemen oder Organisationen.",
              ],
              [
                "Nutzungsdaten",
                "Nutzungsdaten beziehen sich auf Informationen, die erfassen, wie Nutzer mit digitalen Produkten, Dienstleistungen oder Plattformen interagieren. Diese Daten umfassen eine breite Palette von Informationen, die aufzeigen, wie Nutzer Anwendungen nutzen, welche Funktionen sie bevorzugen, wie lange sie auf bestimmten Seiten verweilen und über welche Pfade sie durch eine Anwendung navigieren.",
              ],
              [
                "Personenbezogene Daten",
                '"Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten oder zu einer Online-Kennung identifiziert werden kann.',
              ],
              [
                "Protokolldaten",
                "Protokolldaten sind Informationen über Ereignisse oder Aktivitäten, die in einem System oder Netzwerk protokolliert wurden. Diese Daten enthalten typischerweise Informationen wie Zeitstempel, IP-Adressen, Benutzeraktionen, Fehlermeldungen und andere Details über die Nutzung oder den Betrieb eines Systems.",
              ],
              [
                "Verantwortlicher",
                'Als "Verantwortlicher" wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.',
              ],
              [
                "Verarbeitung",
                '"Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten, sei es das Erheben, das Auswerten, das Speichern, das Übermitteln oder das Löschen.',
              ],
              [
                "Vertragsdaten",
                "Vertragsdaten sind spezifische Informationen, die sich auf die Formalisierung einer Vereinbarung zwischen zwei oder mehr Parteien beziehen. Sie dokumentieren die Bedingungen, unter denen Dienstleistungen oder Produkte bereitgestellt, getauscht oder verkauft werden.",
              ],
              [
                "Zahlungsdaten",
                "Zahlungsdaten umfassen sämtliche Informationen, die zur Abwicklung von Zahlungstransaktionen zwischen Käufern und Verkäufern benötigt werden. Diese Daten beinhalten Details wie Kreditkartennummern, Bankverbindungen, Zahlungsbeträge, Transaktionsdaten und Rechnungsinformationen.",
              ],
            ].map(([term, def]) => (
              <li key={term}>
                <strong className={strong}>{term}:</strong> {def}
              </li>
            ))}
          </ul>
          <p className={`${p} mt-6 text-sm border-t border-gray-200 pt-4`}>
            Erstellt mit kostenlosem{" "}
            <a
              href="https://datenschutz-generator.de/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={a}
            >
              Datenschutz-Generator.de von Dr. Thomas Schwenke
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
