import Closing from "@/components/Closing/Closing";
import Countdown from "@/components/Countdown/Countdown";
import Directions from "@/components/Directions/Directions";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Hero from "@/components/Hero/Hero";
import Monogram from "@/components/Monogram/Monogram";
import OurStory from "@/components/OurStory/OurStory";
import RSVPForm from "@/components/RSVPForm/RSVPForm";
import WeddingDetails from "@/components/WeddingDetails/WeddingDetails";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <OurStory />
      <Countdown />
      <Monogram />
      <WeddingDetails />
      <Directions />
      <Gallery />
      <RSVPForm />
      <Closing />
      <Footer />
    </main>
  );
}
