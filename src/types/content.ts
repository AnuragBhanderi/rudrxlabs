export type Feature = { title: string; body: string };

export type Product = {
  slug: string;
  name: string;
  category: string;
  status: string;
  summary: string;
  problem: string;
  outcome: string;
  audience: string;
  highlights: string[];
  features: Feature[];
  stack: string[];
  facts: { label: string; value: string }[];
};

export type Service = { icon: string; title: string; body: string; points: string[] };

export type Faq = { q: string; a: string };
