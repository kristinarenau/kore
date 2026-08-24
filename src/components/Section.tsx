import { type ElementType, type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
}

/** Consistent vertical rhythm (80px mobile / 120px desktop) for every page section. */
export default function Section({
  children,
  className = "",
  as: Tag = "section",
  id,
}: SectionProps) {
  return (
    <Tag id={id} className={`px-6 py-20 md:px-12 md:py-30 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </Tag>
  );
}
