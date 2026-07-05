"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { featuredProjects } from "@/lib/data";

export default function ProjectSpotlight() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  const cycle = (dir: 1 | -1) => {
    const next =
      (activeIndex + dir + featuredProjects.length) % featuredProjects.length;
    scrollToIndex(next);
  };

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el || el.clientWidth === 0) return;
    setActiveIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end justify-between gap-6">
        <p className="text-xs uppercase tracking-wider text-ink-muted">
          / Featured Project
        </p>
        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => cycle(-1)}
            aria-label="Previous project"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-ink transition-colors hover:bg-line"
          >
            ←
          </button>
          <button
            onClick={() => cycle(1)}
            aria-label="Next project"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-surface text-ink transition-colors hover:bg-line"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="mt-5 flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {featuredProjects.map((project) => (
          <div
            key={project.title}
            className="grid w-full flex-none snap-start gap-8 rounded-3xl bg-surface p-6 md:grid-cols-2 md:items-center md:p-10"
          >
            <div className="relative flex aspect-[4/3] w-full items-end overflow-hidden rounded-2xl p-6 text-white">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 552px, 100vw"
                className="project-photo object-cover"
              />
              <div className="project-photo-scrim absolute inset-0" />
              <span className="absolute right-6 top-6 z-10 rounded-full bg-white/15 px-3 py-1.5 text-xs uppercase tracking-wider backdrop-blur">
                {project.tag}
              </span>
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>

              {project.metric && (
                <div className="mt-5 flex w-fit items-center gap-3 rounded-2xl bg-elevated p-4 shadow-sm">
                  <div>
                    <p className="font-display text-2xl font-bold text-ink">
                      {project.metric.value}
                    </p>
                    <p className="text-xs text-ink-muted">{project.metric.label}</p>
                  </div>
                </div>
              )}

              {project.link && (
                <a
                  href={project.link}
                  className="mt-6 inline-block rounded-full bg-accent px-5 py-2.5 text-xs font-medium text-accent-foreground"
                >
                  Explore More →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {featuredProjects.map((p, i) => (
          <button
            key={p.title}
            onClick={() => scrollToIndex(i)}
            aria-label={`Show ${p.title}`}
            className={`h-1.5 rounded-full transition-all ${
              i === activeIndex ? "w-8 bg-ink" : "w-1.5 bg-line"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
