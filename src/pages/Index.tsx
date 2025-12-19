import Navigation from "@/components/resume/Navigation";
import HeroSection from "@/components/resume/HeroSection";
import AboutSection from "@/components/resume/AboutSection";
import SkillsSection from "@/components/resume/SkillsSection";
import ExperienceTimeline from "@/components/resume/ExperienceTimeline";
import EducationSection from "@/components/resume/EducationSection";
import ContactSection from "@/components/resume/ContactSection";
import Footer from "@/components/resume/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-resume mx-auto">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceTimeline />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
