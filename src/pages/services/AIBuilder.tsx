import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, LayoutTemplate, Smartphone, Zap, Code, CheckCircle } from "lucide-react";

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

export const AIBuilder = () => {
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-emerald-500/5 via-background/0 to-background/0" />
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-emerald-500/10 to-transparent dark:mix-blend-overlay blur-3xl animate-float" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-teal-500/10 via-transparent to-transparent dark:mix-blend-overlay blur-3xl animate-float animation-delay-2000" />
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
              Build Your <motion.span 
                className="gradient-text"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: '100% 50%' }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear'
                }}
              >AI-Powered Website</motion.span>
            </motion.h1>
            <motion.p 
              variants={item}
              className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Create a stunning, responsive website in minutes with our AI Website Builder. No coding required.
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
                  Build Your Site <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full"
                >
                  See Examples
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Features Section */}
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
                AI-Powered <motion.span 
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
                >Website Creation</motion.span>
              </motion.h2>
              <motion.p variants={item} className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to build a professional online presence, powered by AI.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <LayoutTemplate className="h-8 w-8 text-emerald-500" />,
                  title: "Beautiful Templates",
                  description: "Choose from 100+ professionally designed templates.",
                  color: "emerald"
                },
                {
                  icon: <Smartphone className="h-8 w-8 text-teal-500" />,
                  title: "Fully Responsive",
                  description: "Looks great on all devices, automatically.",
                  color: "teal"
                },
                {
                  icon: <Zap className="h-8 w-8 text-emerald-500" />,
                  title: "Lightning Fast",
                  description: "Optimized for speed and performance.",
                  color: "emerald"
                },
                {
                  icon: <Code className="h-8 w-8 text-teal-500" />,
                  title: "No-Code Builder",
                  description: "Drag and drop interface, no coding needed.",
                  color: "teal"
                },
                {
                  icon: <CheckCircle className="h-8 w-8 text-emerald-500" />,
                  title: "SEO Optimized",
                  description: "Built-in SEO tools to rank higher in search.",
                  color: "emerald"
                },
                {
                  icon: <Globe className="h-8 w-8 text-teal-500" />,
                  title: "Global CDN",
                  description: "Lightning-fast loading worldwide.",
                  color: "teal"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-card/50 dark:bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg"
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

        {/* How It Works Section */}
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
                Build Your Site in <motion.span 
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
                >3 Easy Steps</motion.span>
              </motion.h2>
            </motion.div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {[
                {
                  number: "1",
                  title: "Describe Your Business",
                  description: "Tell us about your business, and our AI will generate a perfect website structure."
                },
                {
                  number: "2",
                  title: "Customize Design",
                  description: "Choose from beautiful templates and customize colors, fonts, and layouts."
                },
                {
                  number: "3",
                  title: "Publish Instantly",
                  description: "Go live with one click. No technical skills required."
                }
              ].map((step, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center p-8 bg-card/50 dark:bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-2xl font-bold text-emerald-500 mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          variants={fadeIn}
          className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-500/5 dark:to-teal-500/5"
        >
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          >
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Create Your <motion.span 
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
              >AI Website?</motion.span>
            </motion.h2>
            <motion.p variants={item} className="text-xl text-muted-foreground mb-10">
              Get started for free and build your dream website in minutes, not weeks.
            </motion.p>
            <motion.div 
              variants={container}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="gradient-primary w-full sm:w-auto">
                  Start Building Free
                </Button>
              </motion.div>
              <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Pricing
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

export default AIBuilder;
