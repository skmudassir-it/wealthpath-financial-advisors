import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { companyValues, stats } from "@/lib/content";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BackgroundBlobs } from "@/components/background-blobs";
import { Icon } from "@/components/icon";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About Us — Fiduciary Financial Advisors",
  description:
    "WealthPath Financial Advisors is a fiduciary, fee-only financial planning firm serving families and businesses. Learn about our story, values and 26 years of experience.",
  alternates: { canonical: `${siteConfig.url}/about` },
};

const timeline = [
  {
    year: "1999",
    title: "Founded in San Diego",
    text: "Two planners with a shared frustration — an industry that sold products instead of plans — start a fee-only firm with three clients and a conference room.",
  },
  {
    year: "2007",
    title: "The first stress-test",
    text: "Our planning-first approach proves itself in the financial crisis. Not one client sold at the bottom. Retention that year: 100%.",
  },
  {
    year: "2014",
    title: "Families, not just accounts",
    text: "We expand into multi-generational planning — estate, college and wealth transfer — and our second generation of clients begins arriving.",
  },
  {
    year: "2020",
    title: "National reach",
    text: "Virtual planning opens the door to clients in 40+ states, with the same local, personal service from our Harbor Bay office.",
  },
  {
    year: "Today",
    title: "1,900+ families and counting",
    text: "A team of 34 advisors, planners and analysts — still fee-only, still fiduciary, still plan-first. 98% of our clients stay with us year after year.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative px-4 pb-10 pt-10 sm:pt-14">
        <BackgroundBlobs />
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c9a227]/40 bg-white/60 px-4 py-1.5 text-sm font-medium text-[#8a6d14] backdrop-blur-md">
                <span className="size-2 rounded-full bg-[#c9a227] animate-pulse" />
                About WealthPath
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-[#15233c] sm:text-5xl">
                Built by planners.{" "}
                <span className="text-gradient">Trusted for 26 years.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                We started WealthPath with a simple conviction: families deserve
                advice that puts them first — legally, structurally and
                culturally. Today we guide $2.4 billion for 1,900+ families, and
 that conviction hasn&apos;t changed a day since.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className={cn(buttonVariants(), "btn-gradient h-13 rounded-xl px-8 text-base font-semibold")}
                >
                  Meet us for coffee
                  <Icon name="ArrowRight" className="size-4" />
                </Link>
                <Link
                  href="/services"
                  className={cn(buttonVariants(), "btn-outline-glass h-13 rounded-xl px-8 text-base font-semibold")}
                >
                  Explore services
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#c9a227]/25 via-transparent to-[#1e3a5f]/25 blur-2xl" />
            <Image
              src="/images/about.jpg"
              alt="The WealthPath advisory team collaborating in a bright modern office"
              width={1024}
              height={640}
              priority
              sizes="(max-width: 1024px) 100vw, 512px"
              className="glass rounded-[1.75rem] object-cover shadow-2xl shadow-[#1e3a5f]/20"
            />
            <div className="glass-strong absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl px-5 py-4 sm:-left-10">
              <span className="icon-badge icon-badge-gold">
                <Icon name="Users" className="size-5" />
              </span>
              <div>
                <p className="font-heading text-lg font-semibold text-[#15233c]">34 advisors</p>
                <p className="text-xs text-muted-foreground">CFP®-dominated team</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className="px-4 py-12">
        <Stagger className="glass mx-auto grid max-w-6xl grid-cols-2 gap-6 rounded-3xl px-8 py-10 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="text-center">
              <p className="font-heading text-3xl font-semibold text-[#1e3a5f] sm:text-4xl">{s.value}</p>
              <p className="mt-1.5 text-sm font-medium text-muted-foreground">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ============ OUR STORY / TIMELINE ============ */}
      <section className="relative px-4 py-20">
        <BackgroundBlobs />
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our story"
            title="Twenty-six years of showing up"
            subtitle="From three clients in a conference room to a national firm — the chapters in between."
          />
          <Stagger className="mx-auto max-w-3xl space-y-0">
            {timeline.map((t, i) => (
              <StaggerItem key={t.year}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  {i < timeline.length - 1 && (
                    <span className="absolute left-[26px] top-14 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-[#c9a227]/50 to-[#1e3a5f]/15" />
                  )}
                  <span className="z-10 flex size-[52px] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2e5585] font-heading text-sm font-semibold text-[#e8c766] shadow-[0_6px_16px_rgba(30,58,95,0.3)]">
                    {t.year.slice(2)}
                  </span>
                  <div className="glass-card flex-1 rounded-2xl p-6">
                    <h3 className="font-heading text-lg font-semibold text-[#15233c]">{t.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our values"
            title="The principles we won't trade"
            subtitle=""
          />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <div className="glass-card flex h-full flex-col rounded-2xl p-7">
                  <span className="icon-badge mb-5">
                    <Icon name={v.icon} className="size-6" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-[#15233c]">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ SECURITY / COMMITMENT ============ */}
      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionHeading
              align="left"
              eyebrow="Your trust, secured"
              title="A fiduciary standard with teeth"
              subtitle=""
            />
            <Reveal delay={0.1}>
              <p className="-mt-6 mb-8 text-base leading-relaxed text-muted-foreground">
                Fiduciary isn&apos;t a slogan for us — it&apos;s a legal and
                structural commitment. We are fee-only: we earn nothing from selling
                products, recommending one fund over another, or churning your
                accounts. Our ADV Part 2 is public record, our fees are in plain
                dollars, and our compensation is disclosed before you sign
                anything.
              </p>
            </Reveal>
            <Stagger className="grid gap-4 sm:grid-cols-2">
              {[
                ["ShieldCheck", "Registered & regulated", "SEC-registered investment adviser with a verified fiduciary duty."],
                ["FileCheck2", "Fee-only, period", "No commissions, no 12b-1 fees, no product sales. Ever."],
                ["Scale", "Conflict-free research", "Independent research and custody partners chosen on merit."],
                ["Lock", "Bank-grade security", "256-bit encryption, biometric access and SIPC protection."],
              ].map(([icon, t, d]) => (
                <StaggerItem key={t}>
                  <div className="glass-card flex h-full items-start gap-4 rounded-2xl p-5">
                    <span className="icon-badge shrink-0">
                      <Icon name={icon} className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-[#15233c]">{t}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{d}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal className="relative order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#1e3a5f]/20 via-transparent to-[#c9a227]/20 blur-2xl" />
              <Image
                src="/images/security.jpg"
                alt="Glass architecture of the WealthPath office with warm golden light"
                width={1024}
                height={640}
                sizes="(max-width: 1024px) 100vw, 512px"
                className="glass rounded-[1.75rem] object-cover shadow-2xl shadow-[#1e3a5f]/15"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Come see the difference for yourself"
        subtitle="Meet the team, tour the office, and get an honest read on where you stand financially — on us."
      />
    </>
  );
}
