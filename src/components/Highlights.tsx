import { awards } from "@/lib/data";

export default function Highlights() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-center">
      <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-xs uppercase tracking-wider text-ink">
        Achievements
      </span>
      <h2 className="mx-auto mt-4 max-w-2xl font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">
        Recognition that came <span className="text-ink-muted">with</span> the
        work, not before it.
      </h2>

      <div className="mt-10 grid gap-x-8 gap-y-6 text-left sm:grid-cols-2">
        {awards.map((award) => (
          <div
            key={award.title}
            className="flex items-start gap-4 border-b border-line pb-6"
          >
            <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-blue" />
            <div>
              <p className="text-sm font-medium leading-snug text-ink">
                {award.title}
              </p>
              <p className="mt-1 text-xs text-ink-muted">
                {award.issuer} · {award.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
