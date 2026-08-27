import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/10 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="wordmark text-lg">
              <span className="wordmark-main">Rapture</span>
              <span className="wordmark-accent">ATL</span>
            </Link>
            <p className="mt-5 max-w-xs text-paper/60">{site.tagline}</p>
            <div className="mt-6 flex gap-4">
              <a href={site.social.instagram} className="label text-paper/60 ink-link" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={site.social.tiktok} className="label text-paper/60 ink-link" target="_blank" rel="noreferrer">
                TikTok
              </a>
              <a href={site.social.youtube} className="label text-paper/60 ink-link" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </div>
          </div>

          <div>
            <h3 className="label text-spot">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-paper/70 ink-link hover:text-paper">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label text-spot">Company</h3>
            <ul className="mt-5 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-paper/70 ink-link hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/quote" className="text-paper/70 ink-link hover:text-paper">
                  Get a quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="label text-spot">Shop</h3>
            <address className="mt-5 space-y-4 not-italic text-paper/70">
              <p>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
              <p>
                {site.hours}
                <br />
                <span className="text-paper/45">{site.hoursNote}</span>
              </p>
              <p className="flex flex-col gap-1">
                <a href={site.phoneHref} className="ink-link hover:text-paper">
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="ink-link hover:text-paper">
                  {site.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-paper/10 pt-6 text-paper/40 sm:flex-row">
          <p className="label">
            © {year} {site.legalName}
          </p>
          <p className="label">Printed in Atlanta, Georgia</p>
        </div>
      </div>
    </footer>
  );
}
