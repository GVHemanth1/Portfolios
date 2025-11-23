import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Briefcase } from "lucide-react";

export const Experience = () => {
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

  const experiences = [
    {
      role: "Advanced Neurorehabilitation Intern",
      organization: "Walk Again - Advanced Neurorehab Robotic Center",
      location: "Madhapur, Hyderabad",
      period: "September 2025",
      description: "Specialized internship focused on cutting-edge robotic rehabilitation techniques",
      type: "Internship",
    },
    {
      role: "Master of Physiotherapy Student",
      organization: "SVIMS University",
      location: "Tirupati",
      period: "2023 - 2025",
      description: "Advanced studies in physiotherapy with focus on neurorehabilitation and pain management",
      type: "Education",
    },
    {
      role: "Physiotherapist & Tutor",
      organization: "KS Hospitals",
      location: "Koppal, Karnataka",
      period: "Oct 2022 - Jul 2023",
      description: "Provided comprehensive physiotherapy services and clinical education to patients and students",
      type: "Professional",
    },
    {
      role: "Physiotherapy Intern",
      organization: "SVIMS University",
      location: "Tirupati",
      period: "2021 (6 Months)",
      description: "Clinical rotations across multiple departments including Neurology, ICU, Orthopedics, and Oncology",
      type: "Internship",
    },
  ];

  const typeColors: Record<string, string> = {
    Professional: "from-blue-500 to-cyan-500",
    Internship: "from-purple-500 to-pink-500",
    Education: "from-orange-500 to-red-500",
  };

  return (
    <section ref={sectionRef} id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Professional Experience</h2>
          <p className="text-xl text-muted-foreground">
            Building expertise through diverse clinical and educational roles
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary shadow-[0_0_20px_rgba(var(--primary-glow),0.6)] animate-glow-pulse" />

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:text-right"} ml-20 md:ml-0`}>
                    <Card className="glass-panel p-6 hover-3d group relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${typeColors[exp.type]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2 text-primary">
                          <Briefcase className="w-4 h-4" />
                          <span className="text-sm font-semibold uppercase tracking-wider">{exp.type}</span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>

                        <div className="text-lg font-semibold text-muted-foreground mb-3">
                          {exp.organization}
                        </div>

                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </Card>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
