"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-spot text-paper md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <p className="label">{site.hours} · {site.address.city}, {site.address.state}</p>
          <a href={site.phoneHref} className="label ink-link">
            Call the shop {site.phone}
          </a>
        </div>
      </div>

      <div
        className={`border-b transition-colors duration-300 ${
          scrolled || open
            ? "border-paper/10 bg-ink/95 backdrop-blur"
            : "border-transparent bg-ink/70 backdrop-blur"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Link href="/" className="wordmark text-base sm:text-lg" aria-label={`${site.name} home`}>
            <span className="wordmark-main">Rapture</span>
            <span className="wordmark-accent">ATL</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {site.nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`label ink-link ${active ? "text-spot" : "text-paper/80 hover:text-paper"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/quote"
              className="hidden bg-paper px-5 py-3 text-ink transition-colors hover:bg-spot hover:text-paper sm:block"
            >
              <span className="label">Get a quote</span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center border border-paper/20 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 block h-px w-5 bg-paper transition-transform duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-5 bg-paper transition-transform duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-x-0 top-[73px] z-40 origin-top overflow-hidden border-b border-paper/10 bg-ink transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="display border-b border-paper/10 py-5 text-4xl text-paper hover:text-spot"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="mt-6 bg-spot px-6 py-5 text-center text-paper"
          >
            <span className="display text-3xl">Get a quote</span>
          </Link>
          <a href={site.phoneHref} className="label py-6 text-paper/60">
            {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
