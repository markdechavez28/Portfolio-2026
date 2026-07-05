import Image from "next/image";
import { otherProjects, profile } from "@/lib/data";

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-ink-muted">
            More from the archive
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
            Other projects
          </h2>
        </div>
        <a
          href="#work"
          className="hidden text-xs uppercase tracking-wider text-ink underline md:inline-block"
        >
          Explore →
        </a>
      </div>

      <div className="mt-8 flex flex-col">
        {otherProjects.map((project) => (
          <article
            key={project.title}
            className="group flex items-center gap-6 border-b border-line py-6 transition-colors hover:bg-surface"
          >
            <div className="relative h-20 w-28 flex-none overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="112px"
                className="project-photo object-cover"
              />
            </div>
            <div className="flex-1">
              <span className="text-xs uppercase tracking-wider text-ink-muted">
                {project.tag}
                {project.org ? ` · ${project.org}` : ""}
              </span>
              <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-ink">
                {project.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>
            </div>
            {project.link && (
              <a
                href={project.link}
                aria-label={`View ${project.title}`}
                className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-surface text-ink transition-colors group-hover:bg-line"
              >
                ↗
              </a>
            )}
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 border-t border-line pt-10 text-center">
        <p className="text-sm text-ink-muted">Get to see more of my projects.</p>
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2.5 text-xs font-medium text-accent-foreground transition-opacity hover:opacity-85"
          >
            GitHub ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-surface px-5 py-2.5 text-xs font-medium text-ink transition-colors hover:bg-line"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
