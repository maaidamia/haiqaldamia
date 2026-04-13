type EventCard = {
  type: string;
  name: string;
  address: string;
  time: string;
  dress: string;
  mapUrl: string;
  icon: React.ReactNode;
};

const RingsIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 text-gold" aria-hidden="true">
    <circle cx="14" cy="20" r="9" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="26" cy="20" r="9" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

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

const EVENTS: EventCard[] = [
  {
    type: "Akad Nikah",
    name: "Masjid Wilayah Persekutuan",
    address: "Jalan Duta, 50480 Kuala Lumpur",
    time: "10:00 AM — 12:00 PM",
    dress: "Traditional Malay attire — Muted pastels & earth tones",
    mapUrl:
      "https://www.google.com/maps/search/Masjid+Wilayah+Persekutuan+Kuala+Lumpur",
    icon: <StarAndCrescentIcon />,
  },
  {
    type: "Walimatul Urus",
    name: "Dewan Perdana Felda",
    address: "Jalan Maktab, 54000 Kuala Lumpur",
    time: "12:30 PM — 5:00 PM",
    dress: "Traditional Malay attire — Rich jewel tones welcome",
    mapUrl: "https://www.google.com/maps/search/Dewan+Perdana+Felda+Kuala+Lumpur",
    icon: <RingsIcon />,
  },
];

const EventCard = ({ event }: { event: EventCard }) => (
  <div className="group relative bg-ivory border border-cream-dark hover:border-gold/40 transition-colors duration-300 p-8 md:p-10 flex flex-col gap-6">
    {/* Top accent bar */}
    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="flex items-start gap-4">
      {event.icon}
      <div>
        <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold mb-1">
          {event.type}
        </p>
        <h3 className="font-serif text-2xl md:text-3xl font-medium text-wood">
          {event.name}
        </h3>
      </div>
    </div>

    <div className="w-12 h-px bg-gold/40" />

    <div className="flex flex-col gap-3">
      <DetailRow label="Date" value="Sunday, 14 June 2026" />
      <DetailRow label="Time" value={event.time} />
      <DetailRow label="Venue" value={event.address} />
      <DetailRow label="Dress" value={event.dress} />
    </div>

    <a
      href={event.mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Get directions to ${event.name}`}
      className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-gold hover:text-wood transition-colors duration-200 mt-auto"
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
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      Get Directions
    </a>
  </div>
);

const DetailRow = ({ label, value }: { label: string; value: string }) => (
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
      <div className="max-w-5xl mx-auto px-6">
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
            Both ceremonies will be held on the same day. We ask that guests arrive 15
            minutes before the start time to be comfortably seated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {EVENTS.map((event) => (
            <EventCard key={event.type} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
