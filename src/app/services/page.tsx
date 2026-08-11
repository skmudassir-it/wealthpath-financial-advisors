import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BackgroundBlobs } from "@/components/background-blobs";
import { Icon } from "@/components/icon";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Services — Financial Planning & Wealth Management",
  description:
    "Seven integrated disciplines: retirement planning, investment management, tax strategy, estate planning, insurance review, college savings and wealth transfer — delivered by fiduciary advisors.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative px-4 pb-10 pt-10 sm:pt-14">
        <BackgroundBlobs />
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c9a227]/40 bg-white/60 px-4 py-1.5 text-sm font-medium text-[#8a6d14] backdrop-blur-md">
              <span className="size-2 rounded-full bg-[#c9a227] animate-pulse" />
              Our services
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-[#15233c] sm:text-5xl">
              Seven disciplines.{" "}
              <span className="text-gradient">One integrated plan.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Every service is delivered by an advisor who understands how it fits
              your whole financial life — so your retirement, taxes, estate,
              insurance and investments all pull in the same direction.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES GRID ============ */}
      <section className="px-4 py-16">
        <Stagger className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <StaggerItem key={s.slug} className={cn(i === 6 && "md:col-span-2 lg:col-span-1")}>
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
                    <h2 className="font-heading text-lg font-semibold text-[#15233c]">
                      {s.title}
                    </h2>
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
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="relative px-4 py-16">
        <BackgroundBlobs />
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Engagement model"
            title="Simple to start. Built to last."
            subtitle="One relationship, one plan, one team — whatever mix of services you need."
          />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Discovery", "A complimentary 90-minute conversation about your goals, numbers and fears."],
              ["02", "Written plan", "A stress-tested financial plan in plain English — yours to keep either way."],
              ["03", "Implementation", "We put the plan to work across accounts, policies and entities."],
              ["04", "Ongoing care", "Quarterly reviews, proactive tax moves and a team that answers the phone."],
            ].map(([n, t, d]) => (
              <StaggerItem key={n} className="h-full">
                <div className="glass-card flex h-full flex-col rounded-2xl p-7">
                  <span className="font-heading text-3xl font-semibold text-[#c9a227]">{n}</span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-[#15233c]">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.15} className="mt-12 text-center">
            <Link
              href="/contact"
              className={cn(buttonVariants(), "btn-gradient h-12 rounded-xl px-8 text-base font-semibold")}
            >
              Discuss your goals
              <Icon name="ArrowRight" className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
