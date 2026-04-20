"use client";

const StarAndCrescentIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 text-gold" aria-hidden="true">
    <path
      d="M20 8 C13.37 8 8 13.37 8 20 C8 26.63 13.37 32 20 32 C16.5 32 13 29 13 20 C13 11 16.5 8 20 8Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M26 12 L27.5 16 L32 16 L28.5 18.5 L30 22.5 L26 20 L22 22.5 L23.5 18.5 L20 16 L24.5 16 Z"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

const MapIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const DetailRow = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <div className="flex flex-col sm:flex-row sm:gap-4">
    <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-gold w-16 flex-shrink-0 mt-0.5">
      {label}
    </span>
    <span className="font-sans text-sm text-wood-light leading-relaxed">{value}</span>
  </div>
);

export default function EventDetails() {
  return (
    <section id="event-details" className="py-24 bg-ivory">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
            Save the date
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light italic text-wood">
            Event Details
          </h2>
          <div className="ornament mt-6 max-w-xs mx-auto">
            <span className="text-gold text-xl">✦</span>
          </div>
          <p className="font-sans text-sm text-wood-light mt-6 max-w-lg mx-auto leading-relaxed">
            We warmly invite you to witness and celebrate our Akad Nikah on a
            beautiful evening at a traditional wooden house in Klang.
          </p>
        </div>

        {/* Single event card */}
        <div className="group relative bg-ivory border border-cream-dark hover:border-gold/40 transition-colors duration-300 p-8 md:p-10 flex flex-col gap-6 max-w-2xl mx-auto">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="flex items-start gap-4">
            <StarAndCrescentIcon />
            <div>
              <p lang="ms" className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold mb-1">
                Akad Nikah
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-wood">
                Rumah Abang Jamil
              </h3>
            </div>
          </div>

          <div className="w-12 h-px bg-gold/40" />

          <div className="flex flex-col gap-3">
            <DetailRow label="Date" value="Saturday, 19 September 2026" />
            <DetailRow label="Time" value="7:00 PM — 11:00 PM" />
            <DetailRow label="Venue" value="Rumah Abang Jamil, Klang" />
            <DetailRow
              label="Dress"
              value={
                <span>
                  Temasya Bangsawan Malaya —{" "}
                  <button
                    onClick={() =>
                      document
                        .getElementById("dress-code")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-gold underline underline-offset-2 hover:text-wood transition-colors"
                  >
                    View dress code
                  </button>
                </span>
              }
            />
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rumah+Abang+Jamil+Klang+Selangor+Malaysia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions via Google Maps"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-gold hover:text-wood transition-colors duration-200"
            >
              <MapIcon />
              Google Maps
            </a>
            <a
              href="https://waze.com/ul?q=Rumah+Abang+Jamil+Klang+Selangor&navigate=yes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions via Waze"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-gold hover:text-wood transition-colors duration-200"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              Waze
            </a>
          </div>
        </div>

        {/* Exclusive invitation note */}
        <div className="mt-10 text-center border border-gold/20 bg-cream/50 p-6 md:p-8 max-w-2xl mx-auto">
          <p className="font-sans text-xs tracking-[0.15em] uppercase text-gold mb-3">
            A gentle note
          </p>
          <p className="font-sans text-sm text-wood-light leading-relaxed">
            This invitation is extended exclusively to you and those named. Due to our
            intimate venue capacity of 300 guests, we kindly request that only those
            listed attend. We appreciate your understanding and look forward to
            celebrating with you.
          </p>
        </div>
      </div>
    </section>
  );
}
