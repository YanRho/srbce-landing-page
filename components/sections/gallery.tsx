"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const images: string[] = [
  "/images/projects/1.jpg",
  "/images/projects/2.jpg",
  "/images/projects/3.jpg",
  "/images/projects/4.jpg",
  "/images/projects/5.jpg",
  "/images/projects/6.jpg",
  "/images/projects/7.jpg",
  "/images/projects/8.jpg",
  "/images/projects/9.jpg",
  "/images/projects/10.jpg",
  "/images/projects/11.jpg",
  "/images/projects/12.jpg",
  "/images/projects/13.jpg",
  "/images/projects/14.jpg",
  "/images/projects/15.jpg",
];

export const Gallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1); // Lightbox active image index

  const closeLightbox = () => setLightboxIndex(-1);

  const showPrevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, []);

  const showNextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit(); // Reinitialize Embla in case of state changes
    }
  }, [emblaApi]);

  return (
    <section id="gallery" className="py-24 bg-gray-100 shadow-inner">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Projects & Accomplishments
        </h2>
        {/* Embla Carousel */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="relative min-w-[80%] md:min-w-[25%] px-2"
                  onClick={() => setLightboxIndex(index)} // Open lightbox on click
                >
                  <div className="relative w-full h-80 lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden cursor-pointer">
                    <Image
                      src={src}
                      alt={`Project ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      priority={index === 0}
                      placeholder="blur"
                      blurDataURL="/images/placeholder.png"
                      onError={(e) =>
                        ((e.target as HTMLImageElement).src =
                          "/images/placeholder.png")
                      }
                      className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                    {/* Overlay Text */}
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
          {/* Prev and Next Buttons */}
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
      {lightboxIndex !== -1 && (
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
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
