# Design System: RudrX Labs website

Layout and rhythm are inspired by ezye.com.au (large tight headlines, alternating
section bands, product mock in the hero, accordion FAQ). Colors, type and copy are
RudrX's own. Never copy EZYE text, graphics or logos.

All tokens live in `src/app/globals.css` under `@theme`. Components use the
Tailwind utilities those tokens generate (`bg-primary`, `text-muted`, ...).
Never use raw hex values in components.

## 01 Brand identity

- Personality: precise, calm, capable.
- Tone in UI copy: plain, short sentences, no exclamation marks, no hype words
  ("revolutionary", "cutting-edge"). Say what the software does.
- Feel: light, spacious, product first.
- Signature: the blue period. Section headlines end with a blue "." like the logo.
- Logo: wordmark "RudrX Labs." in near-black with the X and the period in blue.
  Files in `public/brand/`, component in `src/components/brand/Logo.tsx`.
- Reference sites: https://ezye.com.au (layout), https://linear.app (restraint).

## 02 Color palette

| Token | Value | Use |
| --- | --- | --- |
| --color-bg | #FFFFFF | Page background |
| --color-surface | #F6F7F9 | Alternating section bands, cards |
| --color-surface-2 | #EDF0F4 | Deeper band, inputs on surface |
| --color-border | #E2E5EA | Dividers, card borders, inputs |
| --color-text | #0A0A0A | Body text, logo black |
| --color-text-muted | #5B6270 | Secondary text, captions |
| --color-primary | #0074D9 | Logo blue. Buttons, links, the X and the period |
| --color-primary-hover | #005FB3 | Hover on primary |
| --color-primary-soft | #E6F1FB | Tinted backgrounds, badges |
| --color-ink | #0B1220 | Dark sections (footer, CTA band) |
| --color-ink-muted | #9AA4B2 | Text on ink |
| --color-success | #16A34A | Confirmations |
| --color-warning | #D97706 | Warnings |
| --color-danger | #DC2626 | Errors |

Rules:
- One primary color. Green/amber/red are for state only.
- #0074D9 on white is 4.7:1 (passes AA). Do not put primary text on
  surface-2 or darker grey: it drops below 4.5:1. On ink use #4DA3FF for links.
- Dark mode: not supported in v1.

## 03 Typography

| Role | Font | Size (mobile → desktop) | Weight | Line height |
| --- | --- | --- | --- | --- |
| Display | Satoshi | 48 → 88px | 700 | 0.95, -0.03em |
| H1 | Satoshi | 40 → 56px | 700 | 1.05, -0.02em |
| H2 | Satoshi | 32 → 44px | 700 | 1.1, -0.02em |
| H3 | Satoshi | 20 → 22px | 700 | 1.3 |
| Body | Inter | 16px | 400 | 1.6 |
| Lead | Inter | 18 → 20px | 400 | 1.55 |
| Small | Inter | 14px | 400 | 1.5 |
| Label | JetBrains Mono | 12px | 500 | uppercase, 0.08em tracking |

Rules:
- Satoshi for headings (loaded from Fontshare), Inter for text, JetBrains Mono
  only for eyebrow labels and numbers in mocks.
- Body line length under 70 characters (`max-w-prose` or `max-w-2xl`).

## 04 Spacing

Base unit 4px, Tailwind default scale. Use: 1, 2, 3, 4, 6, 8, 12, 16, 24.

- Section padding: `py-20` mobile, `md:py-28` desktop (component `Section`).
- Max content width 1200px (`max-w-[1200px]`), side padding 16px mobile, 24px from sm.
- Grids: 1 column mobile, 2 at md, 3 or 4 at lg. Gap 6.

## 05 Radius and shadows

| Token | Value | Use |
| --- | --- | --- |
| radius-sm | 8px | Inputs, tags |
| radius-md | 12px | Buttons |
| radius-lg | 20px | Cards |
| radius-xl | 28px | Hero mock, CTA band |
| radius-full | 9999px | Pills, badges |

Shadows:
- `shadow-card`: `0 8px 32px -8px rgb(11 18 32 / 0.12)` for interactive cards on hover and the hero mock.
- `shadow-glow`: `0 0 48px rgb(0 116 217 / 0.25)` for the primary CTA only.
- Flat cards get a border, not a shadow.

## 06 Components (`src/components/ui`)

Buttons (`Button`)
| Variant | Background | Text | Use |
| --- | --- | --- | --- |
| primary | primary | white | One main action per view |
| secondary | white | text, border | Supporting action |
| ghost | transparent | text | Nav, low emphasis |
| inverse | white | ink | Primary action on ink backgrounds |

- Height 44px (`md` size) or 52px (`lg`), padding x 20/24, radius-md, 15px 600.
- Focus: 2px primary ring with 2px offset. Disabled: 50% opacity.
- Renders as `<a>` when given `href`.

Other primitives: `Badge` (pill, mono label), `Card`, `Section`, `Container`, `PageHero`, `IconTile`, `Eyebrow`,
`SectionHeading` (eyebrow + title with blue period + lead), `Input`, `Textarea`,
`Select`, `Field` (label + error). FAQ uses native `<details>` styled as an accordion.

Inputs
- Height 44px, radius-sm, 1px border, focus ring primary.
- Label above, always visible. Error text below in danger, 13px.

## 07 Icons

- Lucide (`lucide-react`), stroke 1.75. 16px inline, 20px in buttons, 24px in cards.
- Icon-only controls need an `aria-label`.

## 08 Breakpoints

Tailwind defaults: sm 640, md 768, lg 1024, xl 1280.
- Mobile first. Every page works at 375px.
- Touch targets at least 44px.
- No horizontal scroll.

## 09 Motion

- 150ms micro interactions, 250ms panels, 400ms reveals.
- ease-out entering, ease-in leaving.
- Hero word rotation every 2.4s.
- `prefers-reduced-motion`: rotation stops on the first word, no reveal animations.
