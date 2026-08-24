interface ValueCardProps {
  stat: string;
  label: string;
  description: string;
}

export default function ValueCard({ stat, label, description }: ValueCardProps) {
  return (
    <div className="border-l-2 border-sea-foam bg-white/50 p-8">
      <p className="font-serif text-4xl font-semibold text-stone-moss">{stat}</p>
      <p className="mt-2 text-sm font-medium tracking-wide text-ink">{label}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
