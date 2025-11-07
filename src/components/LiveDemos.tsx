import { Play, Zap, Bot, MessageSquare, Phone, Video, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export const LiveDemos = () => {
  const demos = [
    {
      icon: Phone,
      title: "AI Voice Call Demo",
      description: "Experience our AI handling customer calls with natural conversations.",
      duration: "3:24"
    },
    {
      icon: MessageSquare,
      title: "Chatbot Demo",
      description: "See how our AI chatbot handles complex customer queries in real-time.",
      duration: "2:45"
    },
    {
      icon: Bot,
      title: "Workflow Automation",
      description: "Watch how we automate business processes with AI-powered workflows.",
      duration: "4:12"
    }
  ];

  return (
    <section id="demos" className="py-20 md:py-32 relative bg-muted/20">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="gradient-primary mb-4">Experience It Live</Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            See Our <span className="gradient-text">AI in Action</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch our AI solutions handle real-world scenarios with human-like precision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <div 
              key={index} 
              className="bg-card/50 border border-border/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30 group"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-primary">
                <demo.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{demo.title}</h3>
              <p className="text-muted-foreground mb-4">{demo.description}</p>
              <div className="flex items-center justify-between mt-6">
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Play className="w-4 h-4" /> {demo.duration}
                </span>
                <Button variant="outline" size="sm" className="group-hover:bg-primary/10 group-hover:border-primary/30">
                  Watch Demo <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="gradient-primary"  onClick={() => window.open('https://calendly.com/team-flexflowai/30min', '_blank', 'noopener,noreferrer')}>
            <Zap className="mr-2 h-5 w-5" /> Book a Personalized Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
