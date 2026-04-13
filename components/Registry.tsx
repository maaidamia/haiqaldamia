type RegistryItem = {
  store: string;
  description: string;
  url: string;
  initial: string;
};

const REGISTRIES: RegistryItem[] = [
  {
    store: "IKEA Malaysia",
    description: "Home furnishings, kitchenware & bedroom essentials",
    url: "https://www.ikea.com/my/en/",
    initial: "IK",
  },
  {
    store: "Lazada",
    description: "Electronics, appliances & household goods",
    url: "https://www.lazada.com.my/",
    initial: "LZ",
  },
  {
    store: "Hario Malaysia",
    description: "Premium coffee & tea brewing equipment",
    url: "https://hario.com.my/",
    initial: "HR",
  },
  {
    store: "Cash Gift (DuitNow)",
    description:
      "We appreciate any contribution toward our new home. Send via DuitNow to 011-XXXXXXXX.",
    url: "#",
    initial: "♡",
  },
];

const RegistryCard = ({ item }: { item: RegistryItem }) => (
  <a
    href={item.url}
    target={item.url !== "#" ? "_blank" : undefined}
    rel="noopener noreferrer"
    aria-label={`Visit ${item.store} registry`}
    tabIndex={0}
    className="group relative flex flex-col gap-5 bg-ivory border border-cream-dark hover:border-gold/40 transition-all duration-300 p-8 focus:outline-none focus:ring-2 focus:ring-gold"
  >
    {/* Top accent */}
    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    {/* Store initial avatar */}
    <div className="w-14 h-14 border-2 border-cream-dark group-hover:border-gold/50 transition-colors flex items-center justify-center flex-shrink-0">
      <span className="font-serif text-xl text-wood">{item.initial}</span>
    </div>

    <div>
      <h3 className="font-serif text-xl font-medium text-wood mb-2 group-hover:text-wood transition-colors">
        {item.store}
      </h3>
      <p className="font-sans text-sm text-wood-light leading-relaxed">
        {item.description}
      </p>
    </div>

    {item.url !== "#" && (
      <span className="inline-flex items-center gap-1 font-sans text-xs tracking-[0.15em] uppercase text-gold mt-auto">
        View Registry
        <svg
          className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </span>
    )}
  </a>
);

export default function Registry() {
  return (
    <section id="registry" className="py-24 bg-cream">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
            For the new chapter
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light italic text-wood">
            Registry
          </h2>
          <div className="ornament mt-6 max-w-xs mx-auto">
            <span className="text-gold text-xl">✦</span>
          </div>
          <p className="font-sans text-sm text-wood-light mt-6 leading-relaxed max-w-lg mx-auto">
            Your presence at our wedding is the greatest gift. If you wish to celebrate
            with something more, we have registered at the following stores.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REGISTRIES.map((item) => (
            <RegistryCard key={item.store} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
