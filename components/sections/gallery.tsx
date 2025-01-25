"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = () => setLightboxIndex(null);

  const showPrevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev! - 1));
  }, []);

  const showNextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev! + 1));
  }, []);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    emblaApi?.reInit(); // Reinitialize Embla Carousel on state changes
  }, [emblaApi]);

  return (
    <section id="gallery" className="py-24 bg-gray-100 shadow-inner">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Projects & Accomplishments
        </h2>

        {/* Carousel */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="relative min-w-[80%] md:min-w-[25%] px-2"
                  onClick={() => setLightboxIndex(index)}
                >
                  <div className="relative w-full h-80 lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden cursor-pointer">
                    <Image
                      src={src}
                      alt={`Project ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      placeholder="blur"
                      blurDataURL="/images/placeholder.png"
                      loading={index === 0 ? "eager" : "lazy"}
                      className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-bold text-lg">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow hover:bg-gray-700"
          >
            &larr;
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow hover:bg-gray-700"
          >
            &rarr;
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <button
            className="absolute left-4 text-white text-3xl font-bold"
            onClick={showPrevImage}
          >
            &larr;
          </button>
          <button
            className="absolute right-4 text-white text-3xl font-bold"
            onClick={showNextImage}
          >
            &rarr;
          </button>
          <Image
            src={images[lightboxIndex]}
            alt={`Project ${lightboxIndex + 1}`}
            width={1200}
            height={800}
            className="rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
