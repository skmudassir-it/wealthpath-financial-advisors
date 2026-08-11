import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BackgroundBlobs } from "@/components/background-blobs";
import { Icon } from "@/components/icon";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { FaqList } from "@/components/faq-list";
import { CtaBand } from "@/components/cta-band";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.title} — Wealth Management Services`,
    description: service.short,
    alternates: { canonical: `${siteConfig.url}/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${siteConfig.shortName}`,
      description: service.short,
      url: `${siteConfig.url}/services/${service.slug}`,
      images: [{ url: service.image, width: 1200, height: 675, alt: service.title }],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative px-4 pb-10 pt-10 sm:pt-14">
        <BackgroundBlobs />
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <Link
                href="/services"
                className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-[#1e3a5f]/15 bg-white/60 px-4 py-1.5 text-sm font-medium text-[#1e3a5f] backdrop-blur-md transition-colors hover:border-[#c9a227]/50"
              >
                <Icon name="ChevronLeft" className="size-3.5" />
                All services
              </Link>
            </Reveal>
            <Reveal delay={0.08}>
              <span className="icon-badge mb-6">
                <Icon name={service.icon} className="size-6" />
              </span>
              <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-[#15233c] sm:text-5xl">
                {service.title}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {service.intro}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className={cn(buttonVariants(), "btn-gradient h-13 rounded-xl px-8 text-base font-semibold")}
                >
                  {service.cta}
                  <Icon name="ArrowRight" className="size-4" />
                </Link>
                <Link
                  href="/pricing"
                  className={cn(buttonVariants(), "btn-outline-glass h-13 rounded-xl px-8 text-base font-semibold")}
                >
                  View pricing
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#c9a227]/25 via-transparent to-[#1e3a5f]/25 blur-2xl" />
            <Image
              src={service.image}
              alt={`${service.title} — WealthPath Financial Advisors`}
              width={1024}
              height={640}
              priority
              sizes="(max-width: 1024px) 100vw, 512px"
              className="glass rounded-[1.75rem] object-cover shadow-2xl shadow-[#1e3a5f]/20"
            />
          </Reveal>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What's included"
            title={`How we deliver ${service.title.toLowerCase()}`}
            subtitle="Every engagement is scoped to your situation — these are the core capabilities our advisors bring."
          />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((f) => (
              <StaggerItem key={f.title} className="h-full">
                <div className="glass-card flex h-full items-start gap-4 rounded-2xl p-6">
                  <span className="icon-badge shrink-0">
                    <Icon name="CheckCircle2" className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-[#15233c]">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ PROCESS + OUTCOMES ============ */}
      <section className="relative px-4 py-16">
        <BackgroundBlobs />
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our process"
              title="How it works"
              subtitle=""
            />
            <Stagger className="space-y-4">
              {service.process.map((step, i) => (
                <StaggerItem key={step}>
                  <div className="glass-card flex items-start gap-5 rounded-2xl p-6">
                    <span className="font-heading text-2xl font-semibold text-[#c9a227]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 text-[15px] leading-relaxed text-[#26344f]">{step}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="What you get"
              title="Outcomes that matter"
              subtitle=""
            />
            <Stagger className="grid gap-4 sm:grid-cols-1">
              {service.outcomes.map((o) => (
                <StaggerItem key={o}>
                  <div className="glass-card flex items-center gap-4 rounded-2xl px-6 py-5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#c9a227] to-[#e8c766] text-[#201a06]">
                      <Icon name="Check" className="size-4" strokeWidth={3} />
                    </span>
                    <p className="font-medium text-[#15233c]">{o}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.1} className="mt-8">
              <div className="glass rounded-2xl p-7">
                <h3 className="font-heading text-lg font-semibold text-[#15233c]">
                  Not sure if this is for you?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Book a complimentary consultation and we&apos;ll map your situation to
                  the right services — no pitch, no pressure.
                </p>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants(),
                    "btn-gradient mt-5 h-12 rounded-xl px-7 text-base font-semibold"
                  )}
                >
                  Book a free consultation
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Questions"
            title={`${service.title} — asked & answered`}
            subtitle=""
          />
          <Reveal>
            <FaqList faqs={service.faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={`Ready to start your ${service.title.toLowerCase()} plan?`}
        subtitle="A senior advisor will walk you through exactly how we'd approach your situation — before you commit to anything."
      />
    </>
  );
}
