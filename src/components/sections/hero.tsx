"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroItems } from "@/data/hero";

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    const interval = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 6500);
    return () => {
      emblaApi.off("select", onSelect);
      window.clearInterval(interval);
    };
  }, [emblaApi, onSelect]);

  const selectedHero = heroItems[selectedIndex] ?? heroItems[0];

  return (
    <section aria-label="Featured titles" className="relative isolate">
      <div className="relative h-[70vh] min-h-[460px] overflow-hidden rounded-b-[3rem] bg-black/60 backdrop-gradient md:h-[82vh]">
        <div className="absolute inset-0 -z-10">
          <div className="embla h-full" ref={emblaRef}>
            <div className="embla__container flex h-full">
              {heroItems.map((item) => (
                <div key={item.id} className="embla__slide relative h-full min-w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={item.id === heroItems[0].id}
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto flex h-full max-w-6xl items-center px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-7">
            <div className="inline-flex items-center gap-3 rounded-full bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
              <span className="flex h-2 w-2 rounded-full bg-accent" aria-hidden />
              <span>Featured Premiere</span>
            </div>
            <div className="space-y-4">
              {selectedHero.badge ? <Badge>{selectedHero.badge}</Badge> : null}
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                {selectedHero.category}
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white drop-shadow-md md:text-6xl">
                {selectedHero.title}
              </h1>
              <p className="text-base text-white/80 md:text-lg">
                {selectedHero.synopsis}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              {selectedHero.maturityRating ? (
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                  {selectedHero.maturityRating}
                </span>
              ) : null}
              {selectedHero.duration ? (
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wide">
                  {selectedHero.duration}
                </span>
              ) : null}
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wide">
                Indie Exclusive
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                href={selectedHero.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[150px] justify-center"
              >
                Watch on VDOJAR
              </Button>
              <Button
                variant="ghost"
                href={selectedHero.detailPath}
                className="min-w-[150px] justify-center"
              >
                View Details
              </Button>
              <Button
                type="button"
                variant="surface"
                disabled
                className="min-w-[150px] justify-center opacity-70"
              >
                Add to My List (soon)
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm text-white/70 md:w-2/3">
              <div className="rounded-xl bg-white/5 px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.4em] text-white/40">Festival</p>
                <p className="mt-1 font-semibold text-white">IFFI 2024 Selection</p>
              </div>
              <div className="rounded-xl bg-white/5 px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.4em] text-white/40">Language</p>
                <p className="mt-1 font-semibold text-white">
                  {selectedHero.category?.split(" • ")[0] ?? "Regional"}
                </p>
              </div>
              <div className="rounded-xl bg-white/5 px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.4em] text-white/40">Freshness</p>
                <p className="mt-1 font-semibold text-white">New this week</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto -mt-16 flex max-w-6xl flex-col gap-5 px-4 text-xs text-white/50 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {heroItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-1.5 w-8 rounded-full transition ${
                  index === selectedIndex ? "bg-white" : "bg-white/20"
                }`}
                aria-label={`View ${item.title}`}
                aria-pressed={index === selectedIndex}
              />
            ))}
          </div>
          <div className="hidden gap-3 text-sm sm:flex">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="rounded-full border border-white/20 px-4 py-1 transition hover:border-white/60"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="rounded-full border border-white/20 px-4 py-1 transition hover:border-white/60"
            >
              Next
            </button>
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {heroItems.map((item, index) => (
            <button
              key={`preview-${item.id}`}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              className={`relative overflow-hidden rounded-2xl border px-0 pb-0 transition ${
                index === selectedIndex
                  ? "border-white/60 shadow-[0_0_20px_rgba(229,9,20,0.4)]"
                  : "border-white/10 opacity-70 hover:opacity-100"
              }`}
            >
              <div className="relative h-20 w-32">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <span className="absolute bottom-2 left-3 text-[11px] font-semibold text-white line-clamp-1">
                  {item.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
