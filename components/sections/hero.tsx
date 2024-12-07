"use client";

export const Hero = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl leading-tight text-shadow animate-fadeIn">
          <span className="font-thin">SRB CONSTRUCTION</span> <br />
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
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-6 bg-[#5eb4f7] text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-500 transition animate-fadeIn"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Hero;
