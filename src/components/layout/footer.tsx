import Link from "next/link";

const footerLinks = [
  {
    title: "Watch",
    items: [
      { label: "Browse All", href: "/#trending" },
      { label: "Documentaries", href: "/#documentaries" },
      { label: "Short Films", href: "/#short-films" },
    ],
  },
  {
    title: "Discover",
    items: [
      { label: "Festival Picks", href: "/#festival" },
      { label: "Curated Collections", href: "/#curations" },
      { label: "Top 10 Today", href: "/#top-ten" },
    ],
  },
  {
    title: "For Creators",
    items: [
      { label: "Submit Your Film", href: "#" },
      { label: "Pitch Originals", href: "#" },
      { label: "Partner Program", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:px-8">
        <div className="space-y-5">
          <div className="space-y-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-lg font-semibold tracking-wide text-white">VDOJAR</span>
              <span className="rounded-full border border-white/15 px-2 py-0.5 text-[11px] uppercase tracking-[0.3em] text-white/60">
                Indie Hub
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Streaming undiscovered films and bold new voices. No subscription fees—just curated cinema from across India and beyond.
            </p>
          </div>
          <form className="glass-panel gradient-border relative flex max-w-sm flex-col gap-3 rounded-2xl px-4 py-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">Stay in the loop</p>
            <label className="text-sm text-white/70" htmlFor="newsletter-email">
              Receive festival drops, filmmaker spotlights, and platform updates.
            </label>
            <div className="flex items-center gap-2">
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                className="h-10 flex-1 rounded-full border border-white/10 bg-black/40 px-4 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-accent/90"
              >
                Join
              </button>
            </div>
            <p className="text-[11px] text-white/40">
              We respect inboxes. Expect one update a month.
            </p>
          </form>
          <div className="flex gap-3 text-sm text-white/60">
            <Link href="#" className="transition hover:text-white">
              Instagram
            </Link>
            <Link href="#" className="transition hover:text-white">
              YouTube
            </Link>
            <Link href="#" className="transition hover:text-white">
              LinkedIn
            </Link>
          </div>
        </div>
        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70">
              {section.title}
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              {section.items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5 bg-black/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} VDOJAR. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white/70">
              Terms
            </Link>
            <Link href="#" className="hover:text-white/70">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white/70">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
