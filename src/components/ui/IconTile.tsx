import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export function IconTile({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <span className={cn("inline-flex size-11 items-center justify-center rounded-md bg-primary-soft text-primary", className)}>
      <Icon className="size-5" strokeWidth={1.75} aria-hidden />
    </span>
  );
}
