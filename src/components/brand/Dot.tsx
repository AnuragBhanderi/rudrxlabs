import { cn } from "@/lib/utils/cn";
import { LOGO_DOT_PATH, LOGO_DOT_VIEWBOX, LOGO_TRANSFORM } from "./logo-paths";

/**
 * The logo's period, traced from the master logo, used to end headlines.
 * Sized to Satoshi Bold: about 1.2× its stem width, like the dot in the wordmark. Color via text-* class.
 */
export function Dot({ className }: { className?: string }) {
  return (
    <svg
      viewBox={LOGO_DOT_VIEWBOX}
      aria-hidden
      className={cn("ml-[0.05em] inline-block h-[0.164em] w-[0.16em] align-baseline", className)}
    >
      <g transform={LOGO_TRANSFORM}>
        <path fill="currentColor" d={LOGO_DOT_PATH} />
      </g>
    </svg>
  );
}
