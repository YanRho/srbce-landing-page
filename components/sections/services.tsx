"use client";

import { Ruler, Hammer, MessageCircle } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Ruler size={60} className="text-[#5eb4f7]" />,
    title: "Survey & Planning",
    description: (
      <>
        Offering services such as <b>land plotting</b>, material and
        cost estimation, project planning, structural analysis, formwork
        analysis, and <b>2D/3D scaffolding layouts</b>.
      </>
    ),
  },
  {
    id: 2,
    icon: <Hammer size={60} className="text-[#5eb4f7]" />,
    title: "General Construction",
    description: (
      <>
        End-to-end <b>construction</b> solutions, ensuring
        high-quality, sustainable, and timely execution for diverse projects.
      </>
    ),
  },
  {
    id: 3,
    icon: <MessageCircle size={60} className="text-[#5eb4f7]" />,
    title: "3rd Party Consultation",
    description: (
      <>
        Providing expert consultation services for <b>project optimization</b>,
        quality assurance, and compliance with industry standards.
      </>
    ),
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
