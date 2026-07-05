"use client";

import { useState } from "react";
import { experiences } from "@/lib/data";

export default function ExperienceAccordion() {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    experiences.map((_, i) => i),
  );

  const toggle = (i: number) => {
    setOpenIndexes((current) =>
      current.includes(i) ? current.filter((idx) => idx !== i) : [...current, i],
    );
  };

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-[0.3fr_0.7fr] md:items-end">
        <p className="text-xs uppercase tracking-wider text-ink-muted">
          2024 - Present
          <br />
          Internships & Leadership
        </p>
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-xs uppercase tracking-wider text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-blue" />
            More about my work
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Discover the roles that shaped how I work.
          </h2>
        </div>
      </div>

      <div className="mt-10 border-t border-line">
        {experiences.map((exp, i) => {
          const isOpen = openIndexes.includes(i);
          return (
            <div key={exp.org} className="border-b border-line">
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-sm text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span className="block text-xs uppercase tracking-wider text-ink-muted">
                    {exp.tag}
                  </span>
                  <span className="mt-1 block font-display text-xl font-semibold text-ink">
                    {exp.role} · {exp.org}
                  </span>
                </span>
                <span
                  className={`text-xl text-ink transition-transform ${isOpen ? "rotate-45" : ""}`}
                >
                  ↗
                </span>
              </button>

              {isOpen && (
                <div className="grid gap-6 rounded-2xl bg-surface p-6 mb-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10">
                  <div className="placeholder-box flex w-full max-w-[180px] flex-col gap-1 rounded-xl p-4">
                    <span className="font-display text-2xl font-bold text-ink">
                      {exp.metric.value}
                    </span>
                    <span className="text-xs text-ink-muted">
                      {exp.metric.label}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-ink-muted">
                    {exp.summary}
                  </p>

                  <a
                    href={exp.link}
                    target={exp.link.startsWith("#") ? undefined : "_blank"}
                    rel={exp.link.startsWith("#") ? undefined : "noopener noreferrer"}
                    className="w-fit rounded-full bg-accent px-5 py-2.5 text-xs font-medium text-accent-foreground whitespace-nowrap"
                  >
                    {exp.linkLabel}
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
