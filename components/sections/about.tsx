"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * About Section – Brand Accent Wash
 * - Keeps original text content
 * - Background: subtle brand accent tint (#5eb4f7 at 5%)
 * - Logo left, cards right; responsive & accessible
 */

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-[#5eb4f7]/5 text-slate-900"
      aria-label="About SRBCE"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ABOUT <span className="text-[#5eb4f7]">THE COMPANY</span>
          </motion.h2>
          <div className="mt-3 h-1 w-20 mx-auto bg-[#5eb4f7] rounded-full" />
        </div>

        {/* Two Column Split */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Logo Graphic */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/srbcelogo.png"
              alt="SRBCE Logo"
              width={440}
              height={440}
              sizes="(min-width: 1024px) 440px, 60vw"
              className="w-auto h-auto max-w-[440px] drop-shadow-xl"
              priority
            />
          </motion.div>

          {/* Right: Cards (original copy preserved) */}
          <div className="space-y-6">
            {/* Who We Are */}
            <motion.article
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#5eb4f7] mb-2">Who We Are</h3>
              <p className="text-lg leading-relaxed text-slate-700">
                <span className="font-bold text-slate-900 text-xl">SRB Construction Services</span>{" "}
                is a company focusing on innovative construction practices dedicated to delivering high-quality and sustainable solutions to our clients. With a commitment to excellence, integrity, and client satisfaction, we have established ourselves as a trusted partner in this industry.
              </p>
            </motion.article>

            {/* Mission */}
            <motion.article
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#5eb4f7] mb-2">Mission</h3>
              <p className="text-lg leading-relaxed text-slate-700">
                Our Mission is to redefine the construction landscape through unwavering dedication to quality, innovation, and sustainability. Grounded in integrity and driven by a passion for excellence, we strive to exceed expectations, empower communities, and leave a lasting legacy of craftsmanship and integrity.
              </p>
            </motion.article>

            {/* Vision */}
            <motion.article
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#5eb4f7] mb-2">Vision</h3>
              <p className="text-lg leading-relaxed text-slate-700">
                We envision a future where our name resonates as the epitome of excellence in the construction industry.
              </p>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;