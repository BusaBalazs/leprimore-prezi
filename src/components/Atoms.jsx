export function Eyebrow({ children, tone = "light" }) {
  const toneClasses =
    tone === "dark"
      ? "border-accent/60 text-accent"
      : "border-primary/25 text-primary";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${toneClasses}`}
    >
      {children}
    </span>
  );
}

export function SectionIndex({ children, tone = "light" }) {
  return (
    <span
      className={`font-display text-xs uppercase tracking-[0.3em] ${
        tone === "dark" ? "text-accent-soft/70" : "text-primary/45"
      }`}
    >
      {children}
    </span>
  );
}

/**
 * Signature element: two interlocking arcs, echoing the overlapping hearts
 * of the Le Primore mark. Used as a quiet recurring "seal" that ties every
 * section back to the two brands presenting together.
 */
export function Motif({ tone = "light", className = "" }) {
  const stroke = tone === "dark" ? "#cbb26a" : "#0d4632";
  const strokeSoft = tone === "dark" ? "#cbb26a" : "#cbb26a";
  return (
    <svg
      viewBox="0 0 64 32"
      className={`h-6 w-12 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M30 26C16 26 10 18 10 12c0-5 4-8 9-8 4 0 7.5 2.4 9 6"
        fill="none"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M34 26c14 0 20-8 20-14 0-5-4-8-9-8-4 0-7.5 2.4-9 6"
        fill="none"
        stroke={strokeSoft}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
