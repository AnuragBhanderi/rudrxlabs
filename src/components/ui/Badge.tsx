import { cn } from "@/lib/utils/cn";

export function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary-soft px-3 py-1",
        "font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
