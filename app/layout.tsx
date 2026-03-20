import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://bk-arbeitsschutz.de"),
  title: "BK Arbeitsschutz - Ihr Anliegen, Unsere Aufgabe, Ihr Erfolg",
  description:
    "BK Arbeitsschutz bietet professionelle Lösungen in Arbeitsschutz, Sicherheitstraining, Prüfservice und Brandschutz für Unternehmen.",
  openGraph: {
    images: [{ url: "/logo.png" }],
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
