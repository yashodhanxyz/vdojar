"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { cn } from "@/lib/utils";
import type { RailSection } from "@/types/content";

interface RailProps {
  section: RailSection;
}

export function Rail({ section }: RailProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const offset = direction === "left" ? -container.clientWidth : container.clientWidth;
    container.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className="space-y-4"
    >
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <h2
              id={`${section.id}-title`}
              className="text-xl font-semibold text-white sm:text-2xl"
            >
              {section.title}
            </h2>
            {section.cta ? (
              <Link
                href={section.cta}
                className="hidden text-sm font-medium uppercase tracking-wide text-white/60 hover:text-white lg:inline"
              >
                View All
              </Link>
            ) : null}
          </div>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/40">
            {section.tagline ?? "Handpicked for you"}
          </p>
        </div>
        <div className="hidden gap-3 sm:flex">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="rounded-full border border-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 transition hover:border-white/50 hover:text-white"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="rounded-full border border-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 transition hover:border-white/50 hover:text-white"
          >
            Next
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background via-background/60 to-transparent" />
        <div
          ref={scrollContainerRef}
          className="rail-mask scrollbar-hide relative flex gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8"
        >
          {section.items.map((item, itemIndex) => {
            const isTopTen = section.variant === "topTen";
            const baseWidth = isTopTen ? "w-[220px] lg:w-[240px]" : "w-[150px] sm:w-[180px] lg:w-[200px]";
            return (
              <article
                key={item.id}
                className={cn(
                  "group relative flex-shrink-0",
                  baseWidth,
                  isTopTen && "pb-2",
                )}
              >
                {isTopTen ? (
                  <span className="absolute -left-6 bottom-8 hidden text-7xl font-black text-white/10 sm:inline">
                    {(itemIndex + 1).toString().padStart(2, "0")}
                  </span>
                ) : null}
                <div className="card-hover h-full overflow-hidden rounded-xl bg-surface-soft ring-1 ring-white/8">
                  <Link href={item.href} className="relative block aspect-[2/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 240px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    {isTopTen ? (
                      <span className="absolute left-3 top-3 rounded-full bg-white/20 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/90">
                        #{itemIndex + 1}
                      </span>
                    ) : null}
                    <span className="absolute inset-x-4 bottom-3 inline-flex items-center justify-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/90 transition group-hover:bg-accent">
                      View Details
                    </span>
                  </Link>
                  <div className="space-y-2 p-3">
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-white line-clamp-2">{item.title}</h3>
                      {item.meta ? (
                        <p className="text-xs text-white/60">{item.meta}</p>
                      ) : null}
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-white/60">
                      <Link
                        href={item.href}
                        className="rounded-full border border-white/10 px-3 py-1 font-semibold uppercase tracking-wide text-white/70 transition hover:border-white/40 hover:text-white"
                      >
                        Details
                      </Link>
                      {item.watchUrl ? (
                        <a
                          href={item.watchUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-white/10 px-3 py-1 font-semibold uppercase tracking-wide text-white transition hover:bg-white/20"
                        >
                          Watch
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
