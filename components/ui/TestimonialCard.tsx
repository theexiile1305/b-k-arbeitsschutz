interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  area: string;
}

export default function TestimonialCard({ quote, author, company, area }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col gap-4">
      <div className="text-bk-light">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-bk-text leading-relaxed text-sm flex-grow">{quote}</p>
      <div>
        <p className="font-semibold text-bk-dark">{author}</p>
        <p className="text-bk-gray text-sm">{company}</p>
        <span className="inline-block mt-2 text-xs bg-bk-dark/10 text-bk-dark px-2 py-0.5 rounded-full">
          {area}
        </span>
      </div>
    </div>
  );
}
