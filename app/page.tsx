import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import EventDetails from "@/components/EventDetails";
import DressCode from "@/components/DressCode";
import RSVP from "@/components/RSVP";
import Gallery from "@/components/Gallery";
import SalamKaut from "@/components/SalamKaut";
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
      <Gallery />
      <SalamKaut />
      <FAQ />
      <Footer />
    </main>
  );
}
