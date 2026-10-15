import { Container } from "@/components/ui/Container";

const stack = ["Next.js", "React", "TypeScript", "Spring Boot", "PostgreSQL", "Supabase", "Tailwind CSS", "Docker"];

export function StackStrip() {
  return (
    <section className="border-y border-border bg-white">
      <Container className="flex flex-col items-center gap-5 py-8 md:flex-row md:justify-between">
        <p className="shrink-0 font-mono text-xs uppercase tracking-[0.08em] text-muted">Built on proven technology</p>
        <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2 md:justify-end">
          {stack.map((s) => (
            <li key={s} className="font-display text-[15px] font-bold text-text/55">
              {s}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
