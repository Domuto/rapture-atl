import Link from "next/link";
import Misprint from "@/components/Misprint";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-6 py-24">
      <p className="label text-paper/45">Error 404</p>
      <h1 className="mt-6 text-[clamp(3rem,12vw,9rem)]">
        <Misprint>Off register.</Misprint>
      </h1>
      <p className="mt-8 max-w-lg text-lg text-paper/65">
        That page isn&apos;t on the rack. Head back to the front or tell us what you were
        looking for.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="bg-spot px-8 py-5 transition-transform hover:-translate-y-0.5">
          <span className="display text-2xl">Back home</span>
        </Link>
        <Link
          href="/quote"
          className="border border-paper/25 px-8 py-5 transition-colors hover:bg-paper hover:text-ink"
        >
          <span className="display text-2xl">Get a quote</span>
        </Link>
      </div>
    </section>
  );
}
