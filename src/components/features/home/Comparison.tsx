import { Check, Minus } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { comparison } from "@/lib/content/home";
import { Wordmark } from "@/components/brand/Logo";

export function Comparison() {
  return (
    <Section>
      <SectionHeading
        eyebrow="The better option"
        title="Not off-the-shelf. Not a slow agency"
        lead="Software that fits your business, at the speed and cost of a small, AI-powered team."
      />
      <div className="mt-12 grid gap-4 lg:grid-cols-4">
        {comparison.others.map((o) => (
          <div key={o.title} className="rounded-lg border border-border bg-surface p-6">
            <h3 className="text-lg font-bold text-text/80">{o.title}</h3>
            <ul className="mt-4 space-y-3">
              {o.points.map((pt) => (
                <li key={pt} className="flex gap-2.5 text-[15px] text-muted">
                  <Minus className="mt-0.5 size-4 shrink-0" strokeWidth={1.75} aria-hidden />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="rounded-lg bg-ink p-6 text-white shadow-glow">
          <h3 className="pt-1">
            <Wordmark onInk className="h-5" />
          </h3>
          <ul className="mt-4 space-y-3">
            {comparison.us.points.map((pt) => (
              <li key={pt} className="flex gap-2.5 text-[15px] text-white/90">
                <Check className="mt-0.5 size-4 shrink-0 text-primary-on-ink" strokeWidth={2} aria-hidden />
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
