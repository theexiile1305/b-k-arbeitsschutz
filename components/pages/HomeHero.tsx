import Hero from "@/components/ui/Hero";

export default function HomeHero() {
  return (
    <Hero
      imageSrc="/hero.jpg"
      imageAlt="BK Arbeitsschutz - Sicher zum Erfolg"
      title="Ihr Anliegen, Unsere Aufgabe, Ihr Erfolg"
      subtitle="Professionelle Arbeitsschutzlösungen für Unternehmen - von der Beratung bis zur Umsetzung."
      ctaText="Jetzt Beratungstermin buchen"
      ctaHref="/kontakt"
    />
  );
}
