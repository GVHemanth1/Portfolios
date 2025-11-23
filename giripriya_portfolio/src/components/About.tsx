import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap, Heart } from "lucide-react";

export const About = () => {
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

  const stats = [
    { icon: Award, label: "Certifications", value: "15+" },
    { icon: Briefcase, label: "Experience", value: "3+ Years" },
    { icon: GraduationCap, label: "Education", value: "Master's" },
    { icon: Heart, label: "Patients Treated", value: "500+" },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated physiotherapist committed to helping patients achieve optimal health and wellness
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className={`glass-panel p-8 hover-3d transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <h3 className="text-2xl font-bold mb-4 text-primary">Professional Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Currently pursuing Master of Physiotherapy at SVIMS, Tirupati (2025), building on a strong foundation 
              from my Bachelor's degree (2021, 75%).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My professional experience includes working as a Physiotherapist and Tutor at KS Hospitals, Koppal, 
              where I developed expertise in patient care and clinical education.
            </p>
          </Card>

          <Card className={`glass-panel p-8 hover-3d transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <h3 className="text-2xl font-bold mb-4 text-primary">Core Values</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Exceptional verbal and communication skills for patient engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Patient-centered approach with dedication and perseverance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Strong team collaboration and problem-solving abilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Continuous learning mindset for professional growth</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className={`glass-panel p-6 text-center hover-3d transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary animate-glow-pulse" />
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
