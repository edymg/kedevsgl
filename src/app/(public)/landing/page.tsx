import { Toaster } from "sonner";

import HeroSection from "./components/HeroSection";
import { FaqSection } from "./components/FaqSection";
import Partners from "./components/Partners";
import OurServices from "./components/OurServices";
import ReviewCarousel from "./components/ReviewCarousel";
import { FinalCTA } from "./components/FinalCTA";
import WhatsappLive from "./components/WhatsappLive";
import { ContactsProvider } from "../../../components/ui/ContactProvider";
import ScrollNavigation from "@/components/ui/ScrollNavigation";
import { Projects } from "./components/Projects";
import Footer from "./components/Footer";
import { HowWeWorkSection } from "./components/HowWeWorkSection";
import { IdealClientsSection } from "./components/IdealClientsSection";
import { BenefitsSection } from "./components/BenefitsSection";

const PageNew = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="w-screen flex flex-col">
        <HeroSection />
        <Partners />
        <OurServices />
        <HowWeWorkSection />
        <IdealClientsSection />
        <BenefitsSection />
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
