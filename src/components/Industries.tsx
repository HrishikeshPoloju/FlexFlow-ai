import { Car, Heart, Scissors, GraduationCap, Home, Dumbbell, Dog, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Zap } from "lucide-react";

export const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const industries = [
    { icon: Car, name: "Car Wash", description: "Automated booking and customer management" },
    { icon: Heart, name: "Clinic", description: "Patient scheduling and follow-ups" },
    { icon: Scissors, name: "Salon", description: "Appointment management and reminders" },
    { icon: GraduationCap, name: "Education", description: "Student queries and enrollment" },
    { icon: Home, name: "Real Estate", description: "Lead management and property inquiries" },
    { icon: Dumbbell, name: "Fitness", description: "Class bookings and member support" },
    { icon: Dog, name: "Pet Care", description: "Appointment scheduling and pet records" },
    { icon: Wrench, name: "Home Services", description: "Service requests and scheduling" },
  ];

  return (
    <section id="industries" className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,191,255,0.18),transparent_65%)] dark:bg-[radial-gradient(circle_at_top,rgba(0,191,255,0.2),transparent_65%)]" />
        <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-32 right-12 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-20 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="gradient-primary mb-4 text-xs px-3 py-1">
              <Zap className="w-3.5 h-3.5 mr-1.5" />
              Industry Solutions
            </Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Industries We <span className="gradient-text">Empower</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tailored AI solutions for diverse business sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card Container */}
                <div className="relative h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 flex flex-col items-center
                              shadow-sm hover:shadow-xl hover:shadow-primary/5 
                              hover:border-primary/20 hover:-translate-y-1 
                              transition-all duration-500 ease-out">
                  
                  {/* Icon Container */}
                  <motion.div 
                    className="relative w-14 h-14 mb-4 rounded-2xl
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
                    <industry.icon className="relative z-10 h-6 w-6 text-primary group-hover:text-amber-500 
                                           transition-colors duration-500" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex flex-col items-center text-center space-y-2">
                    <h3 className="text-base font-bold text-foreground 
                                 group-hover:text-primary 
                                 transition-colors duration-300">
                      {industry.name}
                    </h3>
                    
                    <p className="text-xs text-muted-foreground leading-relaxed
                                group-hover:text-foreground/80 transition-colors duration-300">
                      {industry.description}
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
