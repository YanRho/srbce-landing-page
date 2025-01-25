"use client";

export const Hero = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      {/* Content Container */}
      <div className="relative z-10 max-w-4xl px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-light leading-tight text-shadow animate-fadeIn">
          SRB CONSTRUCTION <br />
          <span className="font-bold text-[#5eb4f7]">
            & ENGINEERING SERVICES
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg md:text-xl font-light text-shadow animate-fadeIn">
          Crafting Tomorrow, Building Today: Your Vision, Our Expertise.
        </p>

        {/* Button */}
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-6 bg-[#5eb4f7] text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-500 transition-colors duration-300 animate-fadeIn"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Hero;
