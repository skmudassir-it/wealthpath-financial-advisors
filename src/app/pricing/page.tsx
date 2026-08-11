import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BackgroundBlobs } from "@/components/background-blobs";
import { Icon } from "@/components/icon";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { FaqList } from "@/components/faq-list";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Pricing — Transparent, Fee-Only",
  description:
    "Simple, transparent pricing: 0.75% AUM fee tiering down at higher balances, plus planning-only engagements from $2,500/year. No commissions, no hidden fees.",
  alternates: { canonical: `${siteConfig.url}/pricing` },
};

const tiers = [
  {
    name: "Plan Only",
    tagline: "A written financial plan and annual reviews.",
    price: "$2,500",
    period: "/year",
    featured: false,
    features: [
      "Comprehensive written financial plan",
      "Quarterly check-in calls",
      "Tax & estate strategy reviews",
      "College & retirement projections",
      "Client portal access",
    ],
    cta: "Start planning",
  },
  {
    name: "Wealth Management",
    tagline: "Full fiduciary management of your portfolio.",
    price: "0.75%",
    period: "AUM / year",
    featured: true,
    features: [
      "Everything in Plan Only",
      "Discretionary portfolio management",
      "Tax-loss harvesting & rebalancing",
      "Insurance & estate coordination",
      "Direct advisor access",
      "Priority onboarding",
    ],
    cta: "Get a free quote",
  },
  {
    name: "Family Office",
    tagline: "Integrated multi-generational wealth care.",
    price: "Custom",
    period: "annual retainer",
    featured: false,
    features: [
      "Everything in Wealth Management",
      "Multi-generational planning",
      "Business & succession consulting",
      "Family governance meetings",
      "Dedicated advisory team",
    ],
    cta: "Talk to us",
  },
];

const pricingFaqs = [
  {
    q: "Are there any hidden fees or commissions?",
    a: "None. We are fee-only — we earn nothing from product sales, trading or referrals. The only fees you pay are the management fee (or planning retainer) disclosed in writing before you engage us.",
  },
  {
    q: "Does the AUM fee tier down for larger accounts?",
    a: "Yes. The 0.75% rate applies to the first $1M and decreases in steps at $1M, $3M and $10M. Household accounts are aggregated, so combined balances reach the lower tiers faster.",
  },
  {
    q: "What if I only want a one-time plan?",
    a: "Planning-only engagements start at $2,500 and include the written plan plus a 60-day implementation support window. Annual reviews are available as an add-on.",
  },
  {
    q: "How do you compare to the 1% industry average?",
    a: "Favorably — and transparently. Our blended fee across client households is roughly 0.62%, and we publish our average fee each year in our client transparency report.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative px-4 pb-10 pt-10 sm:pt-14">
        <BackgroundBlobs />
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c9a227]/40 bg-white/60 px-4 py-1.5 text-sm font-medium text-[#8a6d14] backdrop-blur-md">
              <span className="size-2 rounded-full bg-[#c9a227] animate-pulse" />
              Pricing
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-[#15233c] sm:text-5xl">
              Transparent fees.{" "}
              <span className="text-gradient">No surprises.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Every dollar we earn is disclosed in plain writing before you
              commit. No commissions, no 12b-1 fees, no product kickbacks — just
              clear value for clear advice.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ PRICING IMAGE + TILES ============ */}
      <section className="px-4 py-10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#1e3a5f]/20 via-transparent to-[#c9a227]/20 blur-2xl" />
              <Image
                src="/images/pricing.jpg"
                alt="Financial planning documents and charts on a modern glass desk"
                width={1024}
                height={640}
                sizes="(max-width: 1024px) 100vw, 480px"
                className="glass rounded-[1.75rem] object-cover shadow-2xl shadow-[#1e3a5f]/15"
              />
            </div>
          </Reveal>
          <Stagger className="grid gap-4 order-1 lg:order-2">
            {[
              ["Wallet", "No account minimums for planning", "Plan-only engagements start at $2,500/year with no asset threshold."],
              ["Target", "Fees that shrink as you grow", "Tiered AUM pricing rewards scale — blended average across clients is 0.62%."],
              ["FileCheck2", "One transparent invoice", "Quarterly statements show the fee, the math and the value in plain dollars."],
            ].map(([icon, t, d]) => (
              <StaggerItem key={t}>
                <div className="glass-card flex items-start gap-4 rounded-2xl p-6">
                  <span className="icon-badge shrink-0">
                    <Icon name={icon} className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-[#15233c]">{t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ TIERS ============ */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Engagements"
            title="Choose the relationship that fits"
            subtitle="All engagements include fiduciary duty, a written plan and direct access to your advisor."
          />
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {tiers.map((t) => (
              <StaggerItem key={t.name} className="h-full">
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-3xl p-8",
                    t.featured
                      ? "glass-strong border border-[#c9a227]/50 shadow-[0_20px_60px_rgba(30,58,95,0.18)]"
                      : "glass-card"
                  )}
                >
                  {t.featured && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#c9a227] to-[#e8c766] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#201a06] shadow-lg">
                      Most popular
                    </span>
                  )}
                  <h2 className="font-heading text-xl font-semibold text-[#15233c]">{t.name}</h2>
                  <p className="mt-1.5 text-sm text-muted-foreground">{t.tagline}</p>
                  <p className="mt-6 flex items-baseline gap-1.5">
                    <span className="font-heading text-4xl font-semibold text-[#1e3a5f]">{t.price}</span>
                    <span className="text-sm text-muted-foreground">{t.period}</span>
                  </p>
                  <ul className="mt-7 flex-1 space-y-3.5">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-[#26344f]">
                        <Icon name="CheckCircle2" className="mt-0.5 size-4 shrink-0 text-[#a8871c]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants(),
                      "mt-8 h-12 w-full rounded-xl text-base font-semibold",
                      t.featured ? "btn-gradient" : "btn-outline-glass"
                    )}
                  >
                    {t.cta}
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.15} className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">
              Fee comparisons on request — we&apos;ll happily show you what you&apos;d pay
              at the big wirehouse firms vs. with us, in writing.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="relative px-4 py-16">
        <BackgroundBlobs />
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Pricing questions" title="Asked & answered" subtitle="" />
          <Reveal>
            <FaqList faqs={pricingFaqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Worth more than it costs"
        subtitle="Most clients tell us the tax and fee savings alone exceed our fee in the first year. See for yourself — free."
      />
    </>
  );
}
