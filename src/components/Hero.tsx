import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--glow-blue)/0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--glow-violet)/0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 animate-fade-in w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">✨ AI-Powered Business Automation</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-[1.1] animate-fade-in">
              Automate <br />
              Everything. <br />
              <span className="gradient-text font-black">Effortlessly.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-lg text-muted-foreground max-w-xl animate-fade-in">
              FlexFlow AI builds smart agents that handle your calls, chats, and workflows — 
              so your business never stops moving.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in">
              <Button size="lg" className="gradient-primary font-semibold text-base group">
                See Live Demo
                <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glow-border text-base group"
                onClick={() => window.open('https://calendly.com/team-flexflowai/30min', '_blank', 'noopener,noreferrer')}
              >
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground">Call Automation</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">AI Availability</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold gradient-text">48hr</div>
                <div className="text-sm text-muted-foreground">Setup Time</div>
              </div>
            </div>
          </div>

          {/* Right Side - Animated 3D Visual */}
          <div className="relative hidden lg:flex items-center justify-center h-[600px]">
            {/* Main Animated Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Large Gradient Circle */}
              <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 animate-float blur-3xl"></div>
              
              {/* Rotating Ring 1 */}
              <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-primary/30 animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50"></div>
              </div>
              
              {/* Rotating Ring 2 */}
              <div className="absolute w-[350px] h-[350px] rounded-full border-2 border-secondary/30 animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary shadow-lg shadow-secondary/50"></div>
              </div>
              
              {/* Central Glass Card */}
              <div className="relative glass-card p-8 w-64 h-64 flex items-center justify-center animate-float glow-border">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-2xl gradient-primary flex items-center justify-center animate-glow">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold gradient-text">AI Powered</div>
                    <div className="text-xs text-muted-foreground">Smart Automation</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 right-10 glass-card p-4 w-24 h-24 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-3xl font-bold gradient-text">24/7</div>
              </div>
              
              <div className="absolute bottom-10 left-10 glass-card p-4 w-28 h-28 flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                <div className="space-y-1 text-center">
                  <div className="text-2xl font-bold gradient-text">100%</div>
                  <div className="text-xs text-muted-foreground">Faster</div>
                </div>
              </div>
              
              {/* Orbiting Particles */}
              <div className="absolute w-2 h-2 rounded-full bg-primary top-20 left-20 animate-pulse"></div>
              <div className="absolute w-2 h-2 rounded-full bg-secondary bottom-20 right-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
              <div className="absolute w-2 h-2 rounded-full bg-primary top-40 right-10 animate-pulse" style={{ animationDelay: "2s" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};