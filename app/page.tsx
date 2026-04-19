import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import EventDetails from "@/components/EventDetails";
import DressCode from "@/components/DressCode";
import RSVP from "@/components/RSVP";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <OurStory />
      <EventDetails />
      <DressCode />
      <RSVP />
      <FAQ />
      <Footer />
    </main>
  );
}
