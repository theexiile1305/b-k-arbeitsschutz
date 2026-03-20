import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(
  "Beratungstermin",
  "Buchen Sie jetzt Ihren kostenlosen Beratungstermin mit BK Arbeitsschutz."
);

export default function Beratungstermin() {
  return (
    <>
      <div className="bg-bk-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">Beratungstermin</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Unverbindlich und kostenlos - sprechen Sie mit unseren Arbeitsschutzexperten.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Microsoft Bookings / Booking Widget */}
            <div>
              <SectionHeading title="Online buchen" />
              <p className="text-bk-gray mb-6">
                Nutzen Sie unser Online-Buchungssystem für einen schnellen Termin.
              </p>
              {/* TODO: Replace with actual Microsoft Bookings URL provided by client */}
              <div className="bg-gray-100 rounded-xl p-8 text-center text-bk-gray border-2 border-dashed border-gray-300">
                <p className="font-semibold text-bk-dark mb-2">Buchungskalender</p>
                <p className="text-sm">
                  Hier wird das Microsoft Bookings Widget eingebettet.
                  <br />
                  Bitte ersetzen Sie diesen Platzhalter mit Ihrer Bookings-URL:
                </p>
                <code className="mt-3 block text-xs bg-white rounded px-3 py-2 text-bk-mid">
                  {`<iframe src="https://outlook.office365.com/owa/calendar/..." />`}
                </code>
              </div>
              {/* Uncomment and fill in your Bookings URL:
              <iframe
                src="https://outlook.office365.com/owa/calendar/IHRE_BOOKINGS_URL"
                width="100%"
                height="600"
                className="rounded-xl shadow-md"
                title="Beratungstermin buchen"
              />
              */}
            </div>

            {/* Contact Form Fallback */}
            <div>
              <SectionHeading title="Oder schreiben Sie uns" />
              <form action="/api/contact" method="POST" className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-bk-text mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bk-light focus:border-transparent text-bk-text"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-bk-text mb-1">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bk-light focus:border-transparent text-bk-text"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="telefon" className="block text-sm font-medium text-bk-text mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bk-light focus:border-transparent text-bk-text"
                    placeholder="+49 000 000000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="nachricht"
                    className="block text-sm font-medium text-bk-text mb-1"
                  >
                    Nachricht *
                  </label>
                  <textarea
                    id="nachricht"
                    name="nachricht"
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bk-light focus:border-transparent text-bk-text resize-none"
                    placeholder="Womit können wir Ihnen helfen?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-bk-dark hover:bg-bk-mid text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Nachricht senden
                </button>
                <p className="text-xs text-bk-gray">
                  Mit dem Absenden stimmen Sie unserer{" "}
                  <a href="/datenschutz" className="underline hover:text-bk-light">
                    Datenschutzerklärung
                  </a>{" "}
                  zu.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
