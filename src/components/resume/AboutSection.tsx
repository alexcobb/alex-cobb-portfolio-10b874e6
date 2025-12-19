import { useEffect, useRef, useState } from "react";
import { Award, Users, Briefcase, TrendingUp } from "lucide-react";

const AboutSection = () => {
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

  const achievements = [
    {
      icon: Award,
      title: "5 Acquisition Exits",
      description: "WorldTariff by FedEx, Petopia by PETCO, Commercia by Microsoft, Kony by Temenos, K2 Software by Nintex"
    },
    {
      icon: Users,
      title: "Global Team Leadership",
      description: "Recruited and managed top talent across US, China, India, Israel, Europe, and South Africa"
    },
    {
      icon: Briefcase,
      title: "Enterprise Product Management",
      description: "Defined Strategy; Managed Product Portfolio from Discovery to GTM, building valued products"
    },
    {
      icon: TrendingUp,
      title: "Growth & Scale Expert",
      description: "Led initiatives for Product-Led Growth, Industry Solutions, Vertical AI to achieve PMF/Scale/Exit"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12" />

          <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center max-w-3xl mx-auto">
            25+ years Product Leadership | Serial Entrepreneur, 5 Acquisition Exits | Enterprise Product Management, 16yrs MSFT | Commercial Vertical AI, Enterprise Integration, Workflow Automation, No-code/Low-code/Pro-code
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`p-6 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
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

export default AboutSection;
