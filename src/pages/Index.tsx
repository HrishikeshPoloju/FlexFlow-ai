import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { HowItWorks } from "@/components/HowItWorks";
import { LiveDemos } from "@/components/LiveDemos";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";
import { WhyChoose } from "@/components/WhyChoose";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Main radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,191,255,0.18),transparent_65%)] dark:bg-[radial-gradient(circle_at_top,rgba(0,191,255,0.2),transparent_65%)]" />
        
        {/* Accent gradient orbs */}
        <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-32 right-12 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
      </div>
      <Navbar />
      <Hero />
      <WhyChoose />
      <About />
      <Services />
      <Industries />
      <HowItWorks />
      <LiveDemos />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
