"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import { LeafPattern } from "./LeafComponents";
import { MOTION, SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Decorative background wash — purely visual, hidden from assistive tech */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 30%, rgba(124,145,130,0.08) 0%, rgba(124,145,130,0) 70%)",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <LeafPattern opacity={0.05} />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: MOTION.duration, ease: MOTION.ease }}
        className="text-xs font-medium tracking-[0.25em] text-muted uppercase"
      >
        Brand Strategy &amp; Growth Consultancy
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: MOTION.duration, ease: MOTION.ease, delay: 0.1 }}
        className="mt-6 max-w-4xl text-5xl font-semibold text-ink md:text-7xl"
      >
        {SITE.tagline}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: MOTION.duration, ease: MOTION.ease, delay: 0.2 }}
        className="mt-8 max-w-xl text-lg text-muted"
      >
        We uncover the essence at the core of every brand, then build the
        strategy that turns it into durable growth.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: MOTION.duration, ease: MOTION.ease, delay: 0.3 }}
        className="mt-10"
      >
        <Button href="/contact">Let&rsquo;s Talk</Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: MOTION.duration, delay: 0.6 }}
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.svg
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-sea-foam-deep"
        >
          <path d="M12 4v16m0 0-6-6m6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
