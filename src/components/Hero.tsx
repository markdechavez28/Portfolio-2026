import Image from "next/image";
import { profile } from "@/lib/data";

const roles = ["AI Research", "Data Analytics", "Computer Vision"];

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-10">
      <div className="gradient-mesh relative flex min-h-[420px] w-full flex-col justify-between overflow-hidden rounded-3xl p-6 text-white md:aspect-[21/9] md:p-10">
        {profile.photoUrl && (
          <>
            <Image
              src={profile.photoUrl}
              alt={profile.shortName}
              fill
              priority
              sizes="(min-width: 1152px) 1104px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/35" />
          </>
        )}

        <div className="relative z-10 flex flex-wrap items-start gap-2">
          {roles.map((role) => (
            <span
              key={role}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              {role}
            </span>
          ))}
        </div>

        <div className="relative z-10 max-w-xl">
          <h1 className="font-display text-3xl font-bold leading-tight md:text-5xl">
            {profile.heroHeadline}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
            {profile.tagline}
          </p>
        </div>

        <div className="relative z-10 flex items-end justify-between">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-full bg-white/10 px-3 py-2 pr-5 text-xs font-medium backdrop-blur transition-colors hover:bg-white/20"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
              ▶
            </span>
            Let&apos;s talk
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-xs font-medium text-black md:inline-block"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
