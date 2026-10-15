# Architecture: RudrX Labs website

## 01 System overview

```
Browser
   |
   v
Next.js (Vercel)  -- static pages (home, work, services, about, contact)
   |
   +-- POST /api/contact  (route handler, server only)
            |
            +--> validation (zod) --> services/contact.ts --> integrations/email.ts --> Resend API
```

- Every page is statically rendered at build time. The only server code is the
  contact route handler.
- Content (products, services, FAQ, site info) lives in typed TypeScript files
  in `src/lib/content`. No CMS in v1.
- The Resend API key is read on the server only.

## 02 Tech stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | Next.js 15 (App Router), React 19, TypeScript strict | Same stack as RudrX Distribute. Static rendering for SEO. |
| Styling | Tailwind CSS 4, tokens in `globals.css` `@theme` | Same as Distribute. Tokens from DESIGN_SYSTEM.md. |
| Validation | zod | Already used in Distribute. Shared schema for form and route. |
| Icons | lucide-react | One icon set. |
| Fonts | Satoshi (Fontshare CSS), Inter and JetBrains Mono (`next/font/google`) | Satoshi matches the wordmark. |
| Email | Resend REST API via `fetch` | No SDK dependency. Free tier covers volume. |
| Hosting | Vercel | Zero-config Next.js, free tier. |
| Analytics | @vercel/analytics | Privacy-friendly page views, no cookie banner needed. Built into the host. |
| Testing | `tsc --noEmit` + `next build` in v1 | Small site; add Playwright for the contact flow in v2. |

Do not add a dependency that overlaps with this table without asking.

## 03 Project structure

```
rudrxlabs-website/
  AGENTS.md              agent rules (read first)
  CLAUDE.md              points to AGENTS.md
  docs/                  PRD, DESIGN_SYSTEM, ARCHITECTURE
  public/brand/          logo SVGs
  src/
    app/                 routes only. Thin pages that compose feature components.
      api/contact/       contact route handler
      work/[slug]/       product case-study pages
    components/
      ui/                primitives (Button, Card, Section, Input ...)
      brand/             Logo
      layout/            SiteHeader, SiteFooter
      features/home/     home page sections
      features/products/ product page sections and UI mocks
      features/contact/  ContactForm
    lib/
      content/           site, products, services, faq data
      services/          contact.ts (business logic)
      integrations/      email.ts (Resend)
      validation/        contact.ts (zod schema shared by client and server)
      utils/             cn(), rate limiter
    types/               shared types
```

## 04 Data flow

Contact form:
1. `ContactForm` (client) validates with the shared zod schema, then POSTs JSON.
2. `/api/contact` checks the rate limit, parses with the schema, drops honeypot hits.
3. `services/contact.ts` formats the enquiry and calls `integrations/email.ts`.
4. Route returns `{ ok: true }` or `{ ok: false, errors }`. UI shows the result.

Errors: field errors go back to the form. Unexpected errors are logged
server-side and shown as a generic message with the contact email.

## 05 Boundaries

app -> components -> lib/content. app/api -> lib/services -> lib/integrations.
- Components never import `lib/integrations` or `lib/services`.
- `lib/integrations` and `lib/services` import `server-only`.

## 06 Decisions that look wrong but are intentional

- Client names (the motel, the cosmetics manufacturer) are not shown until
  they approve. Do not "add realism" by naming them.
- No stats strip, testimonials or pricing section. They come back only with
  real numbers and approved quotes. Never invent them.
- Product visuals are coded UI mocks, not screenshots, so they stay crisp and
  on-brand. Replace with real screenshots when available.
- The rate limiter is in-memory per server instance. It is a speed bump, not
  security. Acceptable at v1 volume.

## 07 Scale

- v1: under 10k visits a month, a few form submissions a day.
- Planned next: blog (MDX), Cal.com booking, Playwright test for contact.
- Not planned: CMS, i18n, dark mode.

## 08 When to stop and ask

- Adding a dependency, service, or env variable.
- Publishing a client name, number, or testimonial.
- Changing the contact flow.
