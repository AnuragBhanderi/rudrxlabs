import type { Metadata } from "next";
import { CtaBand } from "@/components/features/home/CtaBand";
import { ServicesGrid } from "@/components/features/home/ServicesGrid";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { engagement } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Custom inventory, distribution, internal tools, automation and AI features, built for your business in weeks.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Software built around your business"
        lead="If your team runs it on paper, spreadsheets or chat today, we can turn it into software that fits exactly how you work."
      />
      <ServicesGrid showLink={false} />
      <Section tone="surface">
        <SectionHeading eyebrow="Working together" title="What an engagement looks like" />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {engagement.map((e, i) => (
            <li key={e.title} className="rounded-lg border border-border bg-white p-6">
              <span className="font-mono text-sm text-primary">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-bold">{e.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{e.body}</p>
            </li>
          ))}
        </ol>
      </Section>
      <div className="pt-20 md:pt-28">
        <CtaBand />
      </div>
    </>
  );
}
