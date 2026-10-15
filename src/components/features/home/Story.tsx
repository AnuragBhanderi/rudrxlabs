import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Dot } from "@/components/brand/Dot";

export function Story({ showLink = true }: { showLink?: boolean }) {
  return (
    <Section tone="ink" className="relative overflow-hidden">
      <div className="bg-grid-ink pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="relative mx-auto flex aspect-square w-full max-w-[380px] items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
          <span className="relative font-display text-[220px] font-bold leading-none text-primary-on-ink sm:text-[280px]" aria-hidden>
            X<Dot className="text-white" />
          </span>
        </div>
        <div>
          <SectionHeading
            onInk
            eyebrow="Our story"
            title="Rudra, plus the infinite variable"
            lead={
              <>
                Rudra is a name of Shiva, the force that transforms. X is the variable: any domain, any system, any
                challenge. Together they describe what we do. We take the messy, manual parts of a business and turn
                them into software that just works.
              </>
            }
          />
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            RudrX Labs is an engineer-led studio in Dallas–Fort Worth. We build with AI development agents, so a small
            team ships what used to take five. That speed is the point: you get software fitted to your business
            without the agency timeline. <span className="text-white">Beyond Solutions.</span>
          </p>
          {showLink && (
            <Button href="/about" variant="inverse" className="mt-8">
              More about us <ArrowRight className="size-4" />
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
