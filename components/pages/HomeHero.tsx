import Hero from "@/components/ui/Hero";

export default function HomeHero() {
  return (
    <Hero
      imageSrc="/picture_1.jpeg"
      imageAlt="BK Arbeitsschutz - Professioneller Arbeitsschutz"
      title="Ihr Anliegen, Unsere Aufgabe, Ihr Erfolg"
      subtitle="Professionelle Arbeitsschutzlösungen für Unternehmen - von der Beratung bis zur Umsetzung."
      ctaText="Jetzt Beratungstermin buchen"
      ctaHref="/beratungstermin"
    />
  );
}
