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
              src="/bk.png"
              alt="BK Arbeitsschutz"
              width={140}
              height={48}
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              Ihr Anliegen, Unsere Aufgabe, Ihr Erfolg.
            </p>
            <p className="text-sm text-gray-300 mt-4">
              Am Bichl 6a
              <br />
              82335 Berg, Deutschland
              <br />
              <a href="tel:+498171386711" className="hover:text-white transition-colors">
                +49 (0) 8171 38 67 11
              </a>
              <br />
              <a
                href="mailto:info@b-k-arbeitsschutz.de"
                className="hover:text-white transition-colors"
              >
                info@b-k-arbeitsschutz.de
              </a>
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
                <Link href="/karriere" className="hover:text-white transition-colors">
                  Karriere
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-white transition-colors">
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
          <p className="sm:flex-1">
            © {new Date().getFullYear()} BK Arbeitsschutz. Alle Rechte vorbehalten.
          </p>
          <p className="sm:flex-1 text-center">
            Built with ❤️ by{" "}
            <a
              href="https://github.com/theexiile1305"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              theexiile1305
            </a>
            . Please report any issues at{" "}
            <a
              href="https://github.com/theexiile1305/b-k-arbeitsschutz/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            .
          </p>
          <div className="sm:flex-1 flex items-center justify-end gap-4">
            <a
              href="https://www.instagram.com/bk_arbeitsschutz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
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
