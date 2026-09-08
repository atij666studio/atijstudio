// Small hand-written icon set so the project has zero icon-library dependency.
// Add more `case`s here as needed instead of pulling in an icon package.

export function Icon({ name, className = "h-6 w-6" }) {
  const common = {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "code":
      return (
        <svg {...common}>
          <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M3 13l9 5 9-5" />
        </svg>
      );
    case "figma":
      return (
        <svg {...common}>
          <path d="M9 21a3 3 0 003-3v-3H9a3 3 0 000 6zM9 15a3 3 0 110-6h3v6H9zM9 9a3 3 0 110-6h3v6H9zM12 3h3a3 3 0 110 6h-3V3zM15 9a3 3 0 103 3 3 3 0 00-3-3z" />
        </svg>
      );
    case "compass":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M15 9l-2 6-6 2 2-6 6-2z" />
        </svg>
      );
    case "flame":
      return (
        <svg {...common}>
          <path d="M12 2c1 3-2 4-2 7a4 4 0 108 0c0-1-1-2-1-2 1 4-1 5-1 5 1-4-3-5-2-9-2 1-4 4-4 8a6 6 0 1012 0c0-5-4-6-4-9-1 1-2 2-2 3z" />
        </svg>
      );
    case "waveform":
      return (
        <svg {...common}>
          <path d="M2 12h2l1.5-6 3 15 3-18 3 12 2-6 1.5 3H22" />
        </svg>
      );
    case "download":
      return (
        <svg {...common}>
          <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...common}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "github":
      return (
        <svg {...common} strokeWidth={1.4}>
          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.6 2.7 5.5 3 5.5 3a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004.1 9.4c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.1-.5 2V21" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...common} strokeWidth={1.4}>
          <path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 001.7-2.2 8 8 0 01-2.5 1 4 4 0 00-6.9 3.6A11.4 11.4 0 014 4.6a4 4 0 001.2 5.3 4 4 0 01-1.8-.5v.1a4 4 0 003.2 3.9 4 4 0 01-1.8.1 4 4 0 003.7 2.8A8 8 0 012 17.9a11.3 11.3 0 006.1 1.8c7.3 0 11.3-6.1 11.3-11.3v-.5A8 8 0 0022 5.9z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} strokeWidth={1.4}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7.5 10v6.5M7.5 7.5v.01M12 16.5V13a2 2 0 014 0v3.5M12 13v3.5" />
        </svg>
      );
    default:
      return null;
  }
}
