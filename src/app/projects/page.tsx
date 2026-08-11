import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BackgroundBlobs } from "@/components/background-blobs";
import { Icon } from "@/components/icon";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Case Studies — Real Plans, Real Results",
  description:
    "See how WealthPath Financial Advisors helped real families and business owners retire early, cut taxes, fund college and transfer wealth across generations.",
  alternates: { canonical: `${siteConfig.url}/projects` },
};

export default function ProjectsPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative px-4 pb-10 pt-10 sm:pt-14">
        <BackgroundBlobs />
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c9a227]/40 bg-white/60 px-4 py-1.5 text-sm font-medium text-[#8a6d14] backdrop-blur-md">
              <span className="size-2 rounded-full bg-[#c9a227] animate-pulse" />
              Case studies
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-[#15233c] sm:text-5xl">
              Real plans.{" "}
              <span className="text-gradient">Real results.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A few stories from families and business owners who trusted us with
              their money, their fears and their biggest life transitions.
              Names and details anonymized; outcomes as reported by clients.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section className="px-4 py-16">
        <Stagger className="mx-auto flex max-w-6xl flex-col gap-16">
          {projects.map((p, i) => (
            <StaggerItem key={p.slug}>
              <article
                id={p.slug}
                className={cn(
                  "glass grid items-start gap-8 rounded-3xl p-6 sm:p-10 lg:grid-cols-[0.95fr_1.05fr]",
                  i % 2 === 1 && "lg:[&>div:first-child]:order-2"
                )}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={p.image}
                    alt={`${p.title} — case study`}
                    width={1024}
                    height={640}
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-[#1e3a5f] backdrop-blur-md">
                    {p.industry}
                  </span>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#15233c] sm:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-1.5 text-sm font-medium text-[#a8871c]">{p.client}</p>

                  <p className="mt-5 text-[15px] leading-relaxed text-[#26344f]">{p.summary}</p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[#1e3a5f]/10 bg-white/55 p-5">
                      <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1e3a5f]">
                        <Icon name="Target" className="size-4 text-[#c9a227]" />
                        The challenge
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{p.challenge}</p>
                    </div>
                    <div className="rounded-2xl border border-[#1e3a5f]/10 bg-white/55 p-5">
                      <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1e3a5f]">
                        <Icon name="Compass" className="size-4 text-[#c9a227]" />
                        Our approach
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{p.approach}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {p.results.map((r) => (
                      <div key={r.label} className="rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#2e5585] p-4 text-center shadow-[0_8px_24px_rgba(30,58,95,0.3)]">
                        <p className="font-heading text-lg font-semibold text-[#e8c766]">{r.value}</p>
                        <p className="mt-1 text-[11px] font-medium leading-tight text-white/80">{r.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {p.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[#c9a227]/40 bg-[#c9a227]/10 px-3 py-1 text-xs font-medium text-[#8a6d14]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {p.quote && (
                    <blockquote className="mt-6 border-l-2 border-[#c9a227] pl-5">
                      <p className="text-[15px] italic leading-relaxed text-[#26344f]">“{p.quote.text}”</p>
                      <footer className="mt-2 text-sm font-medium text-muted-foreground">
                        — {p.quote.author}, {p.quote.role}
                      </footer>
                    </blockquote>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ============ CTA ============ */}
      <section className="px-4 pb-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#15233c]">
            Your story could be next.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Every case study started with the same step: a free, no-obligation
            conversation.
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              "btn-gradient mt-8 inline-flex h-13 rounded-xl px-8 text-base font-semibold"
            )}
          >
            Start your case study
            <Icon name="ArrowRight" className="size-4" />
          </Link>
        </Reveal>
      </section>

      <CtaBand
        title="What would your numbers say?"
        subtitle="Bring us your questions and a recent statement. We'll show you the plan before you pay a cent."
      />
    </>
  );
}
