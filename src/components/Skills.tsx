"use client";

import { useRef } from "react";
import { skills } from "@/lib/data";

export default function Skills() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-ink-muted">
            Technical Toolkit
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
            Tools and frameworks I reach for.
          </h2>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-ink transition-colors hover:bg-line"
          >
            ←
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-ink transition-colors hover:bg-line"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-8 flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {skills.map((group) => (
          <div
            key={group.category}
            className="flex min-w-[260px] flex-none flex-col gap-3 rounded-2xl bg-surface p-6"
            style={{ scrollSnapAlign: "start" }}
          >
            <span className="placeholder-box flex h-10 w-10 items-center justify-center rounded-xl text-xs font-medium text-ink-muted">
              {group.category.slice(0, 2)}
            </span>
            <h3 className="font-display text-base font-semibold text-ink">
              {group.category}
            </h3>
            <p className="text-sm leading-relaxed text-ink-muted">
              {group.items.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
