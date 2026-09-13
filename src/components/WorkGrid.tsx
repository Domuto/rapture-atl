"use client";

import Image from "next/image";
import { workItems, type WorkItem } from "@/lib/content";

const tone: Record<WorkItem["tone"], string> = {
  spot: "bg-spot text-ink",
  flash: "bg-flash text-ink",
  gold: "bg-gold text-ink",
  paper: "bg-paper text-ink",
};

export default function WorkGrid() {
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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workItems.map((item) => (
          <article key={item.title} className="group">
            <div className="relative aspect-4/5 overflow-hidden bg-ink">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`transition-transform duration-700 group-hover:scale-105 ${
                    item.contain ? "object-contain" : "object-cover"
                  }`}
                />
              ) : (
                <div className={`flex h-full w-full items-center justify-center ${tone[item.tone]}`}>
                  <div aria-hidden="true" className="halftone absolute inset-0 text-ink/25" />
                  <span className="display relative px-6 text-center text-3xl">{item.method}</span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
