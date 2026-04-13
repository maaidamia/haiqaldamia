type ColorSwatch = {
  name: string;
  hex: string;
};

type AttireOption = {
  gender: string;
  attire: string[];
  description: string;
};

const EARTHY_TONES: ColorSwatch[] = [
  { name: "Terracotta", hex: "#C2704E" },
  { name: "Sage", hex: "#9CAF88" },
  { name: "Warm Brown", hex: "#8B6F4E" },
  { name: "Olive", hex: "#6B7C5E" },
  { name: "Clay", hex: "#B4846C" },
];

const VINTAGE_PASTELS: ColorSwatch[] = [
  { name: "Dusty Rose", hex: "#D4A0A0" },
  { name: "Powder Blue", hex: "#A8C4D8" },
  { name: "Muted Lavender", hex: "#B8A9C9" },
  { name: "Soft Peach", hex: "#E8C4B0" },
  { name: "Sage Mist", hex: "#C5D5C5" },
];

const ATTIRE_OPTIONS: AttireOption[] = [
  {
    gender: "Women",
    attire: ["Baju Kurung Kedah", "Classic Kebaya"],
    description:
      "Flowing silhouettes and traditional cuts that embody the grace of a bygone era. Lace detailing and songket accents are warmly welcomed.",
  },
  {
    gender: "Men",
    attire: ["Baju Melayu Teluk Belanga"],
    description:
      "The collarless Teluk Belanga style paired with a sampin captures the understated elegance of traditional Malay heritage.",
  },
];

const SwatchGroup = ({
  title,
  swatches,
}: {
  title: string;
  swatches: ColorSwatch[];
}) => (
  <div className="flex flex-col items-center gap-4">
    <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold">
      {title}
    </p>
    <div className="flex gap-3">
      {swatches.map((swatch) => (
        <div key={swatch.name} className="flex flex-col items-center gap-2">
          <div
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-cream-dark shadow-sm"
            style={{ backgroundColor: swatch.hex }}
            aria-label={`${swatch.name}: ${swatch.hex}`}
          />
          <span className="font-sans text-[9px] text-wood-light text-center leading-tight max-w-[3.5rem]">
            {swatch.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default function DressCode() {
  return (
    <section id="dress-code" className="py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
            What to wear
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light italic text-wood">
            Nostalgia Malaya
          </h2>
          <div className="ornament mt-6 max-w-xs mx-auto">
            <span className="text-gold text-xl">✦</span>
          </div>
          <p className="font-sans text-sm text-wood-light mt-6 leading-relaxed max-w-lg mx-auto">
            Our theme is inspired by the timeless charm of classic Malay heritage.
            We invite you to dress in traditional attire that reflects the warmth
            and elegance of a nostalgic era.
          </p>
        </div>

        {/* Attire options */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {ATTIRE_OPTIONS.map((option) => (
            <div
              key={option.gender}
              className="bg-ivory border border-cream-dark p-8 flex flex-col gap-4"
            >
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold">
                {option.gender}
              </p>
              <div className="flex flex-col gap-1">
                {option.attire.map((name) => (
                  <h3
                    key={name}
                    className="font-serif text-xl md:text-2xl font-medium text-wood"
                  >
                    {name}
                  </h3>
                ))}
              </div>
              <div className="w-10 h-px bg-gold/40" />
              <p className="font-sans text-sm text-wood-light leading-relaxed">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        {/* Color palettes */}
        <div className="text-center mb-10">
          <h3 className="font-serif text-2xl md:text-3xl font-light text-wood mb-2">
            Suggested Colour Palette
          </h3>
          <p className="font-sans text-sm text-wood-light leading-relaxed max-w-md mx-auto">
            Choose from earthy tones or vintage pastels to complement the evening ambiance
            of Rumah Abang Jamil.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16 mb-12">
          <SwatchGroup title="Earthy Tones" swatches={EARTHY_TONES} />
          <SwatchGroup title="Vintage Pastels" swatches={VINTAGE_PASTELS} />
        </div>

        {/* Colours to avoid */}
        <div className="border border-gold/20 bg-ivory/80 p-6 text-center max-w-lg mx-auto">
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
            Kindly avoid
          </p>
          <p className="font-sans text-sm text-wood-light leading-relaxed">
            <span className="font-medium text-wood">White and off-white</span> (reserved
            for the bride) and{" "}
            <span className="font-medium text-wood">bright yellow</span> (reserved for
            royalty in Malay tradition).
          </p>
        </div>
      </div>
    </section>
  );
}
