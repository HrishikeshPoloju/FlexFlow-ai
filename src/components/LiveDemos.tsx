import { useState } from "react";
import { Play, Zap, Bot, MessageSquare, Phone, Video, ArrowRight, X } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { motion } from "framer-motion";

export const LiveDemos = () => {
  const [selectedDemo, setSelectedDemo] = useState<number | null>(null);
  const [showCalendly, setShowCalendly] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <section id="demos" className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,191,255,0.18),transparent_65%)] dark:bg-[radial-gradient(circle_at_top,rgba(0,191,255,0.2),transparent_65%)]" />
        <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-32 right-12 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5 text-primary hover:bg-primary/10">
            <Zap className="w-3 h-3 mr-1" />
            Experience It Live
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            See Our <span className="gradient-text">AI in Action</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch our AI solutions handle real-world scenarios with human-like precision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 flex flex-col h-full shadow-sm hover:shadow-xl hover:shadow-amber-500/5 hover:border-amber-500/20 hover:-translate-y-1 transition-all duration-500 ease-out">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/10 to-violet-500/10 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400/20 to-violet-500/20 blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                    <demo.icon className="w-6 h-6 relative z-10 text-foreground group-hover:text-amber-500 transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-foreground transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {demo.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Play className="w-4 h-4" /> {demo.duration}
                  </span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-blue-500 hover:text-blue-600 hover:bg-blue-500/10 -mr-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDemo(index);
                    }}
                  >
                    Watch Demo 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 via-transparent to-violet-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
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
