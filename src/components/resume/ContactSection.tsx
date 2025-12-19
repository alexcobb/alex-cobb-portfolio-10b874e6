import { useEffect, useRef, useState } from "react";
import { Send, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-4 bg-card/50">
      <div className="container mx-auto max-w-4xl">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">
            Get in <span className="text-primary">Touch</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Interested in discussing Vertical AI strategy, fractional CPO services, or product leadership opportunities? Let's connect.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="bg-secondary border-border focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-secondary border-border focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="bg-secondary border-border focus:border-primary focus:ring-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            {/* Quick Links */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="p-6 bg-secondary/50 rounded-xl border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">Connect Directly</h3>
                <div className="space-y-4">
                  <a
                    href="https://www.tachyonsolutions.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <span>www.tachyonsolutions.com</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/alexcobb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <span>linkedin.com/in/alexcobb</span>
                  </a>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-primary/30">
                <p className="text-foreground font-medium">
                  "Helping industry specialized firms establish leadership positions in the Vertical AI segment."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
