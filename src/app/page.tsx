import { Comparison } from "@/components/features/home/Comparison";
import { CtaBand } from "@/components/features/home/CtaBand";
import { FaqList } from "@/components/features/home/FaqList";
import { Hero } from "@/components/features/home/Hero";
import { Problems } from "@/components/features/home/Problems";
import { Process } from "@/components/features/home/Process";
import { ServicesGrid } from "@/components/features/home/ServicesGrid";
import { StackStrip } from "@/components/features/home/StackStrip";
import { Story } from "@/components/features/home/Story";
import { Work } from "@/components/features/home/Work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StackStrip />
      <Problems />
      <Comparison />
      <Work />
      <ServicesGrid />
      <Process />
      <Story />
      <FaqList />
      <CtaBand />
    </>
  );
}
