# AGENTS.md

Instructions for any AI coding agent working on the RudrX Labs website
(Claude Code, Cursor, Codex, Copilot). Read this whole file first.

## 01 Purpose

The RudrX Labs website is the marketing site for a software studio that builds
custom business software (see docs/PRD.md). Extend it without breaking what
exists, in the style already established.

## 02 Before you start

1. Read docs/PRD.md: what we build and what is out of scope.
2. Read docs/DESIGN_SYSTEM.md: every visual decision. Use its tokens.
3. Read docs/ARCHITECTURE.md: where code lives and what may import what.
4. Check `src/components/ui` before creating a primitive.
5. Restate the task and list the files you expect to touch. Wait for a
   go-ahead if more than five files.

## 03 General rules

- Follow the design system. If a value is not there, ask.
- Content goes in `src/lib/content`, not hard-coded in components.
- Never invent stats, testimonials, client names or logos.
- Small, focused changes. Leave the project building after every change.
- No new dependencies, env variables or services without asking.

## 04 Code guidelines

- TypeScript strict. No `any`.
- Server components by default. `"use client"` only for interactivity
  (mobile menu, rotating word, contact form).
- Named exports, except Next.js route files which need default exports.
- Validate external input with the zod schema in `src/lib/validation`.
- Copy: plain, short, no exclamation marks. Headlines end with the blue period
  via `SectionHeading`.
- Every page sets `metadata` (title, description).

## 05 Security

- `RESEND_API_KEY` is read only in `src/lib/integrations/email.ts` (server-only).
- Never log the full enquiry body in production logs beyond what is needed.
- Escape user input in the email HTML.

## 06 Commands

```
npm install          install dependencies
npm run dev          dev server on http://localhost:3000
npm run build        production build (must pass)
npm run typecheck    TypeScript check
```

## 07 Definition of done

- Does what was asked, nothing else.
- `npm run typecheck` and `npm run build` pass.
- Works at 375px and matches DESIGN_SYSTEM.md.
- Docs updated if structure, decisions or components changed.

## 08 When to stop and ask

- The task conflicts with the PRD, design system or architecture.
- It needs a new dependency, secret or service.
- It would publish a client name, a number, or a quote.
