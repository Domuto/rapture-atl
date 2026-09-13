"use client";

import { useState } from "react";
import Image from "next/image";
import { workCategories, workItems, type WorkItem } from "@/lib/content";

const tone: Record<WorkItem["tone"], string> = {
  spot: "bg-spot text-ink",
  flash: "bg-flash text-ink",
  gold: "bg-gold text-ink",
  paper: "bg-paper text-ink",
};

export default function WorkGrid() {
  const [filter, setFilter] = useState<string>("All");
  const shown = filter === "All" ? workItems : workItems.filter((w) => w.category === filter);

  return (
    <div>
      <div className="relative mb-10 aspect-video overflow-hidden border border-paper/12 sm:aspect-[21/9]">
        <video
          className="h-full w-full object-cover"
          src="/work/press.mp4"
          poster="/work/press-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent"
        />
        <span className="label absolute bottom-5 left-5 flex items-center gap-2 text-paper/80">
          <span className="regmark text-spot" />
          On the press
        </span>
      </div>

      <div className="flex flex-wrap gap-3" role="group" aria-label="Filter work by category">
        {workCategories.map((cat) => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={active}
              className={`label border px-5 py-3 transition-colors ${
                active
                  ? "border-spot bg-spot text-paper"
                  : "border-paper/20 text-paper/60 hover:border-paper hover:text-paper"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((item) => (
          <article key={item.title} className="group">
            <div className="relative aspect-4/5 overflow-hidden">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className={`flex h-full w-full items-center justify-center ${tone[item.tone]}`}>
                  <div aria-hidden="true" className="halftone absolute inset-0 text-ink/25" />
                  <span className="display relative px-6 text-center text-3xl">{item.method}</span>
                </div>
              )}
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h3 className="display text-2xl">{item.title}</h3>
              <span className="label text-paper/40">{item.category}</span>
            </div>
            <p className="mt-1 text-paper/60">
              {item.method} · {item.detail}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
