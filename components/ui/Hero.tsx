import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaHref?: string;
  overlay?: boolean;
  sloganSrc?: string;
}

export default function Hero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  ctaText,
  ctaHref,
  overlay = true,
}: HeroProps) {
  return (
    <section className="relative h-[560px] sm:h-[620px] flex items-center overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {overlay && <div className="absolute inset-0 bg-bk-dark/60" />}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-start justify-between gap-8">
        <div className="max-w-xl ml-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-bk-heading leading-tight mb-6">
            {title}
          </h1>
          {subtitle && <p className="text-xl text-gray-200 mb-8 leading-relaxed">{subtitle}</p>}
          {ctaText && ctaHref && (
            <Link
              href={ctaHref}
              className="inline-block bg-bk-light hover:bg-white hover:text-bk-dark text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-xl"
            >
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
