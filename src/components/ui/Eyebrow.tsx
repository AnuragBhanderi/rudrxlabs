import { cn } from "@/lib/utils/cn";

export function Eyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={cn("font-mono text-xs font-medium uppercase tracking-[0.08em] text-primary", className)}>
      {children}
    </p>
  );
}
