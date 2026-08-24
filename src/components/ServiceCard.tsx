import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ title, description, href = "/contact" }: ServiceCardProps) {
  return (
    <article className="group rounded-sm border border-stone-moss/10 bg-white/60 p-8 transition-all duration-300 ease-[var(--ease-luxury)] hover:-translate-y-1 hover:border-sea-foam/40 hover:shadow-xl hover:shadow-black/5">
      <h3 className="font-serif text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>
      <Link
        href={href}
        className="group/link mt-6 inline-flex items-center gap-1 text-sm font-medium text-stone-moss"
      >
        <span className="relative">
          Learn more
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-stone-moss transition-all duration-300 ease-[var(--ease-luxury)] group-hover/link:w-full" />
        </span>
        <span aria-hidden="true" className="transition-transform duration-300 group-hover/link:translate-x-1">
          &rarr;
        </span>
      </Link>
    </article>
  );
}
