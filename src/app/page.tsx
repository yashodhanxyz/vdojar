import Image from "next/image";
import Link from "next/link";

import { SiteShell } from "@/components/layout/site-shell";
import { Hero } from "@/components/sections/hero";
import { Rail } from "@/components/sections/rail";
import { Button } from "@/components/ui/button";
import { railSections } from "@/data/rails";
import { heroItems } from "@/data/hero";
import { catalogue } from "@/data/catalogue";

const continueWatching = heroItems.slice(0, 3).map((item) => ({
  ...item,
  progress: Math.floor(Math.random() * 70) + 20,
}));

const quickFilters = [
  { label: "Regional Gems", href: "#trending" },
  { label: "Festival Favourites", href: "#festival" },
  { label: "Top 10", href: "#top-ten" },
  { label: "Documentaries", href: "#documentaries" },
  { label: "Shorts < 30 mins", href: "#short-films" },
];

const spotlightPicks = catalogue.slice(0, 3);

const curations = [
  {
    title: "Voices of the Festival Circuit",
    description: "Award-winning titles from IFFI, MAMI, and more indie festivals across India.",
    href: "#festival",
  },
  {
    title: "Bold Indian Documentaries",
    description: "Unscripted journeys chronicling migration, music, and movements.",
    href: "#documentaries",
  },
  {
    title: "Under 30 Minutes",
    description: "Powerful short films to binge between meetings (or during them).",
    href: "#short-films",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <Hero />

      <div className="mt-16 space-y-16 pb-24">
        <section
          id="discover"
          className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Start with a vibe</p>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">Quick Picks for Tonight</h2>
            </div>
            <Button href="#" variant="ghost" className="rounded-full text-sm text-white/70 hover:text-white">
              Personalised profiles soon →
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            {quickFilters.map((filter) => (
              <Link
                key={filter.label}
                href={filter.href}
                className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/70 transition hover:border-white/50 hover:text-white"
              >
                {filter.label}
              </Link>
            ))}
          </div>
        </section>

        <section
          id="continue-watching"
          aria-labelledby="continue-watching-title"
          className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 id="continue-watching-title" className="text-xl font-semibold text-white">
                Continue Watching
              </h2>
              <p className="text-sm text-white/60">
                Pick up where you left off across devices.
              </p>
            </div>
            <Button href="#" variant="ghost" className="hidden text-sm text-white/70 hover:text-white sm:inline-flex">
              View History
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {continueWatching.map((item) => (
              <article
                key={item.id}
                className="card-hover flex flex-col overflow-hidden rounded-xl bg-surface/40 p-4 ring-1 ring-white/10"
              >
                <Link
                  href={item.detailPath}
                  className="relative mb-4 block aspect-video overflow-hidden rounded-lg"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-3 text-xs text-white/70">
                    <span className="rounded border border-white/30 px-2 py-1 text-[11px] font-semibold">
                      {item.maturityRating}
                    </span>
                    <span>{item.duration}</span>
                  </div>
                </Link>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.synopsis}</p>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    {item.category}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button
                      href={item.watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-semibold"
                    >
                      Resume
                    </Button>
                    <Button
                      href={item.detailPath}
                      variant="ghost"
                      className="px-4 py-2 text-xs font-semibold"
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {railSections.map((section) => (
          <Rail key={section.id} section={section} />
        ))}

        <section
          id="spotlight"
          className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8"
          aria-labelledby="spotlight-heading"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Curated Spotlight</p>
              <h2 id="spotlight-heading" className="text-2xl font-semibold text-white sm:text-3xl">
                Editors’ Picks
              </h2>
            </div>
            <Button href="#" variant="ghost" className="text-sm text-white/70 hover:text-white">
              Meet the curation team
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {spotlightPicks.map((item) => (
              <article
                key={item.id}
                className="glass-panel gradient-border flex h-full flex-col overflow-hidden rounded-3xl"
              >
                <Link href={`/title/${item.id}`} className="relative block aspect-[16/9]">
                  <Image
                    src={item.backdrop}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <span className="absolute bottom-3 left-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    {item.genres[0]}
                  </span>
                </Link>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-white/50">
                    <span>New</span>
                    <span>•</span>
                    <span>{item.releaseYear}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="line-clamp-3 text-sm text-white/70">{item.synopsis}</p>
                  <div className="mt-auto flex items-center gap-3 text-xs text-white/60">
                    <span>{item.runtime}</span>
                    <span>•</span>
                    <span>{item.languages.join(", ")}</span>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button href={`/title/${item.id}`} className="flex-1 justify-center">
                      Explore Title
                    </Button>
                    <Button
                      href={item.watchUrl}
                      variant="ghost"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 justify-center"
                    >
                      Watch Now
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="curations"
          className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8"
          aria-labelledby="curations-heading"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Need inspiration?</p>
              <h2 id="curations-heading" className="text-2xl font-semibold text-white sm:text-3xl">
                Curated Collections
              </h2>
            </div>
            <Button href="#" variant="ghost" className="text-sm text-white/70 hover:text-white">
              View all collections
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {curations.map((collection) => (
              <Link
                key={collection.title}
                href={collection.href}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/40 hover:bg-white/10"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">Collection</p>
                <h3 className="mt-2 text-lg font-semibold text-white group-hover:translate-x-1 transition">
                  {collection.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{collection.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/70 group-hover:text-white">
                  Dive In →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-white/5 px-6 py-14 sm:px-12">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">Apps coming soon</p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Stream anywhere. Discover unheard stories.
              </h2>
              <p className="text-white/70">
                Watch on mobile, tablet, desktop, and smart TVs. Download the VDOJAR app to take festival-favourite films offline and stay tuned as we roll out personalised profiles and My List soon.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" href="#">
                  Download on App Store
                </Button>
                <Button variant="surface" href="#">
                  Get it on Google Play
                </Button>
              </div>
            </div>
            <div className="glass-panel gradient-border flex flex-col gap-3 rounded-3xl px-6 py-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Coming up</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Personalised profiles and multi-user watchlists</li>
                <li>• Offline downloads for select documentaries</li>
                <li>• Creator dashboard to track views and revenue</li>
              </ul>
              <Button href="#" variant="ghost" className="self-start text-sm text-white/70 hover:text-white">
                Join beta waitlist →
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
