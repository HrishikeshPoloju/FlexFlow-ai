import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, CheckCircle, RefreshCw, BarChart3, Settings } from "lucide-react";

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

export const WorkflowAutomation = () => {
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-500/5 via-background/0 to-background/0" />
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-purple-500/10 to-transparent dark:mix-blend-overlay blur-3xl animate-float" />
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
              Automate Your <motion.span 
                className="gradient-text"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: '100% 50%' }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear'
                }}
              >Business Workflows</motion.span>
            </motion.h1>
            <motion.p 
              variants={item}
              className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Streamline your operations with intelligent automation that connects your apps, data, and teams.
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
                >
                  View Use Cases
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
                Powerful <motion.span 
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
                >Automation</motion.span> Features
              </motion.h2>
              <motion.p variants={item} className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                Connect your tools and automate repetitive tasks with our powerful workflow engine.
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
                  icon: <Zap className="h-8 w-8 text-purple-500" />,
                  title: "Trigger Actions",
                  description: "Automate tasks based on events or schedules.",
                  color: "purple"
                },
                {
                  icon: <RefreshCw className="h-8 w-8 text-indigo-500" />,
                  title: "Multi-Step Workflows",
                  description: "Chain multiple actions across different apps.",
                  color: "indigo"
                },
                {
                  icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
                  title: "Analytics & Reporting",
                  description: "Track workflow performance and efficiency.",
                  color: "purple"
                },
                {
                  icon: <Settings className="h-8 w-8 text-indigo-500" />,
                  title: "Custom Integrations",
                  description: "Connect with 1000+ apps and services.",
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
                  className="bg-card/50 dark:bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg"
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

        {/* Use Cases Section */}
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
                Common <motion.span 
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
                >Use Cases</motion.span>
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
                "🤖 Auto-respond to customer inquiries and route them to the right team",
                "📅 Schedule and confirm appointments without manual intervention",
                "📊 Sync data between your CRM, email, and other business tools",
                "🔔 Get real-time alerts and notifications for important events"
              ].map((useCase, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="flex items-start gap-4 p-6 bg-card/50 dark:bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-purple-500/30 dark:hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="text-2xl">{useCase.split(' ')[0]}</div>
                  <p className="text-lg">{useCase.split(' ').slice(1).join(' ')}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          variants={fadeIn}
          className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-500/5 dark:to-indigo-500/5"
        >
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          >
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to <motion.span 
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
              >Automate Your Workflows?</motion.span>
            </motion.h2>
            <motion.p variants={item} className="text-xl text-muted-foreground mb-10">
              Save time, reduce errors, and focus on what matters most for your business.
            </motion.p>
            <motion.div 
              variants={container}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="gradient-primary w-full sm:w-auto">
                  Start Automating Now
                </Button>
              </motion.div>
              <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Contact Sales
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

export default WorkflowAutomation;
