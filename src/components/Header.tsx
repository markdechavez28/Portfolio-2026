import { profile } from "@/lib/data";
import NavPills from "@/components/NavPills";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="border-b border-line bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <a href="#top" className="font-display text-sm font-bold tracking-wide text-ink">
          {profile.logoText}
        </a>

        <NavPills />

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-xs text-ink md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-blue" />
            {profile.status}
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
