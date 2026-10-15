import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { CtaBand } from "@/components/features/home/CtaBand";
import { productMocks } from "@/components/features/products/ProductMocks";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProduct, products } from "@/lib/content/products";
import { Dot } from "@/components/brand/Dot";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return { title: `${product.name} — ${product.category}`, description: product.summary };
}

export default async function WorkPage({ params }: Params) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const Mock = productMocks[product.slug];

  return (
    <>
      <section className="relative overflow-hidden bg-surface pt-[72px]">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_70%)]" />
        <Container className="relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>{product.category}</Badge>
              <span className="text-sm text-muted">{product.status}</span>
            </div>
            <h1 className="mt-6 text-5xl font-bold leading-[1] tracking-[-0.03em] md:text-6xl">
              {product.name}
              <Dot className="text-primary" />
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">{product.summary}</p>
            <dl className="mt-8 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
              {product.facts.map((f) => (
                <div key={f.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">{f.label}</dt>
                  <dd className="mt-1 text-[15px] font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          {Mock && <Mock />}
        </Container>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-surface md:p-8">
            <Eyebrow className="text-muted">The problem</Eyebrow>
            <p className="mt-4 text-lg leading-relaxed">{product.problem}</p>
          </Card>
          <Card className="border-primary/20 bg-primary-soft md:p-8">
            <Eyebrow>What we built</Eyebrow>
            <p className="mt-4 text-lg leading-relaxed">{product.outcome}</p>
          </Card>
        </div>
        <p className="mt-6 text-sm text-muted">Built for: {product.audience}</p>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Features" title="What it does" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.features.map((f) => (
            <Card key={f.title}>
              <CheckCircle2 className="size-6 text-primary" strokeWidth={1.75} aria-hidden />
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Technology" title="Built with" />
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {product.stack.map((t) => (
            <li key={t} className="rounded-full border border-border px-4 py-2 font-mono text-sm">
              {t}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
    </>
  );
}
