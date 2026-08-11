import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";
import { stats, companyValues, faqs } from "@/lib/content";
import { BackgroundBlobs } from "@/components/background-blobs";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icon";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { FaqList } from "@/components/faq-list";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Financial Planning & Wealth Management`,
  description:
    "Fiduciary financial advisors in San Diego. Retirement planning, investment management, tax strategy, estate planning and more — built around one plan: yours.",
};

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative px-4 pb-10 pt-8 sm:pt-12">
        <BackgroundBlobs />
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c9a227]/40 bg-white/60 px-4 py-1.5 text-sm font-medium text-[#8a6d14] backdrop-blur-md">
                <span className="size-2 rounded-full bg-[#c9a227] animate-pulse" />
                Fiduciary · Fee-only · Advice-first
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-[#15233c] sm:text-5xl lg:text-6xl">
                Your wealth deserves{" "}
                <span className="text-gradient">a clear path</span>, not a gamble.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                WealthPath Financial Advisors builds comprehensive financial plans —
                retirement, investing, taxes, estate and insurance — and walks beside
                you for the long journey. 26 years of experience, zero conflicts of
                interest.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants(),
                    "btn-gradient h-13 rounded-xl px-8 text-base font-semibold"
                  )}
                >
                  Book a free consultation
                  <Icon name="ArrowRight" className="size-4" />
                </Link>
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants(),
                    "btn-outline-glass h-13 rounded-xl px-8 text-base font-semibold"
                  )}
                >
                  Explore services
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6">
                {[
                  ["$2.4B+", "Assets guided"],
                  ["1,900+", "Families served"],
                  ["98%", "Client retention"],
                ].map(([v, l]) => (
                  <div key={l} className="border-l-2 border-[#c9a227]/60 pl-4">
                    <dt className="sr-only">{l}</dt>
                    <dd className="font-heading text-2xl font-semibold text-[#1e3a5f]">{v}</dd>
                    <dd className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {l}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative">
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#c9a227]/25 via-transparent to-[#1e3a5f]/25 blur-2xl" />
              <Image
                src="/images/hero.jpg"
                alt="Modern financial advisory office at golden hour with city skyline"
                width={1024}
                height={640}
                priority
                sizes="(max-width: 1024px) 100vw, 512px"
                className="glass rounded-[1.75rem] object-cover shadow-2xl shadow-[#1e3a5f]/20"
              />
              <div className="glass-strong absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl px-5 py-4 sm:-left-10">
                <span className="icon-badge icon-badge-gold">
                  <Icon name="TrendingUp" className="size-5" />
                </span>
                <div>
                  <p className="font-heading text-lg font-semibold text-[#15233c]">
                    +11.2% avg. annual growth*
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Client portfolios, 15-year horizon
                  </p>
                </div>
              </div>
              <div className="glass-strong absolute -top-5 -right-3 flex items-center gap-2.5 rounded-2xl px-4 py-3 sm:-right-6">
                <Icon name="ShieldCheck" className="size-5 text-[#a8871c]" />
                <p className="text-sm font-semibold text-[#15233c]">100% fiduciary</p>
              </div>
            </div>
            <p className="mt-10 text-center text-[11px] text-muted-foreground/80">
              *Hypothetical illustration for marketing purposes. Past performance does not guarantee future results.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className="px-4 py-12">
        <Stagger className="glass mx-auto grid max-w-6xl grid-cols-2 gap-6 rounded-3xl px-8 py-10 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="text-center">
              <p className="font-heading text-3xl font-semibold text-[#1e3a5f] sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1.5 text-sm font-medium text-muted-foreground">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ============ WHY US / FEATURES ============ */}
      <section className="relative px-4 py-20">
        <BackgroundBlobs />
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Why WealthPath"
            title="Advice you can actually trust"
            subtitle="Most firms sell products. We build plans — then choose tools only when the plan requires them."
          />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <div className="glass-card flex h-full flex-col rounded-2xl p-7">
                  <span className="icon-badge mb-5">
                    <Icon name={v.icon} className="size-6" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-[#15233c]">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ SERVICES GRID ============ */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our services"
            title="Seven disciplines. One integrated plan."
            subtitle="Every service is delivered by an advisor who understands how it fits your whole financial life."
          />
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <Link href={`/services/${s.slug}`} className="group block h-full">
                  <div className="glass-card relative flex h-full flex-col overflow-hidden rounded-2xl">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12263f]/55 to-transparent" />
                      <span className="icon-badge absolute bottom-3 left-5 border-white/60 bg-white/75 backdrop-blur-md">
                        <Icon name={s.icon} className="size-5" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-heading text-lg font-semibold text-[#15233c]">
                        {s.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {s.short}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#a8871c]">
                        Learn more
                        <Icon
                          name="ArrowUpRight"
                          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ GROWTH / APPROACH ============ */}
      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#1e3a5f]/20 via-transparent to-[#c9a227]/20 blur-2xl" />
              <Image
                src="/images/growth.jpg"
                alt="Glass skyscraper atrium with golden sunlight, symbolizing growth"
                width={1024}
                height={640}
                sizes="(max-width: 1024px) 100vw, 512px"
                className="glass rounded-[1.75rem] object-cover shadow-2xl shadow-[#1e3a5f]/15"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Our approach"
              title="Planning first. Products second. Always."
              subtitle=""
            />
            <Reveal delay={0.1}>
              <p className="-mt-6 mb-8 text-base leading-relaxed text-muted-foreground">
                We start with a written plan that maps every dollar to a goal. Only then
                do we talk about portfolios, policies and products — and only the ones
                the plan actually needs.
              </p>
            </Reveal>
            <Stagger className="space-y-4">
              {[
                ["01", "Listen & map", "We learn your goals, fears and numbers in a 90-minute discovery session."],
                ["02", "Design the plan", "You receive a written, stress-tested financial plan — not a sales pitch."],
                ["03", "Implement together", "We put the plan into action across accounts, policies and entities."],
                ["04", "Review every quarter", "Markets move and life happens. Your plan adapts, every quarter, for life."],
              ].map(([n, t, d]) => (
                <StaggerItem key={n}>
                  <div className="glass-card flex items-start gap-5 rounded-2xl p-6">
                    <span className="font-heading text-2xl font-semibold text-[#c9a227]">{n}</span>
                    <div>
                      <h3 className="font-semibold text-[#15233c]">{t}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="relative px-4 py-20">
        <BackgroundBlobs />
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Client stories"
            title="Trusted by families for 26 years"
            subtitle="Real words from clients who brought us their money, their fears and their biggest life transitions."
          />
          <Reveal>
            <TestimonialSlider />
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Common questions"
            title="Before you ask — here's the honest answers"
          />
          <Reveal>
            <FaqList faqs={faqs} />
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CtaBand />
    </>
  );
}
