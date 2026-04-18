"use client";

import { useEffect, useRef } from "react";

type StoryEntry = {
  date: string;
  title: string;
  body: string;
  side: "left" | "right";
  illustration?: string;
};

const STORY: StoryEntry[] = [
  {
    date: "2013",
    title: "Where It All Began",
    body:
      "It started in a public library — of all places. Between pages and passing glances, we became each other’s favorite distraction and never quite turned the page. We were just kids, unaware we had stumbled into the start of something beautiful.",
    side: "left",
    illustration: "/illustrations/story-01.png",
  },
  {
    date: "2016 – 2023",
    title: "Growing Up Together",
    body:
      "Growing up meant miles between us. Different cities, different paths — but somehow, we kept each other close over late-night calls, talking until the sun says good morning and neither of us wanted to say goodbye.",
    side: "right",
    illustration: "/illustrations/story-02.png",
  },
  {
    date: "2024 – 2025",
    title: "The Same Wavelength",
    body:
      "One night, unplanned and unguarded, we found ourselves saying the same words — about us, about forever. That brief, subtle moment unfolded into a beautiful Merisik and Pertunangan. And suddenly, this dream had a heartbeat.",
    side: "left",
    illustration: "/illustrations/story-03.png",
  },
  {
    date: "19 September 2026",
    title: "Our Wedding Day",
    body:
      "Now it is your turn to witness the next chapter. We are honoured to celebrate with the people who have shaped our story from the earliest spark to this very moment.✨❤️",
    side: "right",
    illustration: "/illustrations/story-04.png",
  },
];

const useIntersectionAnimation = (ref: React.RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
};

const TimelineEntry = ({ entry, index }: { entry: StoryEntry; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  useIntersectionAnimation(ref);

  return (
    <div
      ref={ref}
      className={`relative flex gap-8 md:gap-0 opacity-0 translate-y-8 transition-all duration-700 ease-out`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Left content area */}
      <div
        className={`hidden md:flex flex-col flex-1 ${entry.side === "left" ? "items-end pr-12 text-right" : "items-start pl-12 text-left order-last"}`}
      >
        {entry.side === "left" && (
          <EntryCard entry={entry} />
        )}
      </div>

      {/* Centre dot */}
      <div className="relative flex flex-col items-center">
        <div className="w-px flex-1 bg-gold/30" />
        <div className="w-4 h-4 rounded-full border-2 border-gold bg-ivory flex-shrink-0 z-10" />
        <div className="w-px flex-1 bg-gold/30" />
      </div>

      {/* Right content area */}
      <div
        className={`hidden md:flex flex-col flex-1 ${entry.side === "right" ? "items-start pl-12 text-left" : "items-end pr-12 text-right order-first"}`}
      >
        {entry.side === "right" && (
          <EntryCard entry={entry} />
        )}
      </div>

      {/* Mobile — always right of the timeline dot */}
      <div className="md:hidden flex-1 pb-10">
        <EntryCard entry={entry} />
      </div>
    </div>
  );
};

const EntryCard = ({ entry }: { entry: StoryEntry }) => (
  <div className="py-6">
    {entry.illustration && (
      <div className="w-20 h-20 mb-4">
        <img
          src={entry.illustration}
          alt=""
          className="w-full h-full object-contain opacity-80"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
    )}
    <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-1">
      {entry.date}
    </p>
    <h3 className="font-serif text-2xl md:text-3xl font-medium text-wood mb-3">
      {entry.title}
    </h3>
    <p className="font-sans text-sm leading-relaxed text-wood-light max-w-xs">
      {entry.body}
    </p>
  </div>
);

export default function OurStory() {
  return (
    <section id="our-story" className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
            13 years in the making
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light italic text-wood">
            Our Story
          </h2>
          <div className="ornament mt-6 max-w-xs mx-auto">
            <span className="text-gold text-xl">✦</span>
          </div>
          <p className="font-sans text-sm text-wood-light mt-6 leading-relaxed max-w-lg mx-auto">
            Two kids who first found each other in 2013 — and somehow, never let go.
            This is the story of 13 years — and the beginning of forever.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {STORY.map((entry, i) => (
            <TimelineEntry key={entry.date} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
