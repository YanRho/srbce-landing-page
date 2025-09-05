"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

/**
 * SRBCE Header (Updated)
 * - Sticky, semi-transparent with backdrop blur
 * - Desktop nav with active-section underline
 * - Mobile slide-out menu (Sheet)
 * - "Get a Quote" CTA to #contact
 * - Smooth scroll with offset for fixed header
 */

const NAV_HEIGHT = 72; // keep in sync with header height styles

const menuItems : MenuItem[] = [
  { href: "#about", label: "ABOUT" },
  { href: "#gallery", label: "GALLERY" },
  { href: "#services", label: "SERVICES" },
  { href: "#contact", label: "CONTACT" },
];

interface MenuItem {
  href: string;
  label: string;
}

function scrollToHash(hash: string): void {
  if (!hash) return;
  const el = document.querySelector(hash);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT + 1;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Header() {
  const [active, setActive] = React.useState("");
  const [atTop, setAtTop] = React.useState(true);

  // Scroll spy for active section
  React.useEffect(() => {
    const sections = menuItems
      .map((m) => document.querySelector(m.href))
      .filter(Boolean) as Element[];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        // trigger a tad before the section reaches the top, accounting for header
        root: null,
        rootMargin: `-${NAV_HEIGHT + 20}px 0px -60% 0px`,
        threshold: 0.1,
      }
    );

    sections.forEach((sec) => io.observe(sec));

    return () => io.disconnect();
  }, []);

  // Elevation & background change on scroll
  React.useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle initial hash navigation (deep links)
  React.useEffect(() => {
    if (window.location.hash) {
      // delay to ensure layout is ready
      setTimeout(() => scrollToHash(window.location.hash), 0);
    }
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        "h-[72px]",
        atTop
          ? "bg-[#040a30]/70 backdrop-blur-md border-b border-white/10"
          : "bg-[#040a30]/90 backdrop-blur-xl border-b border-white/20 shadow-lg"
      )}
      role="banner"
    >
      <div className="container mx-auto flex h-[72px] items-center justify-between px-4 sm:px-6">
        {/* Left: Logo */}
        <Link
          href="#home"
          aria-label="SRBCE Home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3"
        >
          <Image
            src="/images/srbcelogo.png"
            width={44}
            height={44}
            alt="SRBCE Logo"
            priority
            className="rounded-md"
          />
          
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {menuItems.map((item) => {
            const isActive = active === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative text-sm tracking-wide text-white/90 transition-colors",
                  "hover:text-[#5eb4f7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5eb4f7]/60 rounded",
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash(item.href);
                }}
              >
                {item.label}
                {/* underline indicator */}
                <span
                  className={cn(
                    "absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 origin-left transition-transform",
                    isActive ? "scale-x-100 bg-[#5eb4f7]" : "bg-transparent group-hover:scale-x-100"
                  )}
                />
              </Link>
            );
          })}

          <Button
            size="sm"
            className="ml-2 rounded-2xl bg-[#233df8] hover:bg-[#2b45ff] text-white shadow-md"
            asChild
          >
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToHash("#contact");
              }}
            >
              Get a Quote
            </Link>
          </Button>
        </nav>

        {/* Mobile: Sheet Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="text-white hover:text-white/90 hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[260px] bg-[#040a30] text-white border-l border-white/10">
              <div className="mt-6 flex flex-col gap-1" role="menu" aria-label="Mobile">
                {menuItems.map((item) => (
                  <button
                    key={item.href}
                    role="menuitem"
                    className={cn(
                      "w-full text-left px-3 py-3 rounded-md transition-colors",
                      "hover:bg-white/10 hover:text-[#5eb4f7]",
                      active === item.href && "bg-white/5"
                    )}
                    onClick={() => {
                      // close sheet by clicking the overlay (hack: history back if needed)
                      const overlay = document.querySelector('[data-state="open"][data-vaul-overlay]') as HTMLElement | null;
                      overlay?.click();
                      scrollToHash(item.href);
                    }}
                  >
                    {item.label}
                  </button>
                ))}

                <Button
                  className="mt-2 rounded-2xl bg-[#233df8] hover:bg-[#2b45ff] text-white"
                  onClick={() => {
                    const overlay = document.querySelector('[data-state="open"][data-vaul-overlay]') as HTMLElement | null;
                    overlay?.click();
                    scrollToHash("#contact");
                  }}
                >
                  Get a Quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
