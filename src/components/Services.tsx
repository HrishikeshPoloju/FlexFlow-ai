import { Phone, MessageSquare, Workflow, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Phone,
      title: "AI Voice Agents",
      description: "Answer calls, book appointments, manage clients 24/7.",
      popular: true,
      link: "/services/voice-agents"
    },
    {
      icon: MessageSquare,
      title: "AI Chat Automation",
      description: "WhatsApp, Web, and Social chatbots that respond instantly.",
      popular: false,
      link: "/services/chat-automation"
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Trigger tasks, reminders, analytics, and CRM syncs.",
      popular: false,
      link: "/services/workflow-automation"
    },
    {
      icon: Globe,
      title: "AI Website Builder",
      description: "Auto-generate websites integrated with chat agents.",
      popular: false,
      link: "/services/ai-website-builder"
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Badge className="gradient-primary mb-4">Our Solutions</Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Our AI <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From AI Voice Agents to AI Website Builders, we empower businesses with intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card p-8 space-y-4 hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 gradient-primary">
                    POPULAR
                  </Badge>
                )}
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center group-hover:animate-glow">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6">
                  <Button 
                    variant="outline" 
                    className="group"
                    onClick={() => service.link && navigate(service.link)}
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="glow-border text-lg">
              Explore All Automations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
