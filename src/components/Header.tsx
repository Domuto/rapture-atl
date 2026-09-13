import Link from "next/link";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="relative z-50 border-b border-paper/10 bg-ink">
      <div className="mx-auto flex h-[73px] max-w-7xl items-center justify-between px-6">
        <Link href="/" className="wordmark text-xs sm:text-lg" aria-label={`${site.name} home`}>
          <span className="wordmark-main">Rapture Fabrications</span>
          <span className="wordmark-accent">ATL</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link href="/work" className="label ink-link text-paper/70 hover:text-paper">
            Our Work
          </Link>
          <Link href="/about" className="label ink-link text-paper/70 hover:text-paper">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
