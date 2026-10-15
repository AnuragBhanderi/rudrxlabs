import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Dot } from "@/components/brand/Dot";

export default function NotFound() {
  return (
    <section className="bg-surface pt-[72px]">
      <Container className="py-32 text-center">
        <p className="font-mono text-sm text-primary">404</p>
        <h1 className="mt-4 text-5xl font-bold tracking-[-0.03em]">
          Page not found<Dot className="text-primary" />
        </h1>
        <p className="mt-4 text-lg text-muted">That page doesn&apos;t exist or has moved.</p>
        <Button href="/" className="mt-8">
          Back to home
        </Button>
      </Container>
    </section>
  );
}
