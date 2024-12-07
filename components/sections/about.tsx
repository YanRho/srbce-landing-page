"use client";

import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="py-16 bg-white text-gray-900 relative">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-16 gap-8">
        {/* Left Content */}
        <div className="lg:w-2/3 text-left space-y-8">
          {/* Heading */}
          <h2 className="text-5xl font-bold text-black leading-tight">
            ABOUT SRBCE
          </h2>
          {/* Description */}
          <p className="text-lg leading-relaxed">
            <span className="font-bold text-2xl">
              SRB <span className="text-gradient">Construction Services</span>
            </span>{" "}
            is a company focusing on innovative construction practices dedicated
            to delivering high-quality and sustainable solutions to our clients.
            With a commitment to excellence, integrity, and client satisfaction,
            we have established ourselves as a trusted partner in this industry.
          </p>

          {/* Mission */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Our{" "}
              <span className="font-bold text-gradient text-2xl">Mission</span>{" "}
              is to redefine the construction landscapes through unwavering
              dedication to quality, innovation, and sustainability. Grounded in
              integrity and driven by a passion for excellence, we strive to
              exceed expectations, empower communities, and leave a lasting
              legacy of craftsmanship and integrity.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              We{" "}
              <span className="font-bold text-gradient text-2xl">envision</span>{" "}
              a future where our name resonates as the epitome of excellence in
              the construction industry.
            </p>
          </div>
        </div>

        {/* Right Graphic */}
        <div className="lg:w-1/3 flex justify-center items-center">
          <Image
            src="/images/srbcelogo.png"
            width={800}
            height={800}
            alt="SRB Logo"
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
