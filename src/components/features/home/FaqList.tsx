import { Plus } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/content/faq";
import { site } from "@/lib/content/site";

export function FaqList() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          lead={
            <>
              Something else on your mind? Email{" "}
              <a href={`mailto:${site.email}`} className="text-primary hover:underline">
                {site.email}
              </a>
              .
            </>
          }
        />
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <details key={f.q} className="group py-1" open={i === 0}>
              <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-6 py-4 text-left font-display text-lg font-bold">
                {f.q}
                <Plus
                  className="size-5 shrink-0 text-primary transition-transform duration-250 group-open:rotate-45"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </summary>
              <p className="max-w-2xl pb-5 text-[15px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
