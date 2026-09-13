import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="halftone pointer-events-none absolute inset-0 text-[#2fff00]/[0.07]"
      />
      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-4">
        <div className="flex flex-col justify-between gap-3 text-paper/40 sm:flex-row">
          <p className="label">
            © {year} {site.legalName}
          </p>
          <p className="label">Printed in Atlanta, Georgia</p>
        </div>

        <p className="mt-6 text-center text-xs uppercase text-paper/20">
          Website by{" "}
          <a
            href="https://ouragency.xyz/"
            target="_blank"
            rel="noreferrer"
            className="ink-link hover:text-paper/40"
          >
            Our Agency
          </a>
        </p>
      </div>
    </footer>
  );
}
