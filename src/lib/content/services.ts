import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    icon: "Boxes",
    title: "Inventory & point of sale",
    body: "Know what you have, what sold and what to reorder.",
    points: ["Sales and stock tracking", "Barcode and low-stock alerts", "Staff roles and accountability"],
  },
  {
    icon: "Truck",
    title: "Distribution & ordering",
    body: "Connect manufacturers, distributors and retailers in one flow.",
    points: ["B2B portals and storefronts", "Tiered pricing and credit", "Order tracking end to end"],
  },
  {
    icon: "LayoutDashboard",
    title: "Internal tools & dashboards",
    body: "Replace the spreadsheets your team lives in.",
    points: ["Admin panels and approvals", "Reporting and exports", "Role-based access"],
  },
  {
    icon: "Workflow",
    title: "Automation & integrations",
    body: "Stop re-keying data between tools.",
    points: ["Connect your existing apps", "Automated emails and alerts", "APIs and webhooks"],
  },
  {
    icon: "Rocket",
    title: "Product & MVP development",
    body: "Turn an idea into a working product your customers can use.",
    points: ["Web and mobile-ready apps", "Auth, billing and dashboards", "Launch-ready in weeks"],
  },
  {
    icon: "Sparkles",
    title: "AI features",
    body: "Add AI where it saves real time, not as a gimmick.",
    points: ["Natural-language search", "Smart suggestions", "Document and data extraction"],
  },
];

export const engagement = [
  { title: "Free intro call", body: "30 minutes. We learn the problem and tell you honestly if custom software is the right answer." },
  { title: "Scope and quote", body: "A written scope, timeline and fixed price for version one. No surprises." },
  { title: "Weekly builds", body: "You see and test working software every week, not a big reveal at the end." },
  { title: "Launch and support", body: "Deployment, training and an ongoing support plan. You own the code." },
];
