# RudrX Labs website

Marketing site for RudrX Labs (rudrxlabs.com). Next.js 15, Tailwind CSS 4, TypeScript.

Start with [AGENTS.md](AGENTS.md), then `docs/` (PRD, design system, architecture).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Contact form email

The form posts to `/api/contact`, which sends through [Resend](https://resend.com).
Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY`: from the Resend dashboard
- `CONTACT_TO_EMAIL`: the inbox that receives enquiries
- `CONTACT_FROM_EMAIL`: a sender on a domain verified in Resend, e.g. `RudrX Labs <website@rudrxlabs.com>`

Without these, the form shows an error with the email address instead.

## Editing content

All copy lives in `src/lib/content/`: `site.ts` (email, nav), `products.ts`
(StockD, Distribute), `services.ts`, `home.ts`, `faq.ts`.

## Brand files

`public/brand/`: wordmark (black and white versions) and the X mark used as the favicon.
All are vector outlines traced from the master logo (`../Logo/RudrX Labs.pdf`), so they
need no font and can be dropped into Canva, Figma or print as-is. The same paths
power the `Logo` component (`src/components/brand/logo-paths.ts`).

## Deploy

Import the folder into Vercel, add the three env variables, deploy.
