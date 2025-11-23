import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "giripriya.one@gmail.com",
      href: "mailto:giripriya.one@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 96187 07690",
      href: "tel:+919618707690",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tirupati, Andhra Pradesh",
      href: null,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey to better health? Get in touch today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={info.label}
              className={`glass-panel group hover-3d p-8 text-center relative overflow-hidden transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} p-4 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-500`}>
                  <info.icon className="w-full h-full text-white" />
                </div>
                
                <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  {info.label}
                </div>
                
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {info.value}
                  </a>
                ) : (
                  <div className="text-foreground font-medium">{info.value}</div>
                )}
              </div>
            </Card>
          ))}
        </div>

        <Card className={`glass-panel p-8 md:p-12 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">
              Open to Opportunities
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Currently seeking a position in a progressive institution that provides opportunities for 
              career growth and professional development as a productive team member.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="mailto:giripriya.one@gmail.com" className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Email
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="glass-panel border-primary/30 hover:border-primary"
              >
                <a href="tel:+919618707690" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
