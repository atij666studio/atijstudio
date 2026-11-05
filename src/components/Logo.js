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
          <stop offset="0%" stopColor="#d92b2b" />
          <stop offset="100%" stopColor="#f5a623" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#atij-mark-gradient)" />
      <path
        d="M16 8L23 24H19.3L17.9 20.6H14.1L12.7 24H9L16 8ZM16 13.2L14.7 17.4H17.3L16 13.2Z"
        fill="#0a0707"
      />
    </svg>
  );
}

export default function Logo({ className = "" }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark />
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        ATIJ <span className="text-muted font-normal">STUDIO</span>
      </span>
    </Link>
  );
}
