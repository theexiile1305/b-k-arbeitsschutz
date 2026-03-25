import { Metadata } from "next";
import HomeHero from "@/components/pages/HomeHero";
import ServicesOverview from "@/components/pages/ServicesOverview";
import AboutPreview from "@/components/pages/AboutPreview";
import ReferenzenSection from "@/components/pages/ReferenzenSection";
import CTABlock from "@/components/ui/CTABlock";

export const metadata: Metadata = {
  title: "BK Arbeitsschutz - Ihr Anliegen, Unsere Aufgabe, Ihr Erfolg",
  description:
    "Professioneller Arbeitsschutz für Unternehmen: Beratung, Schulungen, Prüfservice und Brandschutz von BK Arbeitsschutz.",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <ServicesOverview />
      <AboutPreview />
      <ReferenzenSection />
      <CTABlock
        title="Jetzt Beratungstermin buchen"
        subtitle="Unverbindlich und kostenlos - sprechen Sie mit unseren Experten."
        buttonText="Termin vereinbaren"
        buttonHref="/kontakt"
      />
    </>
  );
}
