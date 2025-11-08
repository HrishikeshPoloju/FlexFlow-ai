import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = location.pathname === '/';
  
  // Handle scroll to section when navigating from another page
  useEffect(() => {
    // Check for hash in URL on component mount
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
    
    // Handle scroll to section when navigating from another page using state
    if (location.state?.scrollTo) {
      const element = document.querySelector(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          // Clear the state to prevent scrolling again on re-renders
          window.history.replaceState({}, document.title);
        }, 100);
      }
    }
  }, [location]);

  
  const navLinks = [
    { href: "/", label: "Home", isHash: false },
    { href: "#about", label: "About", isHash: true },
    { href: "#services", label: "Services", isHash: true },
    { href: "#testimonial", label: "Testimonial", isHash: true },
    { href: "#contact", label: "Contact", isHash: true },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string, isHash: boolean) => {
    if (isHash) {
      e.preventDefault();
      
      if (location.pathname !== '/') {
        // If not on home page, navigate to home with hash
        navigate(`/${href}`, { state: { scrollTo: href } });
      } else {
        // If on home page, just scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // For home link without hash
      if (location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 py-4 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 border border-black/10 dark:border-white/10 rounded-full px-8 backdrop-blur-sm transition-all duration-300 hover:border-black/20 dark:hover:border-white/20 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5">
          <a 
            href="/"
            className="text-2xl font-heading font-bold text-foreground ml-4 hover:scale-125 transition-transform duration-300 dark:text-white"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            FlexFlow AI
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-foreground/80 hover:text-foreground transition-all duration-300 group"
                onClick={(e) => handleNavClick(e, link.href, link.isHash)}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button 
              onClick={() => window.open('https://calendly.com/team-flexflowai/30min', '_blank', 'noopener,noreferrer')}
              className="gradient-primary font-semibold rounded-full px-6 py-2 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              Book Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 glass-card mt-2 rounded-2xl">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-muted/50"
                onClick={(e) => handleNavClick(e, link.href, link.isHash)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <Button 
                onClick={() => window.open('https://calendly.com/team-flexflowai/30min', '_blank', 'noopener,noreferrer')}
                className="w-full gradient-primary font-semibold rounded-full py-2 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                Book Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
