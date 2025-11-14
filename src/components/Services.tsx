import { Phone, MessageSquare, Workflow, Globe, ArrowRight, Bot, FileSpreadsheet, ChevronDown, ChevronUp, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


export const Services = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const services = [
    // Popular services first
    {
      icon: Phone,
      title: "AI Voice Agents",
      description: "Voice agents for calls, WhatsApp, and web. 24/7 customer support.",
      popular: true,
      link: "/services/voice-agents"
    },
    {
      icon: MessageSquare,
      title: "AI Chat Automation",
      description: "WhatsApp, Web, and Social chatbots with instant responses.",
      popular: true,
      link: "/services/chat-automation"
    },
    {
      icon: Globe,
      title: "Dynamic Website Building",
      description: "Create stunning websites with built-in AI assistance.",
      popular: true,
      link: "/services/ai-website-builder"
    },
    // Other services
    {
      icon: Bot,
      title: "Personal Chatbots",
      description: "Custom AI assistants for personalized customer interactions.",
      popular: false,
      link: "/services/personal-chatbots"
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate tasks, reminders, and CRM integrations.",
      popular: false,
      link: "/services/workflow-automation"
    },
    {
      icon: FileSpreadsheet,
      title: "Automated Calling",
      description: "Make automated calls from spreadsheets or CRM data.",
      popular: false,
      link: "/services/automated-calling"
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-12 md:py-16 relative overflow-hidden">
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
              Our Solutions
            </Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Our <span className="gradient-text section-heading">AI Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From AI Voice Agents to AI Website Builders, we empower businesses with intelligent automation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {services.slice(0, showAll ? services.length : 6).map((service, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => service.link && navigate(service.link)}
              >
                {/* Card Container */}
                <div className="relative h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 flex flex-col
                              shadow-sm hover:shadow-xl hover:shadow-primary/5 
                              hover:border-primary/20 hover:-translate-y-1 
                              transition-all duration-500 ease-out">
                  
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider
                                     bg-gradient-to-r from-amber-500/10 to-violet-500/10 
                                     text-amber-600 dark:text-amber-400
                                     border border-amber-500/20">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
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
                    <service.icon className="relative z-10 h-7 w-7 text-primary group-hover:text-amber-500 
                                           transition-colors duration-500" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="flex flex-col flex-grow space-y-3">
                    <h3 className="text-xl font-bold text-foreground 
                                 group-hover:text-primary 
                                 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow
                                group-hover:text-foreground/80 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-sm font-medium text-primary pt-2
                                  group-hover:gap-3 transition-all duration-300">
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 
                                           group-hover:translate-x-1" />
                    </div>
                  </div>
                  
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 via-transparent to-violet-500/5 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {!showAll ? (
              <motion.div
                key="show-more"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center mt-8"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="glow-border text-lg group relative overflow-hidden"
                  onClick={() => setShowAll(true)}
                >
                  <span className="relative z-10 flex items-center">
                    Explore All Automations
                    <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-violet-500/5 to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="show-less"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center mt-8"
              >
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="text-muted-foreground hover:text-foreground group transition-colors"
                  onClick={() => {
                    setShowAll(false);
                    // Smooth scroll to services section
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    Show Less
                    <ChevronUp className="ml-2 h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
