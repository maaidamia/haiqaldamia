type Hotel = {
  name: string;
  distance: string;
  stars: number;
  priceRange: string;
  bookingUrl: string;
  note?: string;
};

const HOTELS: Hotel[] = [
  {
    name: "Hilton Kuala Lumpur",
    distance: "3 km from venue",
    stars: 5,
    priceRange: "RM 400 – 600 / night",
    bookingUrl: "https://www.hilton.com/en/hotels/kulhitw-hilton-kuala-lumpur/",
    note: "Closest 5-star option with shuttle service available",
  },
  {
    name: "Sheraton Imperial Kuala Lumpur",
    distance: "4 km from venue",
    stars: 5,
    priceRange: "RM 350 – 550 / night",
    bookingUrl: "https://www.marriott.com/hotels/travel/kulsi-sheraton-imperial-kuala-lumpur-hotel/",
  },
  {
    name: "Aloft Kuala Lumpur Sentral",
    distance: "5 km from venue",
    stars: 4,
    priceRange: "RM 220 – 350 / night",
    bookingUrl: "https://www.marriott.com/hotels/travel/kulal-aloft-kuala-lumpur-sentral/",
    note: "Great transit access via KL Sentral",
  },
  {
    name: "Hotel Royale Bintang Kuala Lumpur",
    distance: "6 km from venue",
    stars: 4,
    priceRange: "RM 150 – 250 / night",
    bookingUrl: "https://www.royalebintang.com/kuala-lumpur/",
  },
];

const Stars = ({ count }: { count: number }) => (
  <span className="flex gap-0.5" aria-label={`${count} star hotel`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        className="w-3 h-3 text-gold fill-current"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </span>
);

const HotelCard = ({ hotel }: { hotel: Hotel }) => (
  <div className="group relative flex flex-col gap-4 bg-cream border border-cream-dark hover:border-gold/40 transition-colors duration-300 p-6">
    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div>
      <Stars count={hotel.stars} />
      <h3 className="font-serif text-lg font-medium text-wood mt-2 leading-snug">
        {hotel.name}
      </h3>
    </div>

    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <svg
          className="w-3.5 h-3.5 text-gold flex-shrink-0"
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
        </svg>
        <span className="font-sans text-xs text-wood-light">{hotel.distance}</span>
      </div>
      <div className="flex items-center gap-2">
        <svg
          className="w-3.5 h-3.5 text-gold flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="font-sans text-xs text-wood-light">{hotel.priceRange}</span>
      </div>
    </div>

    {hotel.note && (
      <p className="font-sans text-xs text-gold/80 italic leading-relaxed">
        {hotel.note}
      </p>
    )}

    <a
      href={hotel.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Book ${hotel.name}`}
      className="inline-flex items-center gap-1.5 font-sans text-xs tracking-[0.15em] uppercase text-gold hover:text-wood transition-colors duration-200 mt-auto"
    >
      Book Now
      <svg
        className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
);

export default function Travel() {
  return (
    <section id="travel" className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
            Getting here
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light italic text-wood">
            Travel & Stay
          </h2>
          <div className="ornament mt-6 max-w-xs mx-auto">
            <span className="text-gold text-xl">✦</span>
          </div>
          <p className="font-sans text-sm text-wood-light mt-6 leading-relaxed max-w-lg mx-auto">
            Both venues are conveniently located in central Kuala Lumpur with accessible
            transport links. We have curated a selection of nearby hotels for out-of-town guests.
          </p>
        </div>

        {/* Map embed */}
        <div className="w-full h-72 md:h-96 mb-12 overflow-hidden border border-cream-dark">
          {/* Replace the src with your actual venue embed URL from Google Maps > Share > Embed a map */}
          <iframe
            title="Wedding Venue Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.662867697!2d101.68505!3d3.17193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc48c6b1a07979%3A0xa5c3e80b9e0f33ab!2sMasjid%20Wilayah%20Persekutuan!5e0!3m2!1sen!2smy!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "sepia(20%) contrast(90%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Map showing wedding venue location"
          />
        </div>

        {/* Transport info */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            {
              mode: "By Car",
              detail: "Ample parking at both venues. GPS: 3.17193, 101.68505 for the Masjid Wilayah.",
              icon: "🚗",
            },
            {
              mode: "By LRT",
              detail: "Take the Kelana Jaya Line to Duta station, then a 5-minute Grab ride to the Masjid.",
              icon: "🚇",
            },
            {
              mode: "By Grab",
              detail:
                "Search 'Masjid Wilayah Persekutuan' or 'Dewan Perdana Felda' — both are well-recognised landmarks.",
              icon: "📱",
            },
          ].map((t) => (
            <div key={t.mode} className="bg-ivory border border-cream-dark p-5">
              <p className="text-xl mb-2" aria-hidden="true">
                {t.icon}
              </p>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-2">
                {t.mode}
              </p>
              <p className="font-sans text-xs text-wood-light leading-relaxed">{t.detail}</p>
            </div>
          ))}
        </div>

        {/* Hotels */}
        <div>
          <h3 className="font-serif text-2xl font-light text-wood mb-6 text-center">
            Recommended Accommodations
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOTELS.map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
