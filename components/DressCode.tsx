type ColorSwatch = {
  name: string;
  hex: string;
};

/** Tuned for warm wood interiors + evening lamp light (not flat “template” neutrals). */
const WARM_WOOD_EVENING: ColorSwatch[] = [
  { name: "Burnt sienna", hex: "#A65D48" },
  { name: "Chestnut", hex: "#6B4423" },
  { name: "Bronze", hex: "#8F6B4A" },
  { name: "Forest moss", hex: "#4F5A46" },
  { name: "Wine", hex: "#6B3A45" },
  { name: "Maroon", hex: "#722F37" },
];

/** Softer vintage tones plus a jewel blue (royal blue is a statement, not “muted”). */
const VINTAGE_AND_JEWEL: ColorSwatch[] = [
  { name: "Dusty rose", hex: "#C48B8B" },
  { name: "Smoky teal", hex: "#5F7D76" },
  { name: "Mauve", hex: "#9B889E" },
  { name: "Dusky apricot", hex: "#C9A07A" },
  { name: "Slate blue", hex: "#6E7F8E" },
  { name: "Royal blue", hex: "#1E3A8A" },
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
    <div className="flex flex-wrap justify-center gap-4 max-w-md">
      {swatches.map((swatch) => (
        <div key={swatch.name} className="group flex flex-col items-center gap-2">
          <div
            className="relative w-14 h-14 md:w-16 md:h-16 rounded-full border border-cream-dark shadow-sm cursor-default"
            style={{ backgroundColor: swatch.hex }}
            aria-label={`${swatch.name}: ${swatch.hex}`}
            title={swatch.hex}
          >
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-wood text-ivory font-sans text-[9px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {swatch.hex}
            </span>
          </div>
          <span className="font-sans text-[9px] text-wood-light text-center leading-tight max-w-[4rem]">
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
        <div className="text-center mb-12">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
            Dress code
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light italic text-wood leading-tight">
            Temasya Bangsawan Malaya
            <span className="not-italic inline-block ml-1" aria-hidden="true">
              ✨
            </span>
          </h2>
          <p className="font-serif text-xl md:text-2xl text-wood mt-5 font-medium">
            Classic Traditional / 1950s Era
          </p>
          <p
            lang="ms"
            className="font-sans text-sm tracking-wide text-wood-light mt-1"
          >
            Tradisional Klasik / Era 50-an
          </p>
          <div className="ornament mt-8 max-w-xs mx-auto">
            <span className="text-gold text-xl">✦</span>
          </div>
        </div>

        <div className="bg-ivory border border-cream-dark p-8 md:p-10 mb-14 text-center">
          <p className="font-sans text-sm md:text-base text-wood-light leading-relaxed max-w-2xl mx-auto">
            Step into an era of classic elegance and lively charm. We invite you to
            dress in your finest 1950s &quot;zaman dulu&quot; attire—think the
            high-society glamour of P. Ramlee &amp; Saloma.{" "}
            <span lang="ms" className="text-wood">
              Baju Kurung Kedah
            </span>
            ,{" "}
            <span lang="ms" className="text-wood">
              Kebaya Sulam
            </span>
            , and{" "}
            <span lang="ms" className="text-wood">
              Baju Melayu Teluk Belanga
            </span>{" "}
            worn with{" "}
            <span lang="ms" className="text-wood">
              Kain Pelikat
            </span>{" "}
            and{" "}
            <span lang="ms" className="text-wood">
              Songkok
            </span>{" "}
            are highly encouraged. Gentlemen may also wear a{" "}
            <span lang="ms" className="text-wood font-medium">
              Kemeja Batik
            </span>{" "}
            in the same vintage spirit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <div className="bg-ivory border border-cream-dark p-8 flex flex-col gap-4">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold">
              Women
            </p>
            <h3 lang="ms" className="font-serif text-xl md:text-2xl font-medium text-wood">
              Baju Kurung Kedah · Kebaya Sulam
            </h3>
            <div className="w-10 h-px bg-gold/40" />
            <p className="font-sans text-sm text-wood-light leading-relaxed">
              For <span className="text-wood font-medium">Baju Kurung Kedah</span> and{" "}
              <span className="text-wood font-medium">Kebaya Sulam</span>, seek
              silhouettes and sulam that echo silver-screen grace—lace and florals soft
              as a slow dance, songket catching the light like a remembered reel. All of
              it belongs to this evening.
            </p>
          </div>
          <div className="bg-ivory border border-cream-dark p-8 flex flex-col gap-4">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold">
              Men
            </p>
            <h3 lang="ms" className="font-serif text-xl md:text-2xl font-medium text-wood">
              Baju Melayu Teluk Belanga · Kemeja Batik
            </h3>
            <div className="w-10 h-px bg-gold/40" />
            <p className="font-sans text-sm text-wood-light leading-relaxed">
              For <span className="text-wood font-medium">Teluk Belanga</span>, let{" "}
              <span className="text-wood font-medium">kain pelikat</span> fall beside a{" "}
              <span className="text-wood font-medium">songkok</span>—the full, familiar
              silhouette of the era. Prefer cloth that moves? A{" "}
              <span className="text-wood font-medium">Kemeja Batik</span> in rich pattern
              and a classic cut carries the same warmth under timber and lamplight.
            </p>
          </div>
        </div>

        <div className="text-center mb-10">
          <h3 className="font-serif text-2xl md:text-3xl font-light text-wood mb-2">
            Suggested colour palette
          </h3>
          <p className="font-sans text-sm text-wood-light leading-relaxed max-w-md mx-auto">
            A few ideas—feel free to wear something in a similar spirit.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16 mb-12">
          <SwatchGroup title="Warm & wood" swatches={WARM_WOOD_EVENING} />
          <SwatchGroup title="Vintage & jewel" swatches={VINTAGE_AND_JEWEL} />
        </div>

        <div className="border border-gold/20 bg-ivory/80 p-6 text-center max-w-lg mx-auto">
          <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
            Kindly avoid
          </p>
          <p className="font-sans text-sm text-wood-light leading-relaxed">
            Please avoid <span className="font-medium text-wood">white or off-white</span>{" "}
            (reserved for the bride) and <span className="font-medium text-wood">black</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
