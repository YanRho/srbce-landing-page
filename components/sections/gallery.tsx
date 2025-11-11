"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/projects/8.webp",
  "/images/projects/9.webp",
  "/images/projects/10.webp",
  "/images/projects/11.webp",
  "/images/projects/12.webp",
  "/images/projects/13.webp",
  "/images/projects/14.webp",
  "/images/projects/15.webp",
  "/images/projects/16.webp",
  "/images/projects/17.webp",
  "/images/projects/18.webp",
  "/images/projects/19.webp",
  "/images/projects/20.webp",
  "/images/projects/21.webp",
  "/images/projects/22.webp",
  "/images/projects/23.webp",
];

export const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((p) => (p === null ? p : p === 0 ? images.length - 1 : p - 1)),
    []
  );
  const next = useCallback(
    () => setLightboxIndex((p) => (p === null ? p : p === images.length - 1 ? 0 : p + 1)),
    []
  );

  // 🔒 Scroll lock + keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, close, prev, next]);

  // 🚀 Preload next/previous images for instant navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const preload = (src: string) => {
      const img = new window.Image();
      img.src = src;
    };
    const nextIndex = (lightboxIndex + 1) % images.length;
    const prevIndex = (lightboxIndex - 1 + images.length) % images.length;
    preload(images[nextIndex]);
    preload(images[prevIndex]);
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-20 bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-3">PROJECTS &amp; ACCOMPLISHMENTS</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10">
            Some of our recent projects delivered with care and precision.
          </p>
        </div>

        {/* ✅ Responsive Grid */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <li key={i}>
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
                      unoptimized
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={i < 2}
                    />
                  </div>
                </button>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      {/* 🪟 Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Project ${lightboxIndex + 1}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 animate-fade-in"
          onClick={close}
        >
          {/* ✖ Close Button */}
          <button
            className="absolute top-6 right-6 text-white hover:text-sky-400 transition"
            aria-label="Close lightbox"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
          >
            <X className="h-8 w-8" />
          </button>

          {/* ⬅ Prev / Next Buttons */}
          <button
            className="absolute left-6 text-white hover:text-sky-400 transition"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            className="absolute right-6 text-white hover:text-sky-400 transition"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          {/* ⚡ Crossfade Lightbox Images */}
          <div
            className="relative w-[92vw] h-[86vh] max-w-[1600px] max-h-[1000px] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Project ${i + 1}`}
                fill
                unoptimized
                sizes="92vw"
                className={`object-contain rounded-xl shadow-2xl mx-auto select-none transition-opacity duration-300 ${
                  i === lightboxIndex ? "opacity-100" : "opacity-0"
                }`}
                draggable={false}
                priority={i === lightboxIndex}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
