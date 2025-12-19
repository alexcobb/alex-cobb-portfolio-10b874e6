interface Experience {
  title: string;
  company: string;
  period: string;
  highlights: string[];
}

const ExperienceTimeline = () => {
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

  return (
    <section id="experience" className="py-8 px-4">
      <div className="max-w-resume mx-auto">
        <h2 className="text-xl font-semibold text-foreground mb-6 uppercase tracking-wide border-b border-border pb-2">
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={`${exp.company}-${exp.period}`}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.title}
                </h3>
                <span className="text-sm text-muted-foreground">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-foreground mb-2">
                {exp.company}
              </p>

              <ul className="space-y-1">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-2 text-foreground">
                    <span className="text-muted-foreground">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
