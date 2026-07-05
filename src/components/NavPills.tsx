import { navLinks } from "@/lib/data";

export default function NavPills({ dark = false }: { dark?: boolean }) {
  return (
    <nav
      className={`hidden items-center gap-1 rounded-full p-1 text-sm md:flex ${
        dark ? "bg-white/10" : "bg-surface"
      }`}
    >
      {navLinks.map((link, i) => (
        <a
          key={link.href}
          href={link.href}
          className={`rounded-full px-4 py-2 transition-colors ${
            i === 0
              ? dark
                ? "bg-black-foreground text-black"
                : "bg-elevated text-ink shadow-sm"
              : dark
                ? "text-black-muted hover:text-black-foreground"
                : "text-ink-muted hover:text-ink"
          }`}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
