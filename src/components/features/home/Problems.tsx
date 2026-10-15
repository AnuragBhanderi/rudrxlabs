import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { icons } from "@/components/ui/icons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problems } from "@/lib/content/home";

export function Problems() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="Sound familiar"
        title="Your business outgrew its spreadsheets"
        lead="Most growing businesses run on paper, Excel and WhatsApp until something breaks. The cost shows up as hours lost, stock mistakes and orders that slip."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((p) => (
          <Card key={p.title}>
            <IconTile icon={icons[p.icon]} />
            <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
