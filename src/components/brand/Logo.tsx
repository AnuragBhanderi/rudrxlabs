import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { LOGO_DOT_PATH, LOGO_TEXT_PATH, LOGO_TRANSFORM, LOGO_VIEWBOX, LOGO_X_PATH } from "./logo-paths";

/** "RudrX Labs." traced from the master logo. Text follows currentColor, X and dot are brand blue. */
export function Wordmark({ onInk = false, className }: { onInk?: boolean; className?: string }) {
  return (
    <svg viewBox={LOGO_VIEWBOX} className={cn("h-[22px] w-auto", className)} role="img" aria-label="RudrX Labs.">
      <g transform={LOGO_TRANSFORM}>
        <path fill="currentColor" d={LOGO_TEXT_PATH} />
        <path className={onInk ? "fill-primary-on-ink" : "fill-primary"} d={`${LOGO_X_PATH} ${LOGO_DOT_PATH}`} />
      </g>
    </svg>
  );
}

export function Logo({ onInk = false, className }: { onInk?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="RudrX Labs home" className={cn("inline-flex", onInk ? "text-white" : "text-black", className)}>
      <Wordmark onInk={onInk} />
    </Link>
  );
}
