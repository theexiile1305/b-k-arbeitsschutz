interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-3xl sm:text-4xl font-bold font-bk-heading ${light ? "text-white" : "text-bk-dark"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg ${light ? "text-gray-200" : "text-bk-gray"}`}>{subtitle}</p>
      )}
      <div className={`mt-4 h-1 w-16 bg-bk-light rounded ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
