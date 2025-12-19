const AboutSection = () => {
  return (
    <section id="about" className="py-8 px-4">
      <div className="max-w-resume mx-auto">
        <h2 className="text-xl font-semibold text-foreground mb-4 uppercase tracking-wide border-b border-border pb-2">
          Summary
        </h2>

        <p className="text-foreground leading-relaxed mb-4">
          25+ years Product Leadership | Serial Entrepreneur, 5 Acquisition Exits | Enterprise Product Management, 16yrs MSFT | Commercial Vertical AI, Enterprise Integration, Workflow Automation, No-code/Low-code/Pro-code
        </p>

        <ul className="space-y-2 text-foreground">
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span><strong>5 Acquisition Exits:</strong> WorldTariff by FedEx, Petopia by PETCO, Commercia by Microsoft, Kony by Temenos, K2 Software by Nintex</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span><strong>Global Team Leadership:</strong> Recruited and managed top talent across US, China, India, Israel, Europe, and South Africa</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span><strong>Enterprise Product Management:</strong> Defined Strategy; Managed Product Portfolio from Discovery to GTM, building valued products</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted-foreground">•</span>
            <span><strong>Growth & Scale Expert:</strong> Led initiatives for Product-Led Growth, Industry Solutions, Vertical AI to achieve PMF/Scale/Exit</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
