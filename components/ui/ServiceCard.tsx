import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-100 hover:border-bk-light transition-all duration-300 p-6"
    >
      <div className="flex items-center justify-center w-14 h-14 bg-bk-dark rounded-lg mb-5 group-hover:bg-bk-mid transition-colors">
        <span className="text-bk-light w-7 h-7">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-bk-dark mb-3 group-hover:text-bk-mid transition-colors font-bk-heading">
        {title}
      </h3>
      <p className="text-bk-gray text-sm leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center text-bk-light text-sm font-semibold gap-1 group-hover:gap-2 transition-all">
        Mehr erfahren
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
