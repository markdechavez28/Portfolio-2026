import { profile } from "@/lib/data";
import NavPills from "@/components/NavPills";

export default function Footer() {
  return (
    <footer id="contact" className="mt-12 bg-black text-black-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="hidden text-xs text-black-muted md:block">
          {profile.status}
        </span>
        <NavPills dark />
        <span className="hidden text-xs text-black-muted md:block">
          {profile.title}
        </span>
      </div>

      <div className="dot-pattern mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.6fr_0.4fr]">
        <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">
          Campaigning tech
          <br />
          for good.
        </h2>

        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <p className="text-xs uppercase tracking-wider text-black-muted">
              Location
            </p>
            <p className="mt-2 leading-relaxed">{profile.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-black-muted">
              Connect
            </p>
            <a href={profile.linkedin} className="mt-2 block hover:underline">
              LinkedIn
            </a>
            <a href={profile.github} className="block hover:underline">
              GitHub
            </a>
          </div>
          <div className="col-span-2">
            <p className="text-xs uppercase tracking-wider text-black-muted">
              Email
            </p>
            <a href={`mailto:${profile.email}`} className="mt-2 block hover:underline">
              {profile.email}
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 text-xs text-black-muted">
        <span>
          © {new Date().getFullYear()} {profile.shortName}
        </span>
        <a href="#top" className="flex items-center gap-2 hover:text-black-foreground">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}
