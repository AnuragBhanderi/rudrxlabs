import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { productMocks } from "@/components/features/products/ProductMocks";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products } from "@/lib/content/products";
import { cn } from "@/lib/utils/cn";

export function Work() {
  return (
    <Section id="work" tone="surface">
      <SectionHeading
        eyebrow="Our work"
        title="Software we've built"
        lead="Real systems running real businesses. Each one started as a paper sheet, a spreadsheet or a WhatsApp group."
      />
      <div className="mt-14 space-y-6">
        {products.map((p, i) => {
          const Mock = productMocks[p.slug];
          return (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group grid items-center gap-8 overflow-hidden rounded-[28px] border border-border bg-white p-6 transition-shadow duration-250 hover:shadow-card md:p-10 lg:grid-cols-2 lg:gap-12"
            >
              <div className={cn(i % 2 === 1 && "lg:order-2")}>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{p.category}</Badge>
                  <span className="text-sm text-muted">{p.status}</span>
                </div>
                <h3 className="mt-5 text-3xl font-bold tracking-[-0.02em] md:text-4xl">{p.name}</h3>
                <p className="mt-4 text-lg leading-relaxed text-muted">{p.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="rounded-full bg-surface px-3 py-1.5 text-sm">
                      {h}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-1.5 font-semibold text-primary">
                  Read the case study
                  <ArrowUpRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
              <div className={cn("rounded-[20px] bg-surface p-4 sm:p-8", i % 2 === 1 && "lg:order-1")}>
                {Mock && <Mock />}
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
