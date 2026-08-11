"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { testimonials } from "@/lib/content";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

export function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Defer the initial sync out of the effect body (avoids cascading render).
    const timer = setTimeout(onSelect, 0);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      clearTimeout(timer);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex touch-pan-y">
          {testimonials.map((t) => (
            <div key={t.name} className="min-w-0 flex-[0_0_100%] px-1 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
              <figure className="glass-card flex h-full flex-col rounded-2xl p-7">
                <Icon name="Quote" className="size-7 text-[#c9a227]/70" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-[#26344f]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-[#1e3a5f]/10 pt-5">
                  <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#2e5585] text-sm font-semibold text-[#e8c766]">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-[#15233c]">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Previous testimonials"
          className="flex size-11 items-center justify-center rounded-full border border-[#1e3a5f]/20 bg-white/60 text-[#1e3a5f] transition-all hover:border-[#c9a227]/60 hover:bg-white disabled:opacity-40"
        >
          <Icon name="ChevronLeft" className="size-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "h-2.5 rounded-full transition-all",
                i === selectedIndex
                  ? "w-7 bg-gradient-to-r from-[#c9a227] to-[#e8c766]"
                  : "w-2.5 bg-[#1e3a5f]/20 hover:bg-[#1e3a5f]/40"
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Next testimonials"
          className="flex size-11 items-center justify-center rounded-full border border-[#1e3a5f]/20 bg-white/60 text-[#1e3a5f] transition-all hover:border-[#c9a227]/60 hover:bg-white disabled:opacity-40"
        >
          <Icon name="ChevronRight" className="size-5" />
        </button>
      </div>
    </div>
  );
}
