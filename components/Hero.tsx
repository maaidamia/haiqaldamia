"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-06-14T10:00:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

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

// Malay-inspired geometric ornament rendered as SVG
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

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
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

      {/* Background subtle pattern — diagonal hatching */}
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
        {/* Pre-title */}
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-8 animate-fade-in">
          Together with their families
        </p>

        {/* Names */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-6">
          <h1 className="font-serif text-6xl md:text-8xl font-light italic text-wood leading-none">
            Aisyah
          </h1>
          <span className="font-serif text-3xl md:text-5xl font-light text-gold">&amp;</span>
          <h1 className="font-serif text-6xl md:text-8xl font-light italic text-wood leading-none">
            Razif
          </h1>
        </div>

        {/* Ornament */}
        <GeometricOrnament />

        {/* Date & location */}
        <div className="mt-6 mb-10 flex flex-col items-center gap-1">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-wood-light">
            14 June 2026
          </p>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-wood-light">
            Dewan Serbaguna, Kuala Lumpur
          </p>
        </div>

        {/* Countdown */}
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold/70">
          Scroll
        </span>
        <svg
          className="w-4 h-4 text-gold/70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
