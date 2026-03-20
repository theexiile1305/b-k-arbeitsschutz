import Link from "next/link";

interface CTABlockProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTABlock({ title, subtitle, buttonText, buttonHref }: CTABlockProps) {
  return (
    <section className="bg-bk-dark py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-bk-heading mb-4">{title}</h2>
        {subtitle && <p className="text-gray-300 text-lg mb-8">{subtitle}</p>}
        <Link
          href={buttonHref}
          className="inline-block bg-bk-light hover:bg-white hover:text-bk-dark text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
