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
      "For the Akad Nikah, we request traditional Malay attire in muted pastel or earth tones. For the Walimatul Urus reception, rich jewel tones are warmly welcomed — deep emeralds, burgundy, and navy pair beautifully with the décor. Please avoid white and bright yellow (kuning), which are reserved for the bridal party.",
  },
  {
    question: "Is the event family-friendly?",
    answer:
      "Absolutely. Children are welcome at both ceremonies. Please indicate the number of children when you RSVP so we can prepare child-friendly meal options and ensure comfortable seating for families.",
  },
  {
    question: "Will there be parking available?",
    answer:
      "Yes, ample parking is available at both venues. For the Akad Nikah at Masjid Wilayah, use the lower car park off Jalan Duta. For the Walimatul Urus at Dewan Perdana Felda, parking is available on-site. We recommend arriving slightly early on busy roads.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "We ask all guests to arrive at least 15 minutes before each ceremony. The Akad Nikah begins at 10:00 AM sharp. Doors for the Walimatul Urus open at 12:30 PM, with lunch served from 1:00 PM.",
  },
  {
    question: "Are photographs allowed?",
    answer:
      "Photography is encouraged during the reception. We kindly ask guests to keep phones and cameras away during the solemnisation (Akad Nikah) itself so the moment remains reverent. Our official photographer will capture everything — photos will be shared after the day.",
  },
  {
    question: "I have dietary restrictions. What should I do?",
    answer:
      "All food served is halal. If you have specific allergies or dietary requirements beyond the options in the RSVP form, please note them in the 'Dietary Notes' field or reach out to us directly. We will do our best to accommodate.",
  },
  {
    question: "Can I bring a plus-one?",
    answer:
      "Due to venue capacity, we are unable to accommodate additional guests beyond those named on the invitation. Please list the total number of attendees in your party when RSVPing.",
  },
  {
    question: "How can I contact the couple?",
    answer:
      "You can reach Aisyah at +60 12-XXX XXXX or Razif at +60 11-XXX XXXX for any questions not answered here. We will do our best to respond within a day.",
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
                <p className="font-sans text-sm text-wood-light leading-relaxed pb-6 pr-8">
                  {faq.answer}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
