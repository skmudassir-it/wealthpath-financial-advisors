import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";

export function CtaBand({
  title = "Ready to build your wealth path?",
  subtitle = "Book a complimentary 30-minute consultation. No pressure, no jargon — just a clear picture of where you stand and what's possible.",
  image = "/images/cta.jpg",
}: {
  title?: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="px-4 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl">
        <Image
          src={image}
          alt="WealthPath advisors collaborating with a client"
          fill
          sizes="(max-width: 1152px) 100vw, 1152px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12263f]/92 via-[#1e3a5f]/80 to-[#1e3a5f]/55" />
        <Reveal>
          <div className="relative z-10 flex flex-col items-start gap-6 px-8 py-16 sm:px-14 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/80">{subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className={cn(buttonVariants(), "btn-gradient h-12 rounded-xl px-7 text-base font-semibold")}
              >
                Book a free consultation
              </Link>
              <Link
                href="/pricing"
                className={cn(
                  buttonVariants(),
                  "h-12 rounded-xl border border-white/40 bg-white/10 px-7 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
                )}
              >
                View pricing
                <Icon name="ArrowRight" className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
