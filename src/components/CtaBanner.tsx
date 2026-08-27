import Link from "next/link";
import Misprint from "./Misprint";
import { site } from "@/lib/site";

export default function CtaBanner({
  title = "Got a deadline?",
  body = "Tell us what you need and when you need it. You'll get a real price and an honest answer about the timeline.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-spot text-paper">
      <div
        aria-hidden="true"
        className="halftone pointer-events-none absolute inset-0 text-ink/20"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 sm:py-24 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2.5rem,8vw,6rem)]">
            <Misprint plain>{title}</Misprint>
          </h2>
          <p className="mt-6 text-lg text-paper/85 sm:text-xl">{body}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:pb-2">
          <Link
            href="/quote"
            className="bg-ink px-8 py-5 text-center transition-transform hover:-translate-y-0.5"
          >
            <span className="display text-2xl">Start a quote</span>
          </Link>
          <a
            href={site.phoneHref}
            className="border border-paper/50 px-8 py-5 text-center transition-colors hover:bg-paper hover:text-ink"
          >
            <span className="display text-2xl">{site.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
