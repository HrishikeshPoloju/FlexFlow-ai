import { Linkedin, Mail, Twitter, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Team member images (stored in public/team/images/)
const vishnuImage = '/team/images/vishnu.jpg';

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
  social: {
    linkedin: string;
    twitter: string;
    email: string;
  };
};
export const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const teamMembers: TeamMember[] = [
    {
      name: "Siddamsetti Vishnu Vardhan",
      role: "Founder & CEO",
      description:
        "Full Stack & AI Engineer from IIIT Pune, passionate about building intelligent automation products using React, FastAPI, and cloud-native architectures. Vishnu has developed multiple SaaS and AI-driven systems, now channeling that experience to scale FlexFlow AI into a next-gen automation agency.",
      image: vishnuImage,
      social: {
        linkedin: "https://linkedin.com/in/vishnu-siddamsetti",
        twitter: "vishnu_vardhan07",
        email: "vishnu@flexflow.ai",
      },
    },
    {
      name: "Hrishikesh Poloju",
      role: "Co-Founder & CTO",
      description:
        "Distributed Systems & Backend Engineer from IIIT Pune with deep expertise in scalable infrastructures and data pipelines. Having worked on AI automation tools and SaaS systems, Hrishikesh now drives FlexFlow’s core technology, blending innovation with real-world performance.",
      image: "/team/hrishikesh.jpg",
      social: {
        linkedin: "https://linkedin.com/in/hrishikeshpoloju",
        twitter: "hrishipoloju",
        email: "hrishikesh@flexflow.ai",
      },
    },
  ];
  return (
    <section id="team" className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,191,255,0.18),transparent_65%)] dark:bg-[radial-gradient(circle_at_top,rgba(0,191,255,0.2),transparent_65%)]" />
        <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-32 right-12 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5 text-primary hover:bg-primary/10">
              <Zap className="w-3 h-3 mr-1" />
              Meet the Team
            </Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              The <span className="gradient-text">Founders</span> Behind FlexFlow AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Before launching FlexFlow AI, we built SaaS products and custom AI solutions 
              for clients across domains — from real-time automation systems to data-driven dashboards.
              Now, we're bringing that same technical depth to help modern businesses automate intelligently.
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
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
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full shadow-sm hover:shadow-xl hover:shadow-amber-500/5 hover:border-amber-500/20 hover:-translate-y-1 transition-all duration-500 ease-out">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Avatar */}
                    <div className="relative">
                      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 bg-gradient-to-br from-amber-500/10 to-violet-500/10 group-hover:border-amber-500/30 transition-colors duration-500">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/20 to-violet-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                            className="w-full h-full object-cover relative z-10"
                        onError={(e) => {
                          // If image fails to load, show the fallback
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                          className={`w-full h-full flex items-center justify-center text-4xl text-muted-foreground font-bold relative z-10 ${member.image ? 'hidden' : 'flex'}`}
                    >
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                        </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-foreground transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-4 group-hover:text-amber-500 transition-colors">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                        {member.description}
                      </p>

                    {/* Social */}
                    <div className="flex justify-center md:justify-start gap-4">
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-[#0077b5] transition-colors p-2 hover:bg-[#0077b5]/10 rounded-lg"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`https://twitter.com/${member.social.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-[#1da1f2] transition-colors p-2 hover:bg-[#1da1f2]/10 rounded-lg"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                          className="text-muted-foreground hover:text-amber-500 transition-colors p-2 hover:bg-amber-500/10 rounded-lg"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 via-transparent to-violet-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
              </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold mb-4">Join Our Journey 🚀</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're building FlexFlow AI to make automation smarter and accessible.
              If you're passionate about AI, full-stack development, or creative tech —
              we'd love to have you on board.
            </p>
            <Button
              size="lg"
              className="gradient-primary group"
              onClick={() =>
                window.open("mailto:careers@flexflow.ai", "_blank", "noopener,noreferrer")
              }
            >
              Join the Team
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
