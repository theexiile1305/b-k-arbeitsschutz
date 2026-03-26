"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    label: "Über uns",
    href: "/ueber-uns",
    children: [
      { label: "Vision", href: "/ueber-uns/vision" },
      { label: "Firma", href: "/ueber-uns/firma" },
      { label: "Mitarbeiter", href: "/ueber-uns/mitarbeiter" },
    ],
  },
  {
    label: "Arbeitsschutz",
    href: "/arbeitsschutz",
    children: [
      { label: "Betreuung DGUV V2", href: "/arbeitsschutz/betreuung-dguv-v2" },
      { label: "Unterweisungen", href: "/arbeitsschutz/unterweisungen" },
      { label: "GBU / BA / AA", href: "/arbeitsschutz/gbu-ba-aa" },
      { label: "Begehungen", href: "/arbeitsschutz/begehungen" },
      { label: "Analysen", href: "/arbeitsschutz/analysen" },
    ],
  },
  {
    label: "Akademie",
    href: "/akademie",
    children: [
      { label: "Fahrausbildung", href: "/akademie/fahrausbildung" },
      { label: "Sicherheitsbeauftragter", href: "/akademie/sicherheitsbeauftragter" },
      { label: "Brandschutzhelfer", href: "/akademie/brandschutzhelfer" },
      { label: "Elektrotechnik", href: "/akademie/elektrotechnik" },
    ],
  },
  {
    label: "Prüfservice",
    href: "/pruefservice",
    children: [
      {
        label: "Betriebsmittelprüfung DGUV V3",
        href: "/pruefservice/betriebsmittelpruefung-dguv-v3",
      },
      { label: "UVV", href: "/pruefservice/uvv" },
      { label: "Regale", href: "/pruefservice/regale" },
      { label: "Leitern & Tritte", href: "/pruefservice/leitern-tritte" },
      { label: "Kraftbetr. Tore", href: "/pruefservice/kraftbetriebene-tore" },
    ],
  },
  { label: "Brandschutz", href: "/brandschutz" },
  {
    label: "Arbeitsmittel & PSA",
    href: "/arbeitsmittel-psa",
    children: [
      { label: "Exoskelett", href: "/arbeitsmittel-psa/exoskelett" },
      { label: "Angepasster Gehörschutz", href: "/arbeitsmittel-psa/angepasster-gehoerschutz" },
    ],
  },
  { label: "Referenzen", href: "/referenzen" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/bk.png"
              alt="BK Arbeitsschutz Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm text-bk-dark hover:text-bk-light transition-colors rounded"
                  >
                    {item.label}
                    <svg
                      className="w-3 h-3 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-bk-text hover:bg-bk-light hover:text-white transition-colors first:rounded-t-md last:rounded-b-md"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm text-bk-dark hover:text-bk-light transition-colors rounded"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button (desktop) */}
          <div className="hidden lg:block">
            <Link
              href="/kontakt"
              className="bg-bk-light hover:bg-bk-mid text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              Kontakt
            </Link>
          </div>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-bk-dark p-2 rounded focus:outline-none"
            aria-label="Menü öffnen"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenMobileMenu(openMobileMenu === item.href ? null : item.href)
                      }
                      className="w-full flex items-center justify-between px-3 py-2 text-bk-dark hover:bg-bk-dark/10 rounded text-sm"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${openMobileMenu === item.href ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openMobileMenu === item.href && (
                      <div className="ml-4 mt-1 space-y-1">
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 text-bk-dark text-sm hover:bg-bk-dark/10 rounded"
                        >
                          Übersicht
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-bk-text text-sm hover:bg-bk-dark/10 hover:text-bk-dark rounded"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-bk-dark hover:bg-bk-dark/10 rounded text-sm"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 bg-bk-light text-white text-center py-2 rounded font-semibold text-sm"
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
