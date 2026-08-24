import Link from "next/link";
import { CONTACT, FOOTER_LINKS, SITE } from "@/lib/constants";

/**
 * Text here is plain white rather than the brand's Porcelain (#ECE8E3) at
 * reduced opacity — Porcelain-on-Stone-Moss only clears ~4.1:1 contrast at
 * full opacity, short of the WCAG AA 4.5:1 minimum for body-sized text.
 * Full white clears ~5:1, so hierarchy is carried by weight/tracking/size
 * instead of opacity.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-moss text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3 md:px-12 md:py-20">
        <div>
          <p className="font-serif text-lg tracking-[0.15em]">THE KORE</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/95">
            {SITE.description}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold tracking-[0.1em] text-white uppercase">
            Quick links
          </p>
          <ul className="mt-4 space-y-3">
            {FOOTER_LINKS.quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/95 underline-offset-4 transition-colors hover:text-porcelain hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold tracking-[0.1em] text-white uppercase">
            Connect
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm text-white/95 underline-offset-4 transition-colors hover:text-porcelain hover:underline"
              >
                {CONTACT.email}
              </a>
            </li>
            {CONTACT.social.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/95 underline-offset-4 transition-colors hover:text-porcelain hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-4 px-6 py-6 text-xs text-white/95 md:flex-row md:px-12">
          <p>&copy; {year} The Kore. All rights reserved.</p>
          <ul className="flex gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-porcelain hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
