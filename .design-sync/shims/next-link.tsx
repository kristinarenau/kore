// design-sync-only shim for `next/link`. The real site always uses the real
// next/link; this stands in only inside the Claude Design bundle/preview
// build, which has no Next.js router. next/link's real implementation reads
// process.env.__NEXT_ROUTER_BASEPATH (and similar) at module-init time —
// normally inlined by Next's own bundler, but undefined here — which throws
// and aborts the entire shared IIFE bundle before ANY component's export
// gets assigned. See .design-sync/NOTES.md.
import { type AnchorHTMLAttributes, forwardRef } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ href, children, ...rest }, ref) => (
  <a ref={ref} href={href} {...rest}>
    {children}
  </a>
));
Link.displayName = "Link";

export default Link;
