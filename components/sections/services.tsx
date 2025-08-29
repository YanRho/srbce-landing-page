"use client";

import { Ruler, Hammer, MessageCircle, ShieldCheck, Clock4 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    icon: Ruler,
    title: "Survey & Planning",
    description:
      "Offering services such as land plotting, material and cost estimation, project planning, structural analysis, formwork analysis, and 2D/3D scaffolding layouts.",
  },
  {
    id: 2,
    icon: Hammer,
    title: "General Construction",
    description:
      "End-to-end construction solutions, ensuring high-quality, sustainable, and timely execution for diverse projects.",
  },
  {
    id: 3,
    icon: MessageCircle,
    title: "3rd Party Consultation",
    description:
      "Providing expert consultation services for project optimization, quality assurance, and compliance with industry standards.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white text-slate-900">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Heading */}
        <header className="text-center mb-12">
          <h2 className="text-4xl bold:text-5xl font-extrabold">OUR SERVICES</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Practical, reliable, and built around your scope, budget, and timeline.
          </p>
        </header>

        {/* Feature Badges (optional trust strip) */}
        <div className="mx-auto mb-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-700">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
            <ShieldCheck className="h-4 w-4 text-[#5eb4f7]" /> Safety First
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
            <Clock4 className="h-4 w-4 text-[#5eb4f7]" /> On-Time Delivery
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-[#5eb4f7]" /> Quality Assured
          </span>
        </div>

        {/* Cards Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ id, icon: Icon, title, description }) => (
            <li key={id}>
              <article
                className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5 focus-within:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 grid place-items-center h-14 w-14 rounded-xl bg-[#5eb4f7]/10 text-[#5eb4f7]">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold leading-tight">{title}</h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">{description}</p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        
      </div>
    </section>
  );
};

export default Services;