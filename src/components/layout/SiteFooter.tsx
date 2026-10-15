import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { products } from "@/lib/content/products";
import { site } from "@/lib/content/site";

const columns = [
  {
    title: "Work",
    links: products.map((p) => ({ href: `/work/${p.slug}`, label: p.name })),
  },
  {
    title: "Company",
    links: [
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/#process", label: "Process" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div className="max-w-sm">
          <Logo onInk />
          <p className="mt-4 text-ink-muted">
            Custom business software, built around how you work. {site.tagline}
          </p>
          <a href={`mailto:${site.email}`} className="mt-6 inline-block text-primary-on-ink hover:underline">
            {site.email}
          </a>
          <p className="mt-1 text-sm text-ink-muted">{site.location}</p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">{col.title}</p>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/85 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-ink-border">
        <Container className="flex flex-col gap-2 py-6 text-sm text-ink-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} RudrX Labs. All rights reserved.</p>
          <p>{site.regions}</p>
        </Container>
      </div>
    </footer>
  );
}
