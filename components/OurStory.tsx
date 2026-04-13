"use client";

import { useEffect, useRef } from "react";

type StoryEntry = {
  date: string;
  title: string;
  body: string;
  side: "left" | "right";
};

const STORY: StoryEntry[] = [
  {
    date: "March 2020",
    title: "First Meeting",
    body:
      "We crossed paths at a mutual friend's gathering in Bangsar — a quiet dinner that neither of us planned to attend. A shared laugh over cold rendang started something neither of us expected.",
    side: "left",
  },
  {
    date: "August 2020",
    title: "First Date",
    body:
      "A walk through Taman Tasik Perdana turned into four hours of conversation, wandering through the Bird Park and ending with teh tarik at a roadside stall neither of us had visited before.",
    side: "right",
  },
  {
    date: "December 2021",
    title: "Official",
    body:
      "After a year of stolen afternoons and long phone calls, Razif asked Aisyah to be his officially — on the rooftop of his apartment, strung with warm fairy lights and a handwritten letter.",
    side: "left",
  },
  {
    date: "June 2023",
    title: "Meeting the Families",
    body:
      "A Sunday merisik that felt less like a formal occasion and more like two families that had been waiting to find each other. Both mothers cried. Both fathers pretended not to.",
    side: "right",
  },
  {
    date: "February 2026",
    title: "The Proposal",
    body:
      "At the same table where they had their very first conversation — Razif got down on one knee with his late grandmother's ring. Aisyah said yes before he finished the question.",
    side: "left",
  },
  {
    date: "14 June 2026",
    title: "Our Wedding Day",
    body:
      "Now it is your turn to witness the next chapter. We are honoured to celebrate with the people who have shaped our story from the very beginning.",
    side: "right",
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
            How it began
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light italic text-wood">
            Our Story
          </h2>
          <div className="ornament mt-6 max-w-xs mx-auto">
            <span className="text-gold text-xl">✦</span>
          </div>
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
