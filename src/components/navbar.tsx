"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Icon } from "@/components/icon";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)}>
      <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2e5585] text-[#e8c766] shadow-[0_6px_16px_rgba(30,58,95,0.35)]">
        <Icon name="Compass" className="size-5" strokeWidth={2.2} />
      </span>
      <span className="leading-tight">
        <span className="block font-heading text-[15px] font-semibold tracking-tight text-[#1e3a5f]">
          WealthPath
        </span>
        <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-[#a8871c]">
          Financial Advisors
        </span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 px-4">
      <nav
        aria-label="Main navigation"
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl py-2.5 pl-5 pr-2.5 transition-all duration-300",
          scrolled ? "glass-nav-scrolled" : "glass-nav"
        )}
      >
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-[#1e3a5f]/80 transition-colors hover:bg-white/60 hover:text-[#1e3a5f]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "h-10 rounded-xl px-4 text-sm"
            )}
          >
            Sign in
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants(), "btn-gradient h-10 rounded-xl px-5 text-sm font-semibold")}
          >
            Get a free quote
          </Link>
        </div>

        {/* Mobile trigger — renders a button directly (no asChild) */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Open menu"
            className="inline-flex size-11 items-center justify-center rounded-xl text-[#1e3a5f] transition-colors hover:bg-white/60 lg:hidden"
          >
            <Icon name="Menu" className="size-6" />
          </SheetTrigger>
          <SheetContent side="right" className="glass-strong w-[85%] max-w-sm gap-0 p-0">
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <div className="flex items-center justify-between border-b border-[#1e3a5f]/10 px-6 py-5">
              <Logo />
            </div>
            <div className="flex flex-col gap-1 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-[#15233c] transition-colors hover:bg-white/70"
                >
                  {link.label}
                  <Icon name="ChevronRight" className="size-4 text-[#c9a227]" />
                </Link>
              ))}
            </div>
            <div className="mt-auto space-y-3 border-t border-[#1e3a5f]/10 px-6 py-6">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants(), "btn-gradient h-12 w-full rounded-xl text-base font-semibold")}
              >
                Get a free quote
              </Link>
              <p className="text-center text-sm text-muted-foreground">
                {siteConfig.phone}
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
