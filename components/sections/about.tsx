"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * About Section (Logo Left, Cards Right)
 * - Left column: Logo
 * - Right column: stacked cards (Description, Mission, Vision)
 * - Natural height cards wrapping content
 */

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white text-gray-900 relative">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-4xl bold:text-5xl font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ABOUT US
          </motion.h2>
        </div>

        {/* Two Column Split */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Logo Graphic */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/srbcelogo.png"
              width={420}
              height={420}
              alt="SRBCE Logo"
              className="drop-shadow-xl"
            />
          </motion.div>

          {/* Right: Cards */}
          <div className="space-y-8">
            {/* Description Card */}
            <motion.div
              className="rounded-xl p-6 bg-white shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#5eb4f7] mb-3">Who We Are</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                <span className="font-bold text-gray-900 text-xl">
                  SRB Construction Services
                </span>{" "}
                is a company focusing on innovative construction practices dedicated
                to delivering high-quality and sustainable solutions to our clients.
                With a commitment to excellence, integrity, and client satisfaction,
                we have established ourselves as a trusted partner in this industry.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="rounded-xl p-6 bg-white shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#5eb4f7] mb-3">Mission</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Our Mission is to redefine the construction landscape through unwavering dedication
                to quality, innovation, and sustainability. Grounded in integrity
                and driven by a passion for excellence, we strive to exceed
                expectations, empower communities, and leave a lasting legacy of
                craftsmanship and integrity.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="rounded-xl p-6 bg-white shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#5eb4f7] mb-3">Vision</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                We envision a future where our name resonates as the epitome of
                excellence in the construction industry.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
