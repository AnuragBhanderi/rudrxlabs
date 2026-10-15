import { Check, Package, ScanBarcode, Truck } from "lucide-react";
import { cn } from "@/lib/utils/cn";

/* Illustrative UI mocks. Data is sample data, not client data. */

function Window({ url, children, className }: { url: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("@container overflow-hidden rounded-[18px] border border-border bg-white shadow-elevated", className)} aria-hidden>
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate rounded-full bg-white px-3 py-1 font-mono text-[11px] text-muted">{url}</span>
      </div>
      {children}
    </div>
  );
}

const sellItems = [
  { name: "Cold brew coffee", price: "3.50", stock: 24 },
  { name: "Sparkling water", price: "2.00", stock: 41 },
  { name: "Trail mix", price: "4.25", stock: 3 },
  { name: "Energy bar", price: "2.75", stock: 18 },
  { name: "Instant noodles", price: "3.00", stock: 9 },
  { name: "Orange juice", price: "3.25", stock: 2 },
];

export function StockDMock({ className }: { className?: string }) {
  return (
    <Window url="stockd.app/sell" className={className}>
      <div className="grid gap-4 p-4 @lg:grid-cols-[1.5fr_1fr] @lg:p-5">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <p className="font-display text-sm font-bold">Sell</p>
            <span className="inline-flex items-center gap-1 rounded-full bg-surface px-2 py-1 font-mono text-[10px] text-muted">
              <ScanBarcode className="size-3" /> Scan
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {sellItems.map((item, i) => (
              <div
                key={item.name}
                className={cn(
                  "rounded-md border p-2.5",
                  i === 0 ? "border-primary bg-primary-soft" : "border-border bg-white",
                )}
              >
                <p className="truncate text-[12px] font-medium">{item.name}</p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-text">${item.price}</span>
                  <span className={cn("font-mono text-[10px]", item.stock <= 3 ? "text-danger" : "text-muted")}>
                    {item.stock} left
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col rounded-md bg-surface p-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">Current sale</p>
          <div className="mt-2 space-y-1.5 text-[12px]">
            <div className="flex justify-between"><span>Cold brew × 2</span><span className="font-mono">7.00</span></div>
            <div className="flex justify-between"><span>Trail mix × 1</span><span className="font-mono">4.25</span></div>
          </div>
          <div className="mt-3 flex justify-between border-t border-border pt-2 text-sm font-semibold">
            <span>Total</span>
            <span className="font-mono">$11.25</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            <span className="rounded-md border border-border bg-white py-2 text-center text-[11px] font-semibold">Cash</span>
            <span className="rounded-md bg-primary py-2 text-center text-[11px] font-semibold text-white">Card</span>
          </div>
          <div className="mt-3 rounded-md border border-warning/30 bg-warning/10 p-2 text-[10px] leading-snug text-warning">
            2 items low on stock
          </div>
        </div>
      </div>
    </Window>
  );
}

const stages = ["Placed", "Confirmed", "Processing", "Ready", "In transit", "Delivered"];
const orders = [
  { id: "ORD-1042", buyer: "Retail · Ahmedabad", value: "₹48,200", stage: 4 },
  { id: "ORD-1041", buyer: "Wholesale · Surat", value: "₹1,12,500", stage: 2 },
  { id: "ORD-1039", buyer: "Retail · Rajkot", value: "₹22,800", stage: 5 },
];

export function DistributeMock({ className }: { className?: string }) {
  return (
    <Window url="distribute.rudrxlabs.com/orders" className={className}>
      <div className="p-4 @lg:p-5">
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: Package, label: "Open orders", value: "18" },
            { icon: Truck, label: "In transit", value: "6" },
            { icon: Check, label: "Delivered (30d)", value: "142" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="rounded-md border border-border p-2.5">
              <Icon className="size-3.5 text-primary" />
              <p className="mt-1.5 font-mono text-lg font-medium leading-none">{value}</p>
              <p className="mt-1 truncate text-[10px] text-muted">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2.5">
          {orders.map((o) => (
            <div key={o.id} className="rounded-md border border-border p-3">
              <div className="flex items-center justify-between text-[12px]">
                <span className="font-mono font-medium">{o.id}</span>
                <span className="font-mono">{o.value}</span>
              </div>
              <p className="mt-0.5 text-[11px] text-muted">{o.buyer}</p>
              <div className="mt-2 flex gap-1">
                {stages.map((s, i) => (
                  <span key={s} className={cn("h-1.5 flex-1 rounded-full", i <= o.stage ? "bg-primary" : "bg-surface-2")} />
                ))}
              </div>
              <p className="mt-1.5 font-mono text-[10px] text-primary">{stages[o.stage]}</p>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}

export const productMocks: Record<string, (props: { className?: string }) => React.ReactNode> = {
  stockd: StockDMock,
  distribute: DistributeMock,
};
