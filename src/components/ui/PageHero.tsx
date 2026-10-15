import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-surface pt-[72px]">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-48 right-[-10%] size-[520px] rounded-full bg-primary/12 blur-3xl" />
      <Container className="relative py-16 md:py-24">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} lead={lead} />
        {children}
      </Container>
    </section>
  );
}
