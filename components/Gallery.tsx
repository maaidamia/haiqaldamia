"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Placeholder images using Unsplash for a traditional Malay wedding aesthetic
// Replace src values with your actual wedding photos
type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const IMAGES: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Wedding ceremony",
    width: 800,
    height: 1200,
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    alt: "Wedding couple",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    alt: "Wedding flowers",
    width: 800,
    height: 900,
  },
  {
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80",
    alt: "Wedding details",
    width: 800,
    height: 1000,
  },
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    alt: "Wedding rings",
    width: 800,
    height: 700,
  },
  {
    src: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=800&q=80",
    alt: "Wedding table setting",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    alt: "Wedding portrait",
    width: 800,
    height: 1100,
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    alt: "Floral arrangement",
    width: 800,
    height: 800,
  },
  {
    src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
    alt: "Wedding venue",
    width: 800,
    height: 600,
  },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-24 bg-ivory">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
            Captured moments
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light italic text-wood">
            Gallery
          </h2>
          <div className="ornament mt-6 max-w-xs mx-auto">
            <span className="text-gold text-xl">✦</span>
          </div>
          <p className="font-sans text-sm text-wood-light mt-6 leading-relaxed max-w-lg mx-auto">
            A few frames from our journey together. Replace these with your own photographs
            before publishing.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {IMAGES.map((img, i) => (
            <button
              key={img.src}
              onClick={() => handleImageClick(i)}
              onKeyDown={(e) => e.key === "Enter" && handleImageClick(i)}
              tabIndex={0}
              aria-label={`View photo: ${img.alt}`}
              className="masonry-item group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-gold"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-wood/0 group-hover:bg-wood/20 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={IMAGES.map((img) => ({ src: img.src, alt: img.alt }))}
        styles={{
          container: { backgroundColor: "rgba(59, 31, 14, 0.95)" },
        }}
      />
    </section>
  );
}
