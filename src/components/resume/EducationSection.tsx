const EducationSection = () => {
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
    <section id="education" className="py-8 px-4">
      <div className="max-w-resume mx-auto">
        <h2 className="text-xl font-semibold text-foreground mb-6 uppercase tracking-wide border-b border-border pb-2">
          Education
        </h2>

        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.school}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h3 className="font-semibold text-foreground">
                    {edu.school}
                  </h3>
                  <p className="text-foreground">{edu.degree}</p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {edu.years}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
