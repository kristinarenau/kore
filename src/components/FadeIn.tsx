"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { MOTION } from "@/lib/constants";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Fades + lifts content in as it enters the viewport. Runs once per element.
 * @category Primitives
 */
export default function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={MOTION.viewport}
      transition={{ duration: MOTION.duration, ease: MOTION.ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
