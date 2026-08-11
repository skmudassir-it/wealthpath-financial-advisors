import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BackgroundBlobs } from "@/components/background-blobs";
import { Icon } from "@/components/icon";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us — Book a Free Consultation",
  description:
    "Get in touch with WealthPath Financial Advisors. Book a complimentary 30-minute consultation, call, email or visit our San Diego office.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const contactCards = [
  {
    icon: "Phone",
    title: "Call us",
    lines: [siteConfig.phone, "Mon–Fri, 8 AM – 6 PM PT"],
    href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`,
    cta: "Call now",
  },
  {
    icon: "Mail",
    title: "Email us",
    lines: [siteConfig.email, "Replies within one business day"],
    href: `mailto:${siteConfig.email}`,
    cta: "Send email",
  },
  {
    icon: "MapPin",
    title: "Visit us",
    lines: [siteConfig.address.street, `${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`],
    href: "https://maps.google.com/?q=Harbor+Bay+Plaza+San+Diego+CA",
    cta: "Get directions",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative px-4 pb-10 pt-10 sm:pt-14">
        <BackgroundBlobs />
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c9a227]/40 bg-white/60 px-4 py-1.5 text-sm font-medium text-[#8a6d14] backdrop-blur-md">
              <span className="size-2 rounded-full bg-[#c9a227] animate-pulse" />
              Contact
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-[#15233c] sm:text-5xl">
              Let&apos;s talk about{" "}
              <span className="text-gradient">your future.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Book a complimentary 30-minute consultation. No pressure, no
              jargon — just a clear picture of where you stand and what&apos;s
              possible.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ CONTACT CARDS ============ */}
      <section className="px-4 py-10">
        <Stagger className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          {contactCards.map((c) => (
            <StaggerItem key={c.title} className="h-full">
              <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block h-full">
                <div className="glass-card flex h-full flex-col rounded-2xl p-7">
                  <span className="icon-badge mb-5">
                    <Icon name={c.icon} className="size-6" />
                  </span>
                  <h2 className="font-heading text-lg font-semibold text-[#15233c]">{c.title}</h2>
                  {c.lines.map((l) => (
                    <p key={l} className="mt-1 text-sm text-muted-foreground">
                      {l}
                    </p>
                  ))}
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#a8871c]">
                    {c.cta}
                    <Icon name="ArrowUpRight" className="size-4" />
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ============ FORM + IMAGE ============ */}
      <section className="px-4 py-14">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="glass-strong rounded-3xl p-8 sm:p-10">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#15233c]">
                Send us a message
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Prefer to write? Fill out the form and a senior advisor — never
                a robot — will get back to you.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
          <div className="space-y-8">
            <Reveal delay={0.1} className="relative">
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-[#1e3a5f]/20 via-transparent to-[#c9a227]/20 blur-2xl" />
                <Image
                  src="/images/contact.jpg"
                  alt="Reception area of the WealthPath office with warm natural light"
                  width={1024}
                  height={640}
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="glass rounded-[1.75rem] object-cover shadow-2xl shadow-[#1e3a5f]/15"
                />
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="glass rounded-2xl p-7">
                <h3 className="flex items-center gap-2 font-heading text-lg font-semibold text-[#15233c]">
                  <Icon name="Clock" className="size-5 text-[#c9a227]" />
                  Office hours
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {siteConfig.hours}. Evening and Saturday appointments
                  available on request for planning engagements.
                </p>
                <Link
                  href="/pricing"
                  className={cn(
                    buttonVariants(),
                    "btn-outline-glass mt-5 h-11 rounded-xl px-6 text-sm font-semibold"
                  )}
                >
                  See our transparent pricing
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
