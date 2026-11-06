import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/site";

// The studio's logomark (same artwork as the GitHub profile picture).
// The browser-tab icon is src/app/icon.png, made from the same image.
export function Mark({ size = 32 }) {
  return <Image src={asset("/brand/logo.png")} alt="" width={size} height={size} aria-hidden="true" />;
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
