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
  title: "Maisa & Haiqal | 19 September 2026 | #HaiMaiLove",
  description:
    "Join Maisa & Haiqal as they celebrate their Akad Nikah at Rumah Abang Jamil, Klang. RSVP and find all the details for our special evening.",
  openGraph: {
    title: "Maisa & Haiqal | 19 September 2026",
    description:
      "We are getting married! Join us at Rumah Abang Jamil, Klang. #HaiMaiLove",
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
