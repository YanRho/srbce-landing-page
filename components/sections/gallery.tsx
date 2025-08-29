"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Uses your existing local project images
const images = [
  "/images/projects/1.webp",
  "/images/projects/2.webp",
  "/images/projects/3.webp",
  "/images/projects/4.webp",
  "/images/projects/5.webp",
  "/images/projects/6.webp",
  "/images/projects/7.webp",
  "/images/projects/8.webp",
  "/images/projects/9.webp",
  "/images/projects/10.webp",
  "/images/projects/11.webp",
  "/images/projects/12.webp",
  "/images/projects/13.webp",
  "/images/projects/14.webp",
  "/images/projects/15.webp",
];

export const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = useCallback(() => {
    setLightboxIndex((p) => (p === null ? p : p === 0 ? images.length - 1 : p - 1));
  }, []);
  const next = useCallback(() => {
    setLightboxIndex((p) => (p === null ? p : p === images.length - 1 ? 0 : p + 1));
  }, []);

  // Keyboard + scroll lock when lightbox open
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, next, prev]);

  return (
    <section id="gallery" className="py-20 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-3">PROJECTS &amp; ACCOMPLISHMENTS</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10">
            Some of our recent projects delivered with care and precision.
          </p>
        </div>

        {/* Responsive Grid */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <li key={i} className="">
              <figure className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm focus-within:shadow-md">
                <button
                  type="button"
                  className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
                  aria-label={`Open project ${i + 1}`}
                  onClick={() => open(i)}
                >
                  <div className="relative w-full aspect-[4/3] bg-slate-100">
                    <Image
                      src={src}
                      alt={`Project ${i + 1}`}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority={i < 2}
                    />
                  </div>
                </button>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Project ${lightboxIndex + 1}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
          onClick={close}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#5eb4f7]"
            aria-label="Close lightbox"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
          >
            <X className="h-8 w-8" />
          </button>
          <button
            className="absolute left-6 text-white hover:text-[#5eb4f7]"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            className="absolute right-6 text-white hover:text-[#5eb4f7]"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <div className="relative w-[92vw] h-[86vh] max-w-[1600px] max-h-[1000px]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[lightboxIndex]}
              alt={`Project ${lightboxIndex + 1}`}
              fill
              sizes="92vw"
              className="object-contain rounded-xl shadow-2xl mx-auto select-none"
              priority
              draggable={false}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
