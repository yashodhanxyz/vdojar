import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteShell } from "@/components/layout/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  catalogue,
  generateTitleMetadata,
  getRelatedTitles,
  getTitleById,
} from "@/data/catalogue";

interface TitlePageParams {
  id: string;
}

interface TitlePageProps {
  params: TitlePageParams;
}

export function generateStaticParams() {
  return catalogue.map((item) => ({ id: item.id }));
}

export function generateMetadata({ params }: TitlePageProps): Metadata {
  return generateTitleMetadata(params.id);
}

export default function TitlePage({ params }: TitlePageProps) {
  const title = getTitleById(params.id);

  if (!title) {
    notFound();
  }

  const related = getRelatedTitles(title.id, 6);

  const metaChips = [
    { label: "Release", value: title.releaseYear },
    { label: "Runtime", value: title.runtime },
    { label: "Rating", value: title.maturityRating },
    { label: "Languages", value: title.languages.join(" • ") },
  ];

  return (
    <SiteShell>
      <article className="bg-background text-foreground">
        <section className="relative isolate h-[70vh] min-h-[500px] overflow-hidden rounded-b-[3rem]">
          <Image
            src={title.backdrop}
            alt={`${title.title} backdrop`}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

          <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end gap-6 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
            <Link href="/" className="w-fit text-xs font-semibold uppercase tracking-[0.4em] text-white/60 hover:text-white">
              ← Back to Browse
            </Link>
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                <span className="flex h-2 w-2 rounded-full bg-accent" aria-hidden />
                <span>Now Streaming</span>
              </div>
              {title.badge ? <Badge>{title.badge}</Badge> : null}
              <h1 className="text-4xl font-semibold tracking-tight text-white drop-shadow-sm md:text-6xl">
                {title.title}
              </h1>
              <p className="text-base text-white/80 md:text-lg">{title.synopsis}</p>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.4em] text-white/60">
                {metaChips.map((chip) => (
                  <span key={chip.label} className="rounded-full border border-white/20 px-3 py-1">
                    {chip.value}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  href={title.watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[160px] justify-center"
                >
                  Watch on VDOJAR
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="min-w-[160px] justify-center opacity-70"
                  disabled
                >
                  Add to My List (soon)
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[2fr_1fr] lg:px-8">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">About the film</h2>
              <p className="text-sm leading-relaxed text-white/70">{title.description}</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                Genres & Themes
              </h3>
              <div className="flex flex-wrap gap-2">
                {title.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white"
                  >
                    {genre}
                  </span>
                ))}
                {title.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
                  >
                    #{tag.replace(/\s+/g, "-").toLowerCase()}
                  </span>
                ))}
              </div>
            </div>

            {title.cast || title.crew ? (
              <div className="grid gap-6 md:grid-cols-2">
                {title.cast ? (
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                      Cast
                    </h3>
                    <ul className="space-y-1 text-sm text-white/70">
                      {title.cast.map((person) => (
                        <li key={person}>{person}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {title.crew ? (
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                      Crew
                    </h3>
                    <ul className="space-y-1 text-sm text-white/70">
                      {title.crew.map((person) => (
                        <li key={person}>{person}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ) : null}

            <div className="glass-panel gradient-border rounded-3xl p-6 text-sm text-white/70">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                Creator’s note
              </h3>
              <p className="mt-2">
                “We built VDOJAR so films like this never get lost. Share it, review it, and help the filmmaker reach the next audience.”
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="glass-panel gradient-border overflow-hidden rounded-3xl">
              <div className="relative aspect-[2/3]">
                <Image
                  src={title.poster}
                  alt={title.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <span className="absolute bottom-3 left-4 rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  Stream free
                </span>
              </div>
              <div className="space-y-4 p-6 text-sm text-white/70">
                <p>Share this title</p>
                <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-white/60">
                  <Link href="https://www.facebook.com/sharer/sharer.php" target="_blank" rel="noreferrer">
                    Facebook
                  </Link>
                  <Link href="https://x.com/share" target="_blank" rel="noreferrer">
                    X
                  </Link>
                  <Link href="mailto:?subject=Watch%20this%20on%20VDOJAR" target="_blank" rel="noreferrer">
                    Email
                  </Link>
                </div>
                <Button href={title.watchUrl} target="_blank" rel="noopener noreferrer" className="w-full justify-center">
                  Watch now
                </Button>
              </div>
            </div>
            <div className="glass-panel rounded-3xl p-6 text-sm text-white/70">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                Watch offline soon
              </h3>
              <p className="mt-2">
                Download support and personalised watchlists are on the roadmap. Sign in to stay synced across devices once profiles launch.
              </p>
            </div>
          </aside>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">More like {title.title}</h2>
            <Button href="/" variant="ghost" className="text-sm text-white/70 hover:text-white">
              Back to homepage
            </Button>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/title/${item.id}`}
                className="group overflow-hidden rounded-2xl bg-surface/60 ring-1 ring-white/10 transition hover:-translate-y-1"
              >
                <div className="relative aspect-[2/3]">
                  <Image
                    src={item.poster}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    {item.genres[0]}
                  </span>
                </div>
                <div className="space-y-2 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    {item.genres.join(" • ")}
                  </p>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="line-clamp-3 text-sm text-white/60">{item.synopsis}</p>
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <span>{item.runtime}</span>
                    <span>•</span>
                    <span>{item.languages.join(", ")}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
