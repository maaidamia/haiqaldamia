"use client";

const GeometricOrnament = () => (
  <svg
    viewBox="0 0 200 30"
    className="w-48 text-gold/50"
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

const QUICK_LINKS = [
  { label: "Our Story", id: "our-story" },
  { label: "Event Details", id: "event-details" },
  { label: "Dress Code", id: "dress-code" },
  { label: "RSVP", id: "rsvp" },
  { label: "FAQ", id: "faq" },
];

export default function Footer() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-wood text-ivory py-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-10">
        {/* Monogram */}
        <div className="flex flex-col items-center gap-3">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold/70">
            Together in love
          </p>
          <p className="font-serif text-5xl md:text-6xl font-light italic text-ivory">
            Maisa <span className="text-gold">&amp;</span> Haiqal
          </p>
          <GeometricOrnament />
          <p className="font-serif text-lg italic text-gold/70">
            #HaiMaiLove
          </p>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-ivory/50">
            19 September 2026 · Klang
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {QUICK_LINKS.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => handleScroll(id)}
                  aria-label={`Navigate to ${label}`}
                  className="font-sans text-[10px] tracking-[0.15em] uppercase text-ivory/50 hover:text-gold transition-colors duration-200"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div className="w-24 h-px bg-gold/30" />

        {/* Contact */}
        <div className="text-center">
          <p className="font-sans text-xs text-ivory/40 leading-relaxed">
            Questions? Find us on{" "}
            <a
              href="https://www.instagram.com/maaidamia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors"
              aria-label="Visit our Instagram profile"
            >
              @maaidamia
            </a>
          </p>
        </div>

        {/* Copyright */}
        <p className="font-sans text-[10px] text-ivory/25 tracking-widest">
          Made with love · 2026
        </p>
      </div>
    </footer>
  );
}
