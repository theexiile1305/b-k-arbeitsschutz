import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bk-dark text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/logo.png"
              alt="BK Arbeitsschutz"
              width={140}
              height={48}
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              Ihr Anliegen, Unsere Aufgabe, Ihr Erfolg.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bk-light mb-4">
              Leistungen
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/arbeitsschutz" className="hover:text-white transition-colors">
                  Arbeitsschutz
                </Link>
              </li>
              <li>
                <Link href="/akademie" className="hover:text-white transition-colors">
                  Akademie
                </Link>
              </li>
              <li>
                <Link href="/pruefservice" className="hover:text-white transition-colors">
                  Prüfservice
                </Link>
              </li>
              <li>
                <Link href="/brandschutz" className="hover:text-white transition-colors">
                  Brandschutz
                </Link>
              </li>
              <li>
                <Link href="/arbeitsmittel-psa" className="hover:text-white transition-colors">
                  Arbeitsmittel & PSA
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bk-light mb-4">
              Unternehmen
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/ueber-uns" className="hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns/vision" className="hover:text-white transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/referenzen" className="hover:text-white transition-colors">
                  Referenzen
                </Link>
              </li>
              <li>
                <Link href="/beratungstermin" className="hover:text-white transition-colors">
                  Beratungstermin
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-bk-light mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/impressum" className="hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-bk-mid flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} BK Arbeitsschutz. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
