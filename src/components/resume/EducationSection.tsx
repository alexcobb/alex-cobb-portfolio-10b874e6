import { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      school: "University of Colorado Boulder",
      degree: "BS in Business Management, Finance",
      years: "1992 - 1996"
    },
    {
      school: "Columbia University",
      degree: "Undergraduate Summer Program",
      years: "1992"
    }
  ];

  return (
    <section ref={sectionRef} id="education" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">
            <span className="text-primary">Education</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div
                key={edu.school}
                className={`p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {edu.school}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">{edu.degree}</p>
                    <div className="flex items-center gap-2 text-primary text-sm">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.years}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
