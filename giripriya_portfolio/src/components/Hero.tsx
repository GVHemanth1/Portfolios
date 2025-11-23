import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const parallaxSpeed = 0.5;
        heroRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div
        ref={heroRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="perspective-container">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
            <span className="block text-gradient glow-text">Dr. Guddanti</span>
            <span className="block mt-2 text-gradient glow-text">Giripriya</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Master of Physiotherapy
        </p>

        <p className="text-lg md:text-xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Specialized in Advanced Neurorehabilitation & Pain Management
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get in Touch
              <Mail className="w-5 h-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="group glass-panel border-primary/30 hover:border-primary px-8 py-6 text-lg rounded-full"
          >
            <span className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contact
            </span>
          </Button>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-8 h-8 mx-auto text-primary opacity-50" />
        </div>
      </div>
    </section>
  );
};
