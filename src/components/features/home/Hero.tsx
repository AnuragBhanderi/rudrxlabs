import { ArrowRight } from "lucide-react";
import { StockDMock } from "@/components/features/products/ProductMocks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { heroWords } from "@/lib/content/home";
import { site } from "@/lib/content/site";
import { RotatingWord } from "./RotatingWord";
import { Dot } from "@/components/brand/Dot";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pt-[72px]">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] size-[640px] rounded-full bg-primary/15 blur-3xl" />
      <HeroWaves />

      <Container className="relative grid items-center gap-14 pt-14 pb-20 md:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-[13px] text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success/60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            Taking new projects · free 30-min intro call
          </p>

          <h1 className="mt-7 text-5xl font-bold leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl xl:text-[84px]">
            We build the software that runs your <RotatingWord words={heroWords} />
            <Dot className="text-primary" />
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            Custom inventory, ordering and operations software for growing businesses. Designed around how you work,
            built with AI development agents, live in weeks.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={site.primaryCta.href} size="lg">
              {site.primaryCta.label}
              <ArrowRight className="size-5" strokeWidth={1.75} />
            </Button>
            <Button href="/#work" size="lg" variant="secondary">
              See our work
            </Button>
          </div>

          <p className="mt-5 text-sm text-muted">Fixed-price quotes · You own the code · Weekly working builds</p>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <StockDMock className="relative z-10" />
        </div>
      </Container>
    </section>
  );
}

function HeroWaves() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-0 h-56 w-full text-primary/20"
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M0 ${120 + i * 18} C 240 ${60 + i * 18}, 480 ${180 + i * 18}, 720 ${120 + i * 18} S 1200 ${60 + i * 18}, 1440 ${120 + i * 18}`}
          stroke="currentColor"
          strokeWidth="1.25"
        />
      ))}
    </svg>
  );
}
