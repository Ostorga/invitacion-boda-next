import Countdown from "@/components/Countdown/Countdown";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import OurStory from "@/components/OurStory/OurStory";
import RSVPForm from "@/components/RSVPForm/RSVPForm";
import WeddingDetails from "@/components/WeddingDetails/WeddingDetails";

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <WeddingDetails />
      <OurStory />
      <RSVPForm />
      <Footer />
    </main>
  );
}
