/**
 * Single source of truth for brand content and non-CSS design values.
 *
 * Color, font, and spacing *tokens* live in `src/app/globals.css` (Tailwind
 * v4's @theme) since that's what generates utility classes. This file holds
 * the values components need in JS/TSX — nav links, copy, JSON-LD data,
 * Framer Motion timing — so brand changes happen in one place.
 */

export const SITE = {
  name: "The Kore",
  tagline: "Strategic Clarity Drives Growth",
  url: "https://kore-blue.vercel.app",
  description:
    "The Kore is a brand strategy and growth consultancy. We uncover the essence at the core of every brand and translate it into strategy that compounds.",
} as const;

export const CONTACT = {
  email: "admin@thekore.com",
  phone: "+1 (415) 555-0148",
  address: "548 Market Street, Suite 61032, San Francisco, CA 94104",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/thekore" },
    { label: "Twitter", href: "https://twitter.com/thekore" },
  ],
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  quickLinks: NAV_LINKS,
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

export const CORE_VALUES = [
  {
    stat: "9+",
    label: "Years in practice",
    description:
      "Nearly a decade spent translating ambiguity into strategy for founders and marketing leaders.",
  },
  {
    stat: "45+",
    label: "Brands guided",
    description:
      "From seed-stage startups to category leaders, across consumer, B2B, and hospitality.",
  },
  {
    stat: "$18M+",
    label: "Revenue influenced",
    description:
      "Positioning and growth strategy directly tied to funding rounds, launches, and repositioning wins.",
  },
] as const;

export const SERVICES = [
  {
    slug: "brand-strategy",
    title: "Brand Strategy",
    description:
      "We define the position, voice, and narrative your brand owns — the foundation every campaign, hire, and product decision can be measured against.",
  },
  {
    slug: "growth-advisory",
    title: "Growth Advisory",
    description:
      "Ongoing counsel on go-to-market, channel prioritization, and pricing — built to compound, not chase short-term lift.",
  },
  {
    slug: "identity-messaging",
    title: "Identity & Messaging",
    description:
      "Naming, verbal identity, and messaging systems that hold up across a pitch deck, a landing page, and a hallway conversation.",
  },
] as const;

export const CASE_STUDIES = [
  {
    slug: "meridian-outfitters",
    client: "Meridian Outfitters",
    title: "Repositioning a legacy outdoor brand for a younger buyer",
    description:
      "A 30-year-old outdoor retailer had lost relevance with the customer driving category growth. We rebuilt the narrative around craft, not nostalgia.",
    challenge:
      "Meridian's brand read as dated to buyers under 40, despite product quality that outpaced younger competitors.",
    result:
      "Repositioning drove a 34% lift in under-40 customer acquisition within two quarters of relaunch.",
  },
  {
    slug: "north-and-vine",
    client: "North & Vine",
    title: "Building a category-defining narrative pre-Series A",
    description:
      "North & Vine needed a brand story sharp enough to anchor an institutional raise. We built the positioning investors and customers repeated back verbatim.",
    challenge:
      "Founders had a strong product but a narrative that shifted with every pitch, confusing early investor conversations.",
    result:
      "Closed a $6.2M Series A within four months of engagement, citing brand clarity as a differentiator.",
  },
  {
    slug: "harlow-hospitality-group",
    client: "Harlow Hospitality Group",
    title: "Unifying eleven properties under one growth strategy",
    description:
      "Eleven independently branded properties, one ownership group, zero shared story. We built a house-of-brands architecture that let each property keep its identity.",
    challenge:
      "Fragmented branding made cross-property marketing and group-level partnerships nearly impossible to execute.",
    result:
      "Group-level partnership revenue grew 22% year-over-year following the new brand architecture.",
  },
  {
    slug: "arden-supply-co",
    client: "Arden Supply Co.",
    title: "Naming and identity for a direct-to-trade launch",
    description:
      "A new B2B supply brand needed a name, voice, and identity system before a single sales call could happen. We delivered all three in six weeks.",
    challenge:
      "Founders were bootstrapped and needed a credible brand fast enough to support an already-scheduled trade show launch.",
    result:
      "Launched on schedule; the brand identity was cited by 3 of the first 10 accounts closed as a reason for trust.",
  },
] as const;

/** Shared Framer Motion timing so every animation feels like one system. */
export const MOTION = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1] as const,
  viewport: { once: true, margin: "-80px" },
} as const;
