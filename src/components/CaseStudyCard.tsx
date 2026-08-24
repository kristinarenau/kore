import Link from "next/link";

interface CaseStudyCardProps {
  client: string;
  title: string;
  description: string;
  href: string;
  /** Rotates the gradient placeholder so cards read as distinct without photography. */
  variant?: 0 | 1 | 2 | 3;
}

const gradients = [
  "linear-gradient(135deg, #7c9182 0%, #ece8e3 100%)",
  "linear-gradient(135deg, #6d750a 0%, #a8b8a1 100%)",
  "linear-gradient(135deg, #eee9e4 0%, #7c9182 100%)",
  "linear-gradient(135deg, #a8b8a1 0%, #6d750a 100%)",
];

export default function CaseStudyCard({
  client,
  title,
  description,
  href,
  variant = 0,
}: CaseStudyCardProps) {
  return (
    <Link href={href} className="group block">
      <article>
        <div
          role="img"
          aria-label={`${client} — abstract brand-mark placeholder`}
          className="aspect-[4/3] w-full rounded-sm transition-opacity duration-300 group-hover:opacity-85"
          style={{ background: gradients[variant] }}
        />
        <div className="mt-5 transition-transform duration-300 ease-[var(--ease-luxury)] group-hover:translate-x-1">
          <p className="text-xs font-medium tracking-[0.1em] text-stone-moss uppercase">
            {client}
          </p>
          <h3 className="mt-2 font-serif text-xl font-semibold text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
          <span className="mt-4 inline-block text-sm font-medium text-stone-moss underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-stone-moss">
            View case study &rarr;
          </span>
        </div>
      </article>
    </Link>
  );
}
