interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-bk-dark py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white font-bk-heading mb-4">{title}</h1>
        {subtitle && <p className="text-gray-300 text-lg max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
}
