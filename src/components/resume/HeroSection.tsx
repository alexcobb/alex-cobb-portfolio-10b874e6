import { MapPin, Globe, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <header className="pt-16 pb-8 px-4">
      <div className="max-w-resume mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-2">
          Alex Cobb
        </h1>
        
        <p className="text-lg text-muted-foreground mb-6">
          CPO, Founder | 25yrs Product Leadership | 16yrs Microsoft | 5 Exits | Expert in Vertical AI, Low-Code & Workflow Automation | Scaling PMF to $100M+
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span>Bellevue, Washington, United States</span>
          </div>
          
          <a
            href="https://www.tachyonsolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:underline"
          >
            <Globe className="w-4 h-4 text-muted-foreground" />
            <span>tachyonsolutions.com</span>
          </a>
          
          <a
            href="https://linkedin.com/in/alexcobb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:underline"
          >
            <Linkedin className="w-4 h-4 text-muted-foreground" />
            <span>linkedin.com/in/alexcobb</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
