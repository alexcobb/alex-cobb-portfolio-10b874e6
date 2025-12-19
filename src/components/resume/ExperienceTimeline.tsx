import { useEffect, useRef, useState } from "react";
import { Building2, Calendar } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  highlights: string[];
}

const ExperienceTimeline = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences: Experience[] = [
    {
      title: "Co-Founder, Fractional CPO",
      company: "Tachyon Solutions",
      period: "Oct 2023 - Present",
      highlights: [
        "Fractional CPO and strategy advisor helping industry specialized firms establish leadership positions in the Vertical AI segment",
        "Product Market Fit assessment, Product/Service due diligence, UX Design & CJM experience review",
        "Strategic Advisor services specialized in Vertical AI, Integration and enterprise low-code Citizen Development"
      ]
    },
    {
      title: "Chief Product Officer",
      company: "Unbabel",
      period: "Jan 2022 - Oct 2023",
      highlights: [
        "Led strategy, planning, and design of Unbabel Language Operations platform",
        "Inorganic growth strategy directed acquisition of LSPs Lingo24 and EVS Translations",
        "Implemented Product-Led Growth (PLG) with free trial model",
        "New LangOps category created; see Gartner Hype Cycle for Natural Language Technologies, 2022"
      ]
    },
    {
      title: "Co-Founder, Fractional CPO",
      company: "Tachyon Solutions",
      period: "Jan 2021 - Jan 2022",
      highlights: [
        "Founded by product leaders providing strategic advisory services to mid/late-stage startups",
        "Fractional CPO helping clients achieve Product/Market Fit"
      ]
    },
    {
      title: "VP of Product Management",
      company: "K2 (Acquired by Nintex Oct 2020)",
      period: "Jan 2020 - Jan 2021",
      highlights: [
        "Led product strategy for K2's product management organization",
        "Adopted Scaled Agile Framework for Enterprise (SAFe)",
        "Created Product Innovation Group to incubate new technologies"
      ]
    },
    {
      title: "VP of Product Management, Chief of Staff",
      company: "Kony, Inc. (Acquired by Temenos Sept 2019)",
      period: "Feb 2019 - Dec 2019",
      highlights: [
        "Built and managed engineering processes supporting 500+ product organization",
        "Led Agile Transformation globally; adopted SAFe"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleItems((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">
          Professional <span className="text-primary">Experience</span>
        </h2>
        
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-16" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.period}`}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2" : "md:pl-8 md:ml-auto md:w-1/2"
              } pl-8 md:pl-0 transition-all duration-700 ${
                visibleItems.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Timeline dot */}
              <div 
                className={`absolute w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/30 ${
                  index % 2 === 0 
                    ? "left-[-8px] md:left-auto md:right-[-8px]" 
                    : "left-[-8px] md:left-[-8px]"
                } top-6 transform md:translate-x-0`}
              />

              {/* Content card */}
              <div className="bg-secondary/50 p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                <div className={`flex items-center gap-2 mb-2 text-primary ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>

                <div className={`flex items-center gap-2 mb-4 text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <Building2 className="w-4 h-4" />
                  <span>{exp.company}</span>
                </div>

                <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
