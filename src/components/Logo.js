import Link from "next/link";

// Simple placeholder logomark — an "A" cut into a rounded gradient tile.
// Swap this file's SVG for a real logo whenever one is ready; every place
// the brand mark appears (navbar, footer, favicon) points back here.
export function Mark({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="atij-mark-gradient" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#22d3c8" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#atij-mark-gradient)" />
      <path
        d="M16 8L23 24H19.3L17.9 20.6H14.1L12.7 24H9L16 8ZM16 13.2L14.7 17.4H17.3L16 13.2Z"
        fill="#07070b"
      />
    </svg>
  );
}

export default function Logo({ className = "" }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark />
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        Atiij <span className="text-muted font-normal">Studio</span>
      </span>
    </Link>
  );
}
