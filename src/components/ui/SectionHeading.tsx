import { cn } from "@/lib/utils/cn";
import { Eyebrow } from "./Eyebrow";
import { Dot } from "@/components/brand/Dot";

/** Eyebrow + headline ending in the brand's blue period + optional lead. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  onInk = false,
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: React.ReactNode;
  align?: "left" | "center";
  onInk?: boolean;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow className={cn("mb-4", onInk && "text-primary-on-ink")}>{eyebrow}</Eyebrow>}
      <Tag
        className={cn(
          "font-bold tracking-[-0.02em]",
          Tag === "h1" ? "text-4xl leading-[1.05] sm:text-5xl md:text-6xl" : "text-3xl leading-[1.1] md:text-[44px]",
        )}
      >
        {title}
        <Dot className={onInk ? "text-primary-on-ink" : "text-primary"} />
      </Tag>
      {lead && (
        <p className={cn("mt-5 text-lg leading-relaxed md:text-xl", onInk ? "text-ink-muted" : "text-muted")}>{lead}</p>
      )}
    </div>
  );
}
