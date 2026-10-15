"use client";

import { useEffect, useState } from "react";

export function RotatingWord({ words, interval = 2400 }: { words: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="relative inline-block">
      {/* Screen readers get the full list once instead of a changing word. */}
      <span className="sr-only">{words.join(", ")}</span>
      <span key={index} aria-hidden className="inline-block animate-word-in text-primary">
        {words[index]}
      </span>
    </span>
  );
}
