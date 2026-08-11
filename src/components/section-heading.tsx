import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#a8871c]">
          {align === "center" && <span className="gold-underline inline-block" />}
          {eyebrow}
          {align === "center" && <span className="gold-underline inline-block" />}
        </p>
      )}
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#15233c] sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
