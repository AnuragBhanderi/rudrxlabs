import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { process } from "@/lib/content/home";

export function Process() {
  return (
    <Section id="process" tone="surface">
      <SectionHeading
        eyebrow="How we work"
        title="From first call to live software in weeks"
        lead="A short, clear process. You see working software every week, not a big reveal at the end."
        align="center"
      />
      <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
        <div className="pointer-events-none absolute top-7 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 md:block" aria-hidden />
        {process.map((s) => (
          <li key={s.step} className="relative rounded-lg border border-border bg-white p-6 text-center md:p-8">
            <span className="relative mx-auto flex size-14 items-center justify-center rounded-full bg-primary font-mono text-lg font-medium text-white shadow-glow">
              {s.step}
            </span>
            <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
