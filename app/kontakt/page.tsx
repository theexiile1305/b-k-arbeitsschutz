import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/metadata";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = buildMetadata(
  "Kontakt",
  "Haben Sie Fragen? Kontaktieren Sie uns für eine unverbindliche Beratung."
);

export default function Kontakt() {
  return (
    <>
      <PageHeader
        title="Kontakt"
        subtitle="Haben Sie Fragen? Kontaktieren Sie uns für eine unverbindliche Beratung."
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Kontaktinformationen" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
              <div className="bg-bk-dark rounded-lg p-3 shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-bk-gray mb-1">Telefon</p>
                <a
                  href="tel:+498171386711"
                  className="text-bk-dark font-semibold hover:text-bk-light transition-colors"
                >
                  +49 (0) 8171 38 67 11
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
              <div className="bg-bk-dark rounded-lg p-3 shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-bk-gray mb-1">E-Mail</p>
                <a
                  href="mailto:info@b-k-arbeitsschutz.de"
                  className="text-bk-dark font-semibold hover:text-bk-light transition-colors"
                >
                  info@b-k-arbeitsschutz.de
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
              <div className="bg-bk-dark rounded-lg p-3 shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-bk-gray mb-1">Erreichbarkeit</p>
                <p className="text-bk-dark font-semibold">Mo-Fr, 08:00-17:00 Uhr</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Microsoft Bookings / Booking Widget */}
            <div>
              <SectionHeading title="Online buchen" />
              <p className="text-bk-gray mb-6">
                Nutzen Sie unser Online-Buchungssystem für einen schnellen Termin.
              </p>
              <iframe
                src="https://outlook.office.com/book/Arbeitssicherheitsbetreuung@b-k-management.de/?ismsaljsauthenabled=true"
                width="100%"
                height="500"
                className="rounded-xl shadow-md"
                title="Beratungstermin buchen"
              />
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
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    required
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
