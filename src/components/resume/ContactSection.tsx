import { Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-8 px-4 pb-16">
      <div className="max-w-resume mx-auto">
        <h2 className="text-xl font-semibold text-foreground mb-6 uppercase tracking-wide border-b border-border pb-2">
          Contact
        </h2>

        <p className="text-foreground mb-6">
          Interested in discussing Vertical AI strategy, fractional CPO services, or product leadership opportunities? Send a message below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
          <div>
            <Input
              type="text"
              placeholder="Your Name"
              required
              className="bg-background border-border"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              required
              className="bg-background border-border"
            />
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              rows={4}
              required
              className="bg-background border-border resize-none"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-foreground text-background hover:bg-foreground/90"
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
      </div>
    </section>
  );
};

export default ContactSection;
