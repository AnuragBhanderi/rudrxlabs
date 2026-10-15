import type { Metadata } from "next";
import { Clock, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/features/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your project. Free 30-minute intro call, fixed-price quote, reply within one business day.",
};

const details = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Based in", value: site.location },
  { icon: Clock, label: "Response time", value: "Within one business day" },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-surface pt-[72px]">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_20%,transparent_60%)]" />
      <Container className="relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Start a project"
            lead="Tell us what slows your team down. We'll set up a free 30-minute call and tell you honestly whether custom software is the right fix."
          />
          <ul className="mt-10 space-y-5">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-border bg-white text-primary">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">{label}</p>
                  {href ? (
                    <a href={href} className="mt-0.5 block font-medium hover:text-primary">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-0.5 font-medium">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-[28px] border border-border bg-white p-6 shadow-card md:p-10">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
