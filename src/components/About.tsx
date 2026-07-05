import { pillars } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="overflow-hidden border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-xs uppercase tracking-wider text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              About Me
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              From <span className="text-ink-muted">government-funded</span>{" "}
              research to <span className="text-ink-muted">enterprise</span>{" "}
              customer analytics to{" "}
              <span className="text-ink-muted">whatever</span> ships next.
            </h2>
            <a
              href="#experience"
              className="mt-6 inline-block rounded-full bg-accent px-5 py-2.5 text-xs font-medium text-accent-foreground"
            >
              Explore the work →
            </a>
          </div>

          <div className="flex flex-col gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex gap-4 border-b border-line pb-6 last:border-none last:pb-0"
              >
                <span className="placeholder-box flex h-11 w-11 flex-none items-center justify-center rounded-xl text-xs font-medium text-ink-muted">
                  {pillar.tag.slice(0, 2)}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
