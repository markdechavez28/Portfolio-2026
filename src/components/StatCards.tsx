import { statCards } from "@/lib/data";
import { ArrowUpRightIcon } from "@/components/Icons";

const toneClasses: Record<(typeof statCards)[number]["tone"], string> = {
  blue: "bg-blue text-blue-foreground",
  light: "bg-surface text-ink",
  gradient: "gradient-mesh text-white",
};

export default function StatCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-6">
      <div className="grid gap-4 md:grid-cols-3">
        {statCards.map((card) => (
          <div
            key={card.eyebrow}
            className={`flex items-center justify-between gap-4 rounded-2xl p-5 ${toneClasses[card.tone]}`}
          >
            <div>
              <p className="text-[11px] uppercase tracking-wider opacity-70">
                {card.eyebrow}
              </p>
              <p className="mt-1 font-display text-2xl font-bold">{card.value}</p>
              <p className="mt-1 max-w-[22ch] text-xs leading-snug opacity-80">
                {card.label}
              </p>
            </div>
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-ink/10">
              <ArrowUpRightIcon />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
