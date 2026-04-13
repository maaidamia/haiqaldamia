"use client";

import { useState } from "react";

type FormState = {
  name: string;
  pax: number;
  phone: string;
  dietary: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const initialForm: FormState = {
  name: "",
  pax: 1,
  phone: "",
  dietary: "",
};

const inputClass =
  "w-full bg-transparent border-b border-cream-dark focus:border-gold outline-none font-sans text-sm text-wood py-2 transition-colors duration-200 placeholder:text-wood-light/50";

const labelClass = "font-sans text-[10px] tracking-[0.2em] uppercase text-gold";

export default function RSVP() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaxChange = (delta: number) => {
    setForm((prev) => ({
      ...prev,
      pax: Math.max(1, Math.min(10, prev.pax + delta)),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setErrorMsg("Please fill in your name and phone number.");
      return;
    }
    setErrorMsg("");
    setStatus("loading");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="rsvp" className="py-24 bg-cream">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
            Kindly respond by 1 September 2026
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light italic text-wood">
            RSVP
          </h2>
          <div className="ornament mt-6 max-w-xs mx-auto">
            <span className="text-gold text-xl">✦</span>
          </div>
          <p className="font-sans text-sm text-wood-light mt-6 leading-relaxed">
            Your presence would mean the world to us. Please confirm your attendance
            so we can prepare for a wonderful evening together.
          </p>
        </div>

        {/* Adults-only and exclusive invitation note */}
        <div className="border border-gold/20 bg-ivory/80 p-5 text-center mb-10">
          <p className="font-sans text-xs text-wood-light leading-relaxed">
            This RSVP is for the named guests on your invitation only. Kindly note
            that this is an <span className="font-medium text-wood">adults-only</span>{" "}
            celebration.
          </p>
        </div>

        {status === "success" ? (
          <div className="text-center py-16 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-serif text-3xl font-light italic text-wood">
              Thank you!
            </h3>
            <p className="font-sans text-sm text-wood-light max-w-xs leading-relaxed">
              We have received your RSVP and cannot wait to celebrate with you at
              Rumah Abang Jamil.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-4 font-sans text-xs tracking-[0.15em] uppercase text-gold hover:text-wood transition-colors"
              aria-label="Submit another RSVP"
            >
              Submit another response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
            {/* Full name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className={labelClass}>
                Full Name <span className="text-gold">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                aria-required="true"
                className={inputClass}
              />
            </div>

            {/* Phone number */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className={labelClass}>
                Phone Number <span className="text-gold">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="e.g. 012-345 6789"
                required
                aria-required="true"
                className={inputClass}
              />
            </div>

            {/* Number of pax */}
            <div className="flex flex-col gap-2">
              <span className={labelClass}>
                Number of Pax <span className="text-gold">*</span>
              </span>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => handlePaxChange(-1)}
                  aria-label="Decrease guest count"
                  className="w-8 h-8 border border-cream-dark text-wood-light hover:border-gold hover:text-gold transition-colors flex items-center justify-center font-sans text-lg"
                >
                  −
                </button>
                <span className="font-serif text-2xl text-wood w-8 text-center tabular-nums">
                  {form.pax}
                </span>
                <button
                  type="button"
                  onClick={() => handlePaxChange(1)}
                  aria-label="Increase guest count"
                  className="w-8 h-8 border border-cream-dark text-wood-light hover:border-gold hover:text-gold transition-colors flex items-center justify-center font-sans text-lg"
                >
                  +
                </button>
                <span className="font-sans text-xs text-wood-light/60">
                  (as per invitation)
                </span>
              </div>
            </div>

            {/* Dietary restrictions */}
            <div className="flex flex-col gap-2">
              <label htmlFor="dietary" className={labelClass}>
                Dietary Restrictions
              </label>
              <textarea
                id="dietary"
                name="dietary"
                value={form.dietary}
                onChange={handleChange}
                placeholder="Any dietary restrictions or allergies we should know about?"
                rows={3}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Error message */}
            {errorMsg && (
              <p className="font-sans text-xs text-red-500" role="alert">
                {errorMsg}
              </p>
            )}
            {status === "error" && (
              <p className="font-sans text-xs text-red-500" role="alert">
                Something went wrong. Please try again or contact us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              aria-label="Submit RSVP"
              className="mt-2 w-full font-sans text-xs tracking-[0.2em] uppercase border border-wood text-wood py-4 hover:bg-wood hover:text-ivory transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gold"
            >
              {status === "loading" ? "Sending…" : "Confirm RSVP"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
