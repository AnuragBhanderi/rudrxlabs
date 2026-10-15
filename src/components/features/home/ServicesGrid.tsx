import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { icons } from "@/components/ui/icons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content/services";

export function ServicesGrid({ showLink = true }: { showLink?: boolean }) {
  return (
    <Section id="services">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="What we build"
          title="Custom software for how you work"
          lead="Tell us the process. We design and build the system around it."
        />
        {showLink && (
          <Button href="/services" variant="secondary" className="self-start md:self-auto">
            All services <ArrowRight className="size-4" />
          </Button>
        )}
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title} interactive>
            <IconTile icon={icons[s.icon]} />
            <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
            <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
              {s.points.map((pt) => (
                <li key={pt} className="flex items-center gap-2 text-sm text-text/80">
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                  {pt}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
