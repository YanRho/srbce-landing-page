"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

/**
 * Hero Section (Updated)
 * - Dark overlay on background for text readability
 * - Responsive typography with stronger hierarchy
 * - Adds subtle motion for heading & button
 * - CTA styled consistently with brand colors
 */

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl px-4 animate-fadeIn">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-light leading-tight drop-shadow-xl">
          SRB CONSTRUCTION <br />
          <span className="font-extrabold text-[#5eb4f7]">
            & ENGINEERING SERVICES
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-2xl font-light text-white/90 drop-shadow-md">
          Crafting Tomorrow, Building Today — Your Vision, Our Expertise.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            className="rounded-xl bg-[#5eb4f7] hover:bg-[#2b45ff] text-white shadow-lg transition-transform duration-300 hover:scale-105"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
