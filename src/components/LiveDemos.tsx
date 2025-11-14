import { useState } from "react";
import { Play, Zap, Bot, MessageSquare, Phone, Video, ArrowRight, X } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

export const LiveDemos = () => {
  const [selectedDemo, setSelectedDemo] = useState<number | null>(null);
  const [showCalendly, setShowCalendly] = useState(false);

  const demos = [
    {
      icon: Phone,
      title: "AI Voice Call Demo",
      description: "Experience our AI handling customer calls with natural conversations.",
      duration: "3:24",
      videoUrl: "https://drive.google.com/file/d/YOUR_VIDEO_ID_HERE/preview" // Replace with actual video ID
    },
    {
      icon: MessageSquare,
      title: "Chatbot Demo",
      description: "See how our AI chatbot handles complex customer queries in real-time.",
      duration: "2:45",
      videoUrl: "https://drive.google.com/file/d/1y5HpEXruoI70gqSxpARphHbaiaEl9EqW/preview"
    },
    {
      icon: Bot,
      title: "Workflow Automation",
      description: "Watch how we automate business processes with AI-powered workflows.",
      duration: "4:12",
      videoUrl: "https://drive.google.com/file/d/YOUR_VIDEO_ID_HERE/preview" // Replace with actual video ID
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
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="group-hover:bg-primary/10 group-hover:border-primary/30"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedDemo(index);
                  }}
                >
                  Watch Demo <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="gradient-primary" onClick={() => setShowCalendly(true)}>
            <Zap className="mr-2 h-5 w-5" /> Book a Personalized Demo
          </Button>
        </div>
      </div>

      {/* Video Player Modal */}
      <Dialog open={selectedDemo !== null} onOpenChange={() => setSelectedDemo(null)}>
        <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] p-0 bg-black/95 border-primary/20 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedDemo !== null ? demos[selectedDemo].title : ''}
          </DialogTitle>
          <div className="relative w-full aspect-video">
            {selectedDemo !== null && (
              <iframe
                src={demos[selectedDemo].videoUrl}
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={demos[selectedDemo].title}
              />
            )}
          </div>
          <div className="p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">
              {selectedDemo !== null && demos[selectedDemo].title}
            </h3>
            <p className="text-sm md:text-base text-gray-300">
              {selectedDemo !== null && demos[selectedDemo].description}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Calendly Booking Modal */}
      <Dialog open={showCalendly} onOpenChange={setShowCalendly}>
        <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0 bg-white border-primary/20 overflow-hidden">
          <DialogTitle className="sr-only">
            Book a Personalized Demo
          </DialogTitle>
          <div className="relative w-full h-full">
            <iframe
              src="https://calendly.com/team-flexflowai/30min"
              className="w-full h-full"
              frameBorder="0"
              title="Book a Personalized Demo"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
