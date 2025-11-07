import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyChoose } from "@/components/WhyChoose";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChoose />
      <About />
      <Services />
      <Industries />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
