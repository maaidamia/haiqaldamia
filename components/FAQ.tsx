"use client";

import * as Accordion from "@radix-ui/react-accordion";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQS: FAQItem[] = [
  {
    question: "What is the dress code?",
    answer:
      "Our theme is Temasya Bangsawan Malaya—Classic Traditional / 1950s Era (Tradisional Klasik / Era 50-an). Think P. Ramlee and Saloma: Baju Kurung Kedah, Kebaya Sulam, and Baju Melayu Teluk Belanga worn with Kain Pelikat and Songkok are highly encouraged; gentlemen may also wear a Kemeja Batik. Suggested colours are shown on the Dress Code page under Warm & wood and Vintage & jewel. Please avoid white or off-white (reserved for the bride) and black. See the Dress Code section for the full wording and swatches.",
  },
  {
    question: "Is this an adults-only event?",
    answer:
      "Yes. We love your little ones, but to maintain the intimate atmosphere of our evening celebration, we kindly request that only adults attend. We hope you understand and appreciate the opportunity to enjoy a night out.",
  },
  {
    question: "Can I bring a plus-one or additional guests?",
    answer:
      "Due to our intimate venue capacity of 300 guests, this invitation is extended exclusively to you and those named on your invite. We are unable to accommodate additional guests beyond those listed. Thank you for your understanding.",
  },
  {
    question: "Is there parking at Rumah Abang Jamil?",
    answer:
      "Yes, parking is available in the compound and surrounding area of Rumah Abang Jamil. We recommend arriving slightly earlier to secure a spot. Use the Google Maps or Waze links in the Event Details section for directions.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "The event begins at 7:00 PM. We recommend arriving by 6:45 PM so you can be comfortably seated before the ceremony starts. The evening will conclude by 11:00 PM.",
  },
  {
    question: "Are photographs allowed?",
    answer:
      "We warmly welcome photographs during the reception and celebration. During the solemnisation (Akad Nikah) itself, we kindly ask that phones and cameras be kept aside so the moment remains reverent. Our official photographer will capture everything, and photos will be shared after the event.",
  },
  {
    question: "How can I contact the couple?",
    answer: "__CONTACT__",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-ivory">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
            Everything you need to know
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light italic text-wood">
            FAQ
          </h2>
          <div className="ornament mt-6 max-w-xs mx-auto">
            <span className="text-gold text-xl">✦</span>
          </div>
          <p className="font-sans text-sm text-wood-light mt-6 leading-relaxed max-w-lg mx-auto">
            If your question isn&rsquo;t answered here, reach out to us directly — we&rsquo;d love
            to hear from you.
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="flex flex-col divide-y divide-cream-dark">
          {FAQS.map((faq, i) => (
            <Accordion.Item
              key={i}
              value={`item-${i}`}
              className="group"
            >
              <Accordion.Header>
                <Accordion.Trigger
                  className="flex w-full items-start justify-between py-5 text-left gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold group"
                  aria-label={faq.question}
                >
                  <span className="font-serif text-lg md:text-xl font-medium text-wood group-data-[state=open]:text-wood leading-snug">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 mt-1 w-5 h-5 text-gold transition-transform duration-300 group-data-[state=open]:rotate-45">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <line x1="10" y1="4" x2="10" y2="16" />
                      <line x1="4" y1="10" x2="16" y2="10" />
                    </svg>
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-[slideDown_200ms_ease-out] data-[state=closed]:animate-[slideUp_200ms_ease-out]">
                {faq.answer === "__CONTACT__" ? (
                  <p className="font-sans text-sm text-wood-light leading-relaxed pb-6 pr-8">
                    Reach out to{" "}
                    <a
                      href="tel:+60132960591"
                      className="text-gold hover:text-wood transition-colors underline underline-offset-2"
                    >
                      Maisa
                    </a>
                    {" "}or{" "}
                    <a
                      href="tel:+60192729245"
                      className="text-gold hover:text-wood transition-colors underline underline-offset-2"
                    >
                      Haiqal
                    </a>
                    {" "}and we’ll get back to you as soon as possible.
                  </p>
                ) : (
                  <p className="font-sans text-sm text-wood-light leading-relaxed pb-6 pr-8">
                    {faq.answer}
                  </p>
                )}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
