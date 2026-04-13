"use client";

export default function SalamKaut() {
  return (
    <section id="salam-kaut" className="py-24 bg-cream">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
            Digital gift
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light italic text-wood">
            Salam Kaut
          </h2>
          <div className="ornament mt-6 max-w-xs mx-auto">
            <span className="text-gold text-xl">✦</span>
          </div>
          <p className="font-sans text-sm text-wood-light mt-6 leading-relaxed max-w-lg mx-auto">
            Your presence and prayers are the greatest gift to us. However, for
            those who wish to express their generosity, you may do so via the
            details below.
          </p>
        </div>

        {/* Gift card */}
        <div className="bg-ivory border border-cream-dark p-8 md:p-10 flex flex-col items-center gap-8 max-w-md mx-auto">
          {/* QR code placeholder */}
          <div className="w-48 h-48 border-2 border-dashed border-cream-dark flex items-center justify-center bg-cream/30">
            <img
              src="/qr-duitnow.png"
              alt="DuitNow QR code"
              className="w-full h-full object-contain"
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.style.display = "none";
                el.parentElement!.innerHTML =
                  '<span class="font-sans text-xs text-wood-light/50 text-center px-4">QR code will appear here</span>';
              }}
            />
          </div>

          <div className="w-16 h-px bg-gold/40" />

          {/* Banking details */}
          <div className="w-full flex flex-col gap-4 text-center">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold">
              Bank Transfer Details
            </p>

            <div className="flex flex-col gap-2">
              <BankDetail label="Bank" value="(Your bank name)" />
              <BankDetail label="Account" value="(Your account number)" />
              <BankDetail label="Name" value="(Your account holder name)" />
            </div>
          </div>

          <div className="w-16 h-px bg-gold/40" />

          <p className="font-sans text-xs text-wood-light/70 text-center leading-relaxed max-w-xs">
            Please include your name as the transfer reference so we can properly
            acknowledge your gift. Terima kasih daun keladi.
          </p>
        </div>
      </div>
    </section>
  );
}

const BankDetail = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-3">
    <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-gold sm:w-20 sm:text-right">
      {label}
    </span>
    <span className="font-sans text-sm text-wood font-medium">{value}</span>
  </div>
);
