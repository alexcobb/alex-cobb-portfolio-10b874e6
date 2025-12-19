import { MapPin, Globe, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-navy-light/50 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-primary via-gold-light to-primary p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-navy-light to-navy-lighter flex items-center justify-center">
                    <span className="text-6xl lg:text-7xl font-display text-primary font-bold">AC</span>
                  </div>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border border-primary/20 animate-pulse" />
            </div>
          </div>

          {/* Info */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 animate-fade-in-up">
              Alex Cobb
            </h1>
            
            <p className="text-lg md:text-xl text-primary font-medium mb-6 animate-fade-in-up animation-delay-100 max-w-2xl">
              CPO, Founder | 25yrs Product Leadership | 16yrs Microsoft | 5 Exits | Expert in Vertical AI, Low-Code & Workflow Automation | Scaling PMF to $100M+
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-muted-foreground animate-fade-in-up animation-delay-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Bellevue, Washington, United States</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6 animate-fade-in-up animation-delay-300">
              <a
                href="https://www.tachyonsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-all duration-300 hover:scale-105 group"
              >
                <Globe className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
                <span className="text-foreground">tachyonsolutions.com</span>
              </a>
              
              <a
                href="https://linkedin.com/in/alexcobb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
