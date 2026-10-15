import { cn } from "@/lib/utils/cn";
import { Container } from "./Container";

type Tone = "default" | "surface" | "ink";

const toneClasses: Record<Tone, string> = {
  default: "bg-bg",
  surface: "bg-surface",
  ink: "bg-ink text-white",
};

export function Section({
  id,
  tone = "default",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", toneClasses[tone], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
