"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-09-19T19:00:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// Monogram SVG shown when /illustration-hero.png is absent
const MonogramFallback = () => (
  <svg
    viewBox="0 0 200 200"
    className="w-full h-full"
    aria-hidden="true"
    fill="none"
  >
    {/* Outer ring */}
    <circle cx="100" cy="100" r="90" stroke="#C9A84C" strokeWidth="0.8" opacity="0.4" />
    <circle cx="100" cy="100" r="78" stroke="#C9A84C" strokeWidth="0.4" opacity="0.25" />
    {/* Decorative corner marks */}
    <line x1="100" y1="12" x2="100" y2="28" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5" />
    <line x1="100" y1="172" x2="100" y2="188" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5" />
    <line x1="12" y1="100" x2="28" y2="100" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5" />
    <line x1="172" y1="100" x2="188" y2="100" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5" />
    {/* M letterform */}
    <text
      x="58"
      y="118"
      fontFamily="Georgia, serif"
      fontSize="56"
      fontStyle="italic"
      fontWeight="300"
      fill="#3B1F0E"
      opacity="0.85"
    >M</text>
    {/* Ampersand */}
    <text
      x="96"
      y="110"
      fontFamily="Georgia, serif"
      fontSize="22"
      fontStyle="italic"
      fontWeight="300"
      fill="#C9A84C"
      opacity="0.9"
    >&amp;</text>
    {/* H letterform */}
    <text
      x="118"
      y="118"
      fontFamily="Georgia, serif"
      fontSize="56"
      fontStyle="italic"
      fontWeight="300"
      fill="#3B1F0E"
      opacity="0.85"
    >H</text>
  </svg>
);

const calculateTimeLeft = (): TimeLeft => {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="font-serif text-4xl md:text-6xl font-light text-wood tabular-nums leading-none">
      {String(value).padStart(2, "0")}
    </span>
    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mt-2">
      {label}
    </span>
  </div>
);

const GeometricOrnament = () => (
  <svg
    viewBox="0 0 200 30"
    className="w-48 md:w-64 text-gold"
    fill="none"
    aria-hidden="true"
  >
    <line x1="0" y1="15" x2="70" y2="15" stroke="currentColor" strokeWidth="0.8" />
    <polygon
      points="85,15 95,5 100,15 95,25"
      stroke="currentColor"
      strokeWidth="0.8"
      fill="none"
    />
    <polygon
      points="100,15 105,5 115,15 105,25"
      stroke="currentColor"
      strokeWidth="0.8"
      fill="none"
    />
    <circle cx="100" cy="15" r="3" fill="currentColor" opacity="0.6" />
    <line x1="130" y1="15" x2="200" y2="15" stroke="currentColor" strokeWidth="0.8" />
  </svg>
);

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);
  const [showBounce, setShowBounce] = useState(true);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Stop the scroll-indicator bounce after 3 s
    const bounceTimer = setTimeout(() => setShowBounce(false), 3000);
    return () => {
      clearInterval(timer);
      clearTimeout(bounceTimer);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-ivory overflow-hidden"
    >
      {/* Corner wood accent bars */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-wood/20" />
      <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-wood/20" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-wood/20" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-wood/20" />

      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #3B1F0E,
            #3B1F0E 1px,
            transparent 0,
            transparent 60px
          )`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-8 animate-fade-in">
          Together with their families
        </p>

        {/* Illustration — falls back to SVG monogram if image is absent */}
        <div className="mb-8 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
          {imgError ? (
            <MonogramFallback />
          ) : (
            <img
              src="/illustration-hero.png"
              alt="Maisa & Haiqal illustration"
              className="w-full h-full object-contain"
              onError={() => setImgError(true)}
            />
          )}
        </div>

        {/* Names — single h1 for correct SEO + screen reader heading structure */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-6">
          <h1 className="font-serif text-6xl md:text-8xl font-light italic text-wood leading-none flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span>Maisa</span>
            <span className="font-serif text-3xl md:text-5xl font-light text-gold not-italic">&amp;</span>
            <span>Haiqal</span>
          </h1>
        </div>

        <GeometricOrnament />

        {/* Date, location & hashtag */}
        <div className="mt-6 mb-4 flex flex-col items-center gap-1">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-wood-light">
            19 September 2026
          </p>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-wood-light">
            Rumah Abang Jamil, Klang
          </p>
        </div>

        <p className="font-serif text-lg md:text-xl italic text-gold mb-10">
          #HaiMaiLove
        </p>

        {/* Countdown — only renders on client to prevent SSR/client value mismatch */}
        <div className={`transition-opacity duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}>
          {mounted && (
            <div className="flex items-start gap-6 md:gap-10">
              <CountdownUnit value={timeLeft.days} label="Days" />
              <span className="font-serif text-3xl text-gold/50 mt-3">·</span>
              <CountdownUnit value={timeLeft.hours} label="Hours" />
              <span className="font-serif text-3xl text-gold/50 mt-3">·</span>
              <CountdownUnit value={timeLeft.minutes} label="Minutes" />
              <span className="font-serif text-3xl text-gold/50 mt-3">·</span>
              <CountdownUnit value={timeLeft.seconds} label="Seconds" />
            </div>
          )}
        </div>

        {/* CTA */}
        <a
          href="#rsvp"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-14 font-sans text-xs tracking-[0.2em] uppercase border border-wood text-wood px-8 py-3 hover:bg-wood hover:text-ivory transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold"
          tabIndex={0}
          aria-label="RSVP to the wedding"
        >
          RSVP Now
        </a>
      </div>

      {/* Scroll indicator — stops bouncing after 3 s */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500 ${
          showBounce ? "animate-bounce" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      >
        <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold/70">
          Scroll
        </span>
        <svg
          className="w-4 h-4 text-gold/70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
