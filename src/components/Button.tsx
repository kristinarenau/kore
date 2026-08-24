import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-[var(--ease-luxury)] focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-sea-foam-deep text-white hover:bg-stone-moss hover:-translate-y-0.5 hover:shadow-lg shadow-black/10",
  secondary:
    "border border-stone-moss/30 text-ink hover:bg-stone-moss hover:text-white hover:-translate-y-0.5",
};

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  href?: string;
}

/** Shared CTA button. Renders a `<Link>` when `href` is given, else a `<button>`. */
export default function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
