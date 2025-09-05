"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

/**
 * Hero Section – With Gradient Overlay
 * - Reverts to using a strong gradient overlay for background photo readability
 * - Responsive vertical rhythm
 * - Two CTAs: primary (Contact) + secondary (Services)
 * - Scroll cue to #about
 */

export const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      aria-label="SRB Construction & Engineering hero"
      className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center text-center text-white"
    >
      {/* Background image with gradient */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg.jpg"
          alt="Construction background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#040a30]/70 via-[#040a30]/80 to-black/90"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-4">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
          SRB Construction
          <br className="hidden sm:block" />
          <span className="font-extrabold text-[#5eb4f7]">& Engineering Services</span>
        </h1>

        <p className="mt-4 md:mt-6 text-base md:text-2xl text-white/90 max-w-3xl mx-auto">
          Crafting Tomorrow, Building Today: Your Vision, Our Expertise.
        </p>

        {/* CTAs */}
        <div className="mt-7 md:mt-9 flex items-center justify-center gap-3 md:gap-4">
          <Button
            size="lg"
            className="rounded-xl bg-[#5eb4f7] hover:bg-[#2b45ff] text-white shadow-lg transition-transform motion-safe:hover:scale-105"
            onClick={() => scrollTo("contact")}
          >
            Get a Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-xl border-white/30 bg-white/10 text-white hover:bg-white/20"
            onClick={() => scrollTo("services")}
          >
            View Services
          </Button>
        </div>

        {/* Quick trust strip */}
        
      </div>

      {/* Scroll cue */}
      <button
        type="button"
        aria-label="Scroll to About section"
        onClick={() => scrollTo("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition"
      >
        <span className="block text-xs tracking-wider uppercase">Explore</span>
        <svg className="mx-auto mt-1 h-6 w-6 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
      </button>
    </section>
  );
};

export default Hero;
