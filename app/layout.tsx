import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aisyah & Razif | 14 June 2026",
  description:
    "Join us as we celebrate our wedding. RSVP and find all the details you need for our special day.",
  openGraph: {
    title: "Aisyah & Razif | 14 June 2026",
    description: "We are getting married! Join us to celebrate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${lato.variable} font-sans antialiased bg-ivory text-wood`}
      >
        {children}
      </body>
    </html>
  );
}
