import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { FaqSection } from "./components/FaqSection";
import OurServices from "./components/OurServices";
import Partners from "./components/Partners";
import ReviewCarousel from "./components/ReviewCarousel";
import { FinalCTA } from "./components/FinalCTA";
import { Toaster } from "sonner";
import WhatsappLive from "./components/WhatsappLive";
import { ContactsProvider } from "../../../components/ui/ContactProvider";
import ScrollNavigation from "@/components/ui/ScrollNavigation";
import { Projects } from "./components/Projects";

const PageNew = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="w-screen flex flex-col">
        <HeroSection />
        <Partners />
        <OurServices />
        <ReviewCarousel />
        <ContactsProvider />
        <Projects />
        <FaqSection />
        <Toaster />
        <div className="fixed bottom-8 right-4 lg:bottom-32 z-40">
          <WhatsappLive />
        </div>
        <FinalCTA />
      </main>
      <Footer />
      <ScrollNavigation />
    </div>
  );
};

export default PageNew;
