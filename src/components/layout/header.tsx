import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#trending", label: "Browse" },
  { href: "/#festival", label: "Festivals" },
  { href: "/#documentaries", label: "Docs" },
  { href: "/#short-films", label: "Shorts" },
];

const quickLinks = [
  { href: "/#continue-watching", label: "Continue" },
  { href: "/#top-ten", label: "Top 10" },
  { href: "/#spotlight", label: "Spotlight" },
  { href: "/#curations", label: "Curations" },
];

export function Header({ sticky = true }: { sticky?: boolean }) {
  return (
    <header
      className={cn(
        "top-0 z-40 w-full border-b border-white/5 transition-[background-color,backdrop-filter]",
        sticky ? "sticky backdrop-blur bg-[#000309]/80" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative block h-10 w-32">
            <Image
              src="/media/branding/logo.png"
              alt="VDOJAR"
              fill
              priority
              sizes="(max-width: 640px) 120px, 160px"
              className="object-contain transition duration-300 group-hover:scale-105"
            />
          </span>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.4em] text-white/60 sm:inline">
            Indie Film OTT
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-2 text-sm font-medium md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-3 py-2 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 text-sm">
          <span className="hidden items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-white/60 sm:flex">
            <span className="flex h-2 w-2 rounded-full bg-accent" aria-hidden />
            <span>Beta access</span>
          </span>
          <Button
            href="#"
            variant="ghost"
            className="hidden rounded-full px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white sm:inline-flex"
          >
            EN
          </Button>
          <Button
            variant="ghost"
            className="rounded-full px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white"
          >
            Search
            <span className="sr-only">Search catalogue</span>
          </Button>
          <Button href="#" variant="surface" className="hidden rounded-full px-4 py-2 sm:inline-flex">
            Submit Film
          </Button>
          <Button
            href="#"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-[var(--shadow-glow)] hover:bg-accent/90"
          >
            Join Free
          </Button>
        </div>
      </div>

      <div className="hidden border-t border-white/5 bg-black/30 backdrop-blur-sm md:block">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs uppercase tracking-[0.4em] text-white/40 sm:px-6 lg:px-8">
          <span className="text-white/50">EXPLORE</span>
          <div className="flex flex-wrap gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium text-white/60 transition hover:border-white/40 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
