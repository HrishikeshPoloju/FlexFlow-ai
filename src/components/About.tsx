import { Sparkles, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "./ui/badge";

export const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: Sparkles,
      title: "Intelligent Automation",
      description: "AI agents that learn and adapt to your business needs, delivering smarter solutions every day.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get your custom AI setup within 48 hours and start automating immediately.",
    },
    {
      icon: Target,
      title: "Purpose-Built",
      description: "Tailored solutions designed specifically for your industry and workflow requirements.",
    },
  ];

  return (
    <section id="about" className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,191,255,0.18),transparent_65%)] dark:bg-[radial-gradient(circle_at_top,rgba(0,191,255,0.2),transparent_65%)]" />
        <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-32 right-12 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="gradient-primary mb-4 text-xs px-3 py-1">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              About Us
            </Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              The Future of <span className="gradient-text">Workflows</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              FlexFlow's mission is merging human creativity with AI intelligence to simplify 
              operations for SMBs and enterprises. We empower businesses to focus on what matters 
              most while AI handles the rest.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card Container */}
                <div className="relative h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 flex flex-col
                              shadow-sm hover:shadow-xl hover:shadow-primary/5 
                              hover:border-primary/20 hover:-translate-y-1 
                              transition-all duration-500 ease-out">
                  
                  {/* Icon Container */}
                  <motion.div 
                    className="relative w-16 h-16 mb-6 rounded-2xl
                             bg-gradient-to-br from-primary/10 via-primary/5 to-transparent
                             border border-primary/10
                             flex items-center justify-center
                             group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/20
                             transition-all duration-500"
                    animate={{
                      y: hoveredIndex === index ? -4 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {/* Icon Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400/20 to-violet-500/20 
                                  opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                    <feature.icon className="relative z-10 h-7 w-7 text-primary group-hover:text-amber-500 
                                           transition-colors duration-500" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex flex-col flex-grow space-y-3">
                    <h3 className="text-xl font-bold text-foreground 
                                 group-hover:text-primary 
                                 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed
                                group-hover:text-foreground/80 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 via-transparent to-violet-500/5 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
