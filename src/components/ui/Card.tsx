import { cn } from "@/lib/utils/cn";

export function Card({
  className,
  interactive = false,
  children,
}: {
  className?: string;
  interactive?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-white p-6",
        interactive && "transition-[box-shadow,transform] duration-250 ease-out hover:-translate-y-0.5 hover:shadow-card",
        className,
      )}
    >
      {children}
    </div>
  );
}
