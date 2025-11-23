import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Brain, Bone, Heart, Users, Activity, Stethoscope } from "lucide-react";

export const Expertise = () => {
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

  const expertiseAreas = [
    {
      icon: Brain,
      title: "Neurorehabilitation",
      description: "Advanced techniques in neurological recovery and brain injury rehabilitation",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Specialized treatment for musculoskeletal conditions and sports injuries",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Activity,
      title: "Pain Management",
      description: "Expert in trigger point therapy and myofascial pain treatment",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Heart,
      title: "Women's Health",
      description: "Pelvic floor rehabilitation and pregnancy wellness programs",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Stethoscope,
      title: "ICU & Critical Care",
      description: "Experience in intensive care unit physiotherapy and respiratory care",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: Users,
      title: "Therapeutic Taping",
      description: "Certified in on-field therapeutic taping techniques (Level 1 & 2)",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section ref={sectionRef} id="expertise" className="py-24 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Areas of Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive physiotherapy services backed by extensive training and certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card
              key={area.title}
              className={`glass-panel group hover-3d p-8 relative overflow-hidden transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} p-4 mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                  <area.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
