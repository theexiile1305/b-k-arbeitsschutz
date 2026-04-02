"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubpageNavigationProps {
  pages: { label: string; href: string }[];
}

export default function SubpageNavigation({ pages }: SubpageNavigationProps) {
  const pathname = usePathname();

  return (
    <section className="py-8 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Bereichs-Navigation">
          <ul className="flex flex-wrap gap-3 justify-center">
            {pages.map((page) => {
              const isActive = pathname === page.href;
              return (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`inline-block px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                      isActive
                        ? "bg-bk-dark text-white border-bk-dark"
                        : "bg-white text-bk-dark border-gray-200 hover:border-bk-light hover:text-bk-light"
                    }`}
                  >
                    {page.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}
