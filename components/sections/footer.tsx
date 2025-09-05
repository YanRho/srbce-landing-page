"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Facebook, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#040a30] text-white">
      {/* Top band / CTA */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        </div>
      </div>

      {/* Main grid */}
      <div className="container mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        {/* Brand & blurb */}{/* Quick trust strip */}
        <div>
          <h3 className="text-2xl font-bold leading-tight">SRB Construction & Engineering Services</h3>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <h4 className="text-sm font-semibold tracking-wider text-white/80">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#gallery", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault();
                      document
                        .getElementById(item.href.replace('#',''))
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-white/80 hover:text-[#5eb4f7] transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact & Social */}
        <div>
          <h4 className="text-sm font-semibold tracking-wider text-white/80">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 text-[#5eb4f7] mt-0.5" />
              srbce.services@gmail.com
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-[#5eb4f7] mt-0.5" />
              <span>Manila, Philippines</span>
            </li>
          </ul>

          <div className="mt-5">
            <h4 className="text-sm font-semibold tracking-wider text-white/80">Follow</h4>
            <div className="mt-3 flex items-center gap-3">
              <Link
                href="https://www.facebook.com/srbce.services"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition"
              >
                <Facebook className="h-4 w-4" /> Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>© {currentYear} SRB Construction & Engineering Services. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollTop}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" /> Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;