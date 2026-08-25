interface LeafMarkProps {
  size?: number;
  color?: string;
}

/**
 * A layered leaf glyph — three nested outlines plus a solid core and vein
 * lines. Use as a standalone brand mark or section accent.
 * @category Decorative
 */
export const LeafMark = ({ size = 100, color = "#8FA573" }: LeafMarkProps) => (
  <svg viewBox="0 0 200 200" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.4">
      <path
        d="M 100 20 Q 150 50 160 100 Q 150 150 100 180 Q 50 150 40 100 Q 50 50 100 20 Z"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <g opacity="0.7">
      <path
        d="M 100 40 Q 140 60 148 100 Q 140 140 100 160 Q 60 140 52 100 Q 60 60 100 40 Z"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <path d="M 100 60 Q 130 75 136 100 Q 130 125 100 140 Q 70 125 64 100 Q 70 75 100 60 Z" fill={color} />
    <line x1="100" y1="20" x2="100" y2="180" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <g stroke={color} strokeWidth="1" opacity="0.5" strokeLinecap="round">
      <path d="M 100 50 Q 85 65 75 90" />
      <path d="M 100 50 Q 115 65 125 90" />
      <path d="M 100 150 Q 85 135 75 110" />
      <path d="M 100 150 Q 115 135 125 110" />
    </g>
  </svg>
);

interface LeafPatternProps {
  opacity?: number;
  color?: string;
}

/**
 * A tiled, low-opacity leaf-outline pattern for filling section backgrounds.
 * Renders as an absolutely-positioned overlay by default (`width`/`height: 100%`).
 * @category Decorative
 */
export const LeafPattern = ({ opacity = 0.08, color = "#8FA573" }: LeafPatternProps) => (
  <svg width="100%" height="100%" opacity={opacity} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="leafPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
        <path
          d="M 50 30 Q 70 40 75 60 Q 70 80 50 90 Q 30 80 25 60 Q 30 40 50 30 Z"
          fill="none"
          stroke={color}
          strokeWidth="1"
        />
        <path
          d="M 150 100 Q 170 110 175 130 Q 170 150 150 160 Q 130 150 125 130 Q 130 110 150 100 Z"
          fill="none"
          stroke={color}
          strokeWidth="1"
          opacity="0.6"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#leafPattern)" />
  </svg>
);

interface LeafCardProps {
  children: React.ReactNode;
  color?: string;
}

/**
 * A white card with a colored left accent border — a leaf-motif alternative
 * to ValueCard for organic/nature-themed layouts.
 * @category Decorative
 */
export const LeafCard = ({ children, color = "#8FA573" }: LeafCardProps) => (
  <div className="relative rounded-lg border-l-4 bg-white p-8 shadow-md" style={{ borderLeftColor: color }}>
    {children}
  </div>
);

interface VeinDividerProps {
  color?: string;
  height?: string;
}

/**
 * A full-width wavy line (like a leaf vein) for use as a section divider.
 * @category Decorative
 */
export const VeinDivider = ({ color = "#8FA573", height = "60px" }: VeinDividerProps) => (
  <div style={{ height, position: "relative" }}>
    <svg width="100%" height="100%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0,30 Q 250,10 500,30 T 1000,30" fill="none" stroke={color} strokeWidth="2" opacity="0.3" />
    </svg>
  </div>
);

interface GrowthSpiralProps {
  color?: string;
  size?: number;
}

/**
 * A small pulsing leaf-spiral glyph for indicating growth/progress.
 * Respects prefers-reduced-motion via the global animation-duration override in globals.css.
 * @category Decorative
 */
export const GrowthSpiral = ({ color = "#8FA573", size = 100 }: GrowthSpiralProps) => (
  <svg viewBox="0 0 200 200" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    <style>{`@keyframes grow { 0% { opacity: 0; } 50% { opacity: 1; } 100% { opacity: 0; } }`}</style>
    <path
      d="M 100 100 Q 120 80 140 100 Q 120 120 100 100 Q 80 120 60 100 Q 80 80 100 100"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      style={{ animation: "grow 2s ease-in-out infinite" }}
    />
    <circle cx="100" cy="100" r="3" fill={color} />
  </svg>
);

interface LeafAccentProps {
  color?: string;
  size?: number;
}

/**
 * A small solid leaf glyph with a single vein line — for use as a compact
 * bullet, list marker, or inline accent.
 * @category Decorative
 */
export const LeafAccent = ({ color = "#8FA573", size = 40 }: LeafAccentProps) => (
  <svg viewBox="0 0 100 100" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M 50 10 Q 75 25 80 50 Q 75 75 50 90 Q 25 75 20 50 Q 25 25 50 10 Z"
      fill={color}
      opacity="0.8"
    />
    <line x1="50" y1="10" x2="50" y2="90" stroke="white" strokeWidth="1.5" opacity="0.6" />
  </svg>
);
