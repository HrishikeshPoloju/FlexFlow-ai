import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Smartphone, Zap, Clock, CheckCircle } from "lucide-react";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
};

export const ChatAutomation = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="min-h-screen flex flex-col overflow-x-hidden"
    >
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500/5 via-background/0 to-background/0" />
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-500/10 to-transparent dark:mix-blend-overlay blur-3xl animate-float" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-indigo-500/10 via-transparent to-transparent dark:mix-blend-overlay blur-3xl animate-float animation-delay-2000" />
      </div>

      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section 
          variants={fadeIn}
          className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={item}
              className="text-4xl md:text-6xl font-heading font-bold tracking-tight"
            >
              Engage Customers 24/7 with <motion.span 
                className="gradient-text"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: '100% 50%' }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear'
                }}
              >AI Chat Automation</motion.span>
            </motion.h1>
            <motion.p 
              variants={item}
              className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Our AI Chat Bots provide instant, intelligent responses across WhatsApp, Web, and Social Media, ensuring your customers are always engaged, day or night.
            </motion.p>
            <motion.div 
              variants={item}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="gradient-primary transition-transform duration-300 w-full"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full"
                  onClick={() => window.open('https://calendly.com/team-flexflowai/30min', '_blank', 'noopener,noreferrer')}
                >
                  See Live Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section 
          variants={fadeIn}
          className="py-20 bg-muted/20 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={item} className="text-3xl md:text-4xl font-heading font-bold">
                How Our <motion.span 
                  className="gradient-text"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%'],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'linear'
                  }}
                >Chat Automation</motion.span> Works
              </motion.h2>
              <motion.p variants={item} className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                Seamless integration of advanced AI to handle your customer conversations intelligently across all platforms.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
                  title: "Multi-Platform Chat",
                  description: "Seamless integration with WhatsApp, Web, Facebook, and more.",
                  color: "blue"
                },
                {
                  icon: <Smartphone className="h-8 w-8 text-indigo-500" />,
                  title: "Instant Responses",
                  description: "24/7 availability with instant, accurate responses.",
                  color: "indigo"
                },
                {
                  icon: <Zap className="h-8 w-8 text-blue-500" />,
                  title: "Smart Handoff",
                  description: "Smooth transition to human agents when needed.",
                  color: "blue"
                },
                {
                  icon: <CheckCircle className="h-8 w-8 text-indigo-500" />,
                  title: "Analytics Dashboard",
                  description: "Track performance and customer interactions in real-time.",
                  color: "indigo"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-card/50 dark:bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg"
                >
                  <motion.div 
                    className={`w-16 h-16 rounded-xl bg-${feature.color}-100 dark:bg-${feature.color}-900/20 flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section 
          variants={fadeIn}
          className="py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={item} className="text-3xl md:text-4xl font-heading font-bold">
                Key <motion.span 
                  className="gradient-text"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%'],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'linear'
                  }}
                >Benefits</motion.span>
              </motion.h2>
            </motion.div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {[
                "📱 80% faster response times to customer inquiries",
                "💬 Handle 10x more customer conversations simultaneously",
                "🌐 Available 24/7 across all your customer touchpoints",
                "📊 Gain insights from customer interactions and feedback"
              ].map((benefit, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-4 p-6 bg-card/50 dark:bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="text-2xl">{benefit.split(' ')[0]}</div>
                  <p className="text-lg">{benefit.split(' ').slice(1).join(' ')}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          variants={fadeIn}
          className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-500/5 dark:to-indigo-500/5"
        >
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          >
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Transform Your <motion.span 
                className="gradient-text"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%'],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear'
                }}
              >Customer Support?</motion.span>
            </motion.h2>
            <motion.p variants={item} className="text-xl text-muted-foreground mb-10">
              Discover how our AI Chat Automation can enhance your customer experience and boost engagement.
            </motion.p>
            <motion.div 
              variants={container}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="gradient-primary w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </motion.div>
              <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto"
                  onClick={() => window.open('https://calendly.com/team-flexflowai/30min', '_blank', 'noopener,noreferrer')}
                >
                  Request Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default ChatAutomation;
