# PRD: RudrX Labs website

## 01 Product overview

| Field | Value |
| --- | --- |
| Product name | RudrX Labs website (rudrxlabs.com) |
| Tagline | Beyond Solutions. Custom software for growing businesses. |
| Description | The marketing site for RudrX Labs, a software studio that designs and builds custom business software. It shows what we build (StockD, RudrX Distribute), how we work, and turns visitors into qualified enquiries through a contact form. |
| Stage | MVP |
| Platform | Web (marketing site, mostly static) |

## 02 Problem

Small and mid-sized businesses run on paper sheets, spreadsheets and tools that
do not talk to each other. Off-the-shelf SaaS does not fit how they actually
work, and agencies quote months and large budgets for custom software.

Today, an owner has to re-key orders, count stock by hand and chase status over
WhatsApp because no affordable tool fits their workflow. This costs them hours
every week, stock mistakes and lost sales.

## 03 Goal

Help business owners understand in under a minute that RudrX Labs can build the
software their business needs, in weeks not months, and get them to send an
enquiry.

## 04 Target users

Primary user:
- Who: owner or operations lead at a small or mid-sized business (retail,
  hospitality, distribution, manufacturing, services). North America and India first.
- Trigger: a manual process is breaking as they grow (stock counts, orders,
  approvals, reporting), or an off-the-shelf tool does not fit.
- Today they use: paper, Excel or Google Sheets, WhatsApp, a generic SaaS tool.
- They will switch because: we build exactly their workflow, fast, using an
  AI-agent development process that keeps cost and timelines low.

Secondary users:
- Partners and early clients checking credibility: they need real products,
  a clear process, and a way to reach the founder.

Not for:
- Enterprises looking for large RFP-driven vendors. The site does not
  speak to procurement processes.

## 05 Core features

| # | Feature | What the user can do | Done when |
| --- | --- | --- | --- |
| 1 | Home page | Understand what RudrX builds, see products, see the process | All home sections render, work at 375px, Lighthouse performance and accessibility >= 90 |
| 2 | Product pages | Read about StockD and RudrX Distribute: problem, features, stack | /work/stockd and /work/distribute exist with real content |
| 3 | Services page | See what we build for clients and how an engagement works | /services lists services and engagement steps |
| 4 | About page | Read the RudrX story (Rudra + X) and the founder | /about exists |
| 5 | Contact form | Send name, email, company, project type, budget, message | Valid submission returns success and an email reaches the inbox. Invalid input shows field errors. Spam honeypot and rate limit active. |
| 6 | SEO basics | Find the site in search and share links | Each page has title, description, Open Graph tags. sitemap.xml and robots.txt exist. |

Key user flow:
1. Visitor lands on the home page from LinkedIn, search, or a referral.
2. They scan the hero, the problems and the products.
3. They click "Start a project" and send the contact form.

## 06 Success metrics

| Metric | Target | Measured by |
| --- | --- | --- |
| Contact form submissions | 5+ qualified per month by month 3 | Inbox / analytics event |
| Home to contact click-through | 4%+ of sessions | Analytics |
| Core Web Vitals | All green | Vercel Speed Insights / PageSpeed |

## 07 Out of scope

- Blog and CMS (v2).
- Pricing page. Custom work is quoted per project.
- Testimonials and client logos until real, approved quotes exist.
- Booking calendar embed (v2, Cal.com).
- Client login or customer portal.
- Multi-language.

## 08 Open questions

- Can we name the StockD client (the motel) and the Distribute manufacturer
  publicly? Until confirmed, the site describes them without names.
- Final contact email address. Placeholder: hello@rudrxlabs.com.
- Screenshots of StockD and Distribute for the product pages (currently
  illustrated with built-in UI mocks).
- Founder photo and LinkedIn URL for the About page.
