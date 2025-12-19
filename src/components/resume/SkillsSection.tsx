const SkillsSection = () => {
  const skills = [
    "Vertical AI",
    "Agentic AI",
    "Generative AI",
    "Enterprise SaaS",
    "Low-code / No-code / Pro-code"
  ];

  return (
    <section id="skills" className="py-8 px-4">
      <div className="max-w-resume mx-auto">
        <h2 className="text-xl font-semibold text-foreground mb-4 uppercase tracking-wide border-b border-border pb-2">
          Skills
        </h2>

        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {skills.map((skill, index) => (
            <span key={skill} className="text-foreground">
              {skill}{index < skills.length - 1 && <span className="text-muted-foreground ml-4">|</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
