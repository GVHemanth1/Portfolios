import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Award } from "lucide-react";

export const Publications = () => {
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

  return (
    <section ref={sectionRef} id="publications" className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Research & Publications</h2>
          <p className="text-xl text-muted-foreground">
            Contributing to physiotherapy research and evidence-based practice
          </p>
        </div>

        <Card className={`glass-panel p-8 md:p-12 hover-3d transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-6 animate-glow-pulse">
                <FileText className="w-full h-full text-white" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Published Research</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground leading-tight">
                Effectiveness of Epley's Maneuver on Dizziness, Dynamic Balance and Quality of Life in Individuals with Benign Paroxysmal Positional Vertigo (BPPV)
              </h3>

              <p className="text-lg text-muted-foreground mb-4">
                Case Series Study
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  IJFMR Journal
                </span>
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  Case Series
                </span>
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Vestibular Rehabilitation
                </span>
              </div>

              <Button
                asChild
                className="group bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href="https://doi.org/10.36948/ijfmr.2025.v07i05.55221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  View Publication
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <div className={`mt-12 grid md:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Card className="glass-panel p-6 text-center">
            <div className="text-4xl font-bold text-gradient mb-2">15+</div>
            <div className="text-muted-foreground">Workshops Attended</div>
          </Card>
          <Card className="glass-panel p-6 text-center">
            <div className="text-4xl font-bold text-gradient mb-2">10+</div>
            <div className="text-muted-foreground">Conferences Participated</div>
          </Card>
          <Card className="glass-panel p-6 text-center">
            <div className="text-4xl font-bold text-gradient mb-2">50+</div>
            <div className="text-muted-foreground">Credit Hours Earned</div>
          </Card>
        </div>
      </div>
    </section>
  );
};
