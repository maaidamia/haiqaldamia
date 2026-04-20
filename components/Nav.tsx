"use client";

import { useEffect, useRef, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "our-story", label: "Our Story" },
  { id: "event-details", label: "Details" },
  { id: "dress-code", label: "Dress Code" },
  { id: "rsvp", label: "RSVP" },
  { id: "faq", label: "FAQ" },
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const prefersReduced = useRef(
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(scrollY > 60);
      setScrollProgress(docH > 0 ? (scrollY / docH) * 100 : 0);

      // Single-pass active section detection — more reliable than multi-observer
      const midpoint = window.innerHeight * 0.4;
      let current = "hero";
      for (const { id } of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= midpoint) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-ivory/95 backdrop-blur-sm shadow-sm border-b border-cream-dark"
          : "bg-transparent"
      }`}
    >
      {/* Scroll progress bar — only visible once scrolled, respects prefers-reduced-motion */}
      {!prefersReduced.current && (
        <div
          className="absolute bottom-0 left-0 h-px bg-gold/60 transition-none"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      )}
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Monogram */}
        <button
          onClick={() => handleNavClick("hero")}
          className="font-serif text-xl font-semibold text-wood tracking-widest"
          aria-label="Go to top"
        >
          M <span className="text-gold">&amp;</span> H
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                aria-label={`Navigate to ${label}`}
                className={`font-sans text-xs tracking-[0.15em] uppercase transition-colors duration-200 pb-0.5 border-b ${
                  activeSection === id
                    ? "text-gold border-gold"
                    : "text-wood-light border-transparent hover:text-wood hover:border-gold/50"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-1"
        >
          <span
            className={`block w-6 h-px bg-wood transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2.5" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-wood transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-wood transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-ivory border-b border-cream-dark`}
      >
        <ul className="flex flex-col px-6 pb-6 pt-2 gap-4">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                aria-label={`Navigate to ${label}`}
                className={`font-sans text-xs tracking-[0.15em] uppercase w-full text-left transition-colors ${
                  activeSection === id ? "text-gold" : "text-wood-light"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
