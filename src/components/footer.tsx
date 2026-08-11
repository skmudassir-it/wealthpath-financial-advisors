import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";
import { services } from "@/lib/services";
import { Icon } from "@/components/icon";
import { Logo } from "@/components/navbar";

export function Footer() {
  return (
    <footer className="px-4 pb-6 pt-16">
      <div className="glass-strong mx-auto max-w-6xl rounded-3xl px-8 py-12 sm:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Fiduciary financial planning and wealth management for families and
              businesses who want a plan they can trust.
            </p>
            <div className="flex gap-2.5">
              {siteConfig.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex size-11 items-center justify-center rounded-xl border border-white/70 bg-white/50 text-[#1e3a5f] transition-all hover:-translate-y-0.5 hover:border-[#c9a227]/60 hover:text-[#a8871c]"
                >
                  <i className={`${s.icon} text-base`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-[#1e3a5f]">
              Explore
            </h3>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-[#a8871c]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-[#1e3a5f]">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-[#a8871c]"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-[#1e3a5f]">
              Contact
            </h3>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Icon name="MapPin" className="mt-0.5 size-4 shrink-0 text-[#c9a227]" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.region}{" "}
                  {siteConfig.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Phone" className="size-4 shrink-0 text-[#c9a227]" />
                <a href="tel:+15550123456" className="transition-colors hover:text-[#a8871c]">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Mail" className="size-4 shrink-0 text-[#c9a227]" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-[#a8871c]"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Clock" className="size-4 shrink-0 text-[#c9a227]" />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#1e3a5f]/10 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            WealthPath Financial Advisors LLC is a registered investment adviser.
            Advisory services are fiduciary and fee-only.
          </p>
        </div>
      </div>
    </footer>
  );
}
