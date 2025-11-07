import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--glow-blue)/0.2),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--glow-violet)/0.2),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 md:p-16 text-center space-y-8 glow-border">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Ready to Transform?</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
              Ready to Flex Your <span className="gradient-text">Workflow?</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get your custom AI agent setup within 48 hours and start automating today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gradient-primary font-semibold text-lg group"  onClick={() => window.open('https://calendly.com/team-flexflowai/30min', '_blank', 'noopener,noreferrer')}>
                Book My Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground pt-8">
              <div>✓ No credit card required</div>
              <div>✓ 48hr setup</div>
              <div>✓ Cancel anytime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};