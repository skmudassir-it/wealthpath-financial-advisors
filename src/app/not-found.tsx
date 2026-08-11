import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BackgroundBlobs } from "@/components/background-blobs";
import { Icon } from "@/components/icon";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center px-4 py-20">
      <BackgroundBlobs />
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-heading text-7xl font-semibold text-gradient sm:text-8xl">404</p>
        <h1 className="mt-6 font-heading text-3xl font-semibold tracking-tight text-[#15233c] sm:text-4xl">
          This page took a wrong turn.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you
          back on the path — your financial plan is waiting.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className={cn(buttonVariants(), "btn-gradient h-12 rounded-xl px-8 text-base font-semibold")}
          >
            Back to home
            <Icon name="ArrowRight" className="size-4" />
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants(), "btn-outline-glass h-12 rounded-xl px-8 text-base font-semibold")}
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
