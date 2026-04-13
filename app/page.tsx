import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import EventDetails from "@/components/EventDetails";
import RSVP from "@/components/RSVP";
import Gallery from "@/components/Gallery";
import Registry from "@/components/Registry";
import FAQ from "@/components/FAQ";
import Travel from "@/components/Travel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <OurStory />
      <EventDetails />
      <RSVP />
      <Gallery />
      <Registry />
      <FAQ />
      <Travel />
      <Footer />
    </main>
  );
}
