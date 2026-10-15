import type { Metadata } from "next";
import { Bot, Code2, Handshake, Zap } from "lucide-react";
import { CtaBand } from "@/components/features/home/CtaBand";
import { Story } from "@/components/features/home/Story";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "RudrX Labs is an engineer-led software studio in Dallas–Fort Worth, building custom business software with AI development agents.",
};

const principles = [
  { icon: Handshake, title: "Your workflow first", body: "We learn how your business actually runs before we write a line of code." },
  { icon: Zap, title: "Weeks, not months", body: "Short cycles and weekly builds. You see progress you can click." },
  { icon: Bot, title: "AI-built, engineer-led", body: "AI agents write and test code. A senior engineer designs and reviews every change." },
  { icon: Code2, title: "You own it", body: "Your code, your data, your accounts. No lock-in." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A small studio that builds like a big team"
        lead="RudrX Labs designs and builds software for businesses that have outgrown spreadsheets. Founded by a software engineer with an MS in Computer Science from UT Arlington, based in Dallas–Fort Worth."
      />
      <Section>
        <SectionHeading eyebrow="How we think" title="What we hold to" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <Card key={p.title}>
              <IconTile icon={p.icon} />
              <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.body}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Story showLink={false} />
      <div className="pt-20 md:pt-28">
        <CtaBand />
      </div>
    </>
  );
}
