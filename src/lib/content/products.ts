import type { Product } from "@/types/content";

// Client names stay out until they approve (docs/ARCHITECTURE.md, section 06).
export const products: Product[] = [
  {
    slug: "stockd",
    name: "StockD",
    category: "Point of sale & inventory",
    status: "In production",
    summary:
      "Sales and inventory for a motel's snack and drink shop. Staff ring up a sale in a few taps, and stock updates itself.",
    problem:
      "The shop ran on a paper sales sheet and a weekly hand count. Nobody knew what sold, who sold it, or what was about to run out until the shelf was empty.",
    outcome:
      "Every sale is recorded on a tablet or phone at the counter, tied to the staff member who made it, and lowers stock automatically. The owner sees sales, stock and low-stock alerts without counting a shelf.",
    audience: "Front-desk staff and the owner of an independent motel in Texas",
    highlights: ["Tap-to-sell counter screen", "Live stock levels", "Per-staff accountability"],
    features: [
      {
        title: "Sell in a few taps",
        body: "A counter screen built for speed: pick items, choose cash or card, done. Barcode scanning supported.",
      },
      {
        title: "Stock that keeps itself",
        body: "Each sale lowers stock. Restocking is pick the item, enter the count. Low-stock levels flag items before they run out.",
      },
      {
        title: "PIN sign-in per employee",
        body: "Every sale is tied to the person who made it. Lockouts, PIN resets and roles are handled by the owner.",
      },
      {
        title: "Owner admin",
        body: "Manage items, prices, barcodes and staff. Owner-only stock adjustments keep the numbers honest.",
      },
      {
        title: "Works on any device",
        body: "A mobile-first web app installable on a tablet or phone. No special hardware to buy.",
      },
      {
        title: "Built to be simple",
        body: "Made for non-technical staff. Speed on the sell screen matters more than features, so it stays focused.",
      },
    ],
    stack: ["Java 21", "Spring Boot 3", "PostgreSQL", "React", "TypeScript", "PWA", "Docker"],
    facts: [
      { label: "Replaced", value: "Paper sales sheet + weekly count" },
      { label: "Users", value: "Shop staff and owner" },
      { label: "Devices", value: "Tablet, phone, desktop" },
    ],
  },
  {
    slug: "distribute",
    name: "RudrX Distribute",
    category: "B2B distribution platform",
    status: "In development",
    summary:
      "One platform that connects a manufacturer, its distributors and their retail customers, from catalog to delivery.",
    problem:
      "Orders moved from retailer to distributor to manufacturer over phone calls and WhatsApp. Pricing, stock, credit and payment status lived in separate notebooks and spreadsheets.",
    outcome:
      "Three connected portals share one source of truth. The manufacturer manages products and fulfilment, the distributor sets its own prices and tracks orders, and retailers order online and follow every step to delivery.",
    audience: "A cosmetics manufacturer, its distributors, and wholesale and retail buyers",
    highlights: ["Three connected portals", "Independent pricing per tier", "Order tracking end to end"],
    features: [
      {
        title: "Manufacturer admin",
        body: "Product catalog with SKU, HSN and GST, inventory and reorder levels, vendor management and an order fulfilment queue.",
      },
      {
        title: "Distributor portal",
        body: "Browse the manufacturer catalog, list products with your own markup, forward orders and manage customers.",
      },
      {
        title: "Customer storefront",
        body: "Wholesalers and retailers browse, order, and track delivery. Credit limits and outstanding balances are visible.",
      },
      {
        title: "One order lifecycle",
        body: "Placed → confirmed → processing → ready for pickup → in transit → delivered. Every party sees the same status.",
      },
      {
        title: "Credit and payments",
        body: "Track credit limits, outstanding balances and payment reconciliation for every account.",
      },
      {
        title: "Shared platform",
        body: "A monorepo with shared UI, types and data layer, so new features ship to all three apps at once.",
      },
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Turborepo"],
    facts: [
      { label: "Apps", value: "3 connected portals" },
      { label: "Parties", value: "Manufacturer, distributor, retailer" },
      { label: "Order stages", value: "6 tracked stages" },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
