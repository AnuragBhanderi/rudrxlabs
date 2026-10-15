import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/content/site";
import { Dot } from "@/components/brand/Dot";

export function CtaBand() {
  return (
    <section className="bg-bg pb-20 md:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-primary px-6 py-14 text-center text-white md:px-12 md:py-20">
          <div className="bg-grid-ink pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:text-5xl">
              Let&apos;s build what your business runs on<Dot className="text-ink" />
            </h2>
            <p className="mt-5 text-lg text-white/85">
              Tell us about the process that is slowing you down. We reply within one business day.
            </p>
            <Button href={site.primaryCta.href} variant="inverse" size="lg" className="mt-9">
              {site.primaryCta.label} <ArrowRight className="size-5" strokeWidth={1.75} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
