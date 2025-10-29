import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            Student at ING
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
          Hi, I'm Madan Shrestha
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Full Stack Developer & Creative Designer
        </p>

        <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
          I craft exceptional digital experiences that combine beautiful design with powerful functionality. 
          Specialized in building modern web applications.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
            <Mail className="mr-2 h-5 w-5" />
            Get in touch
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-secondary" onClick={scrollToProjects}>
            View my work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="flex gap-4 justify-center">
          <a href="https://github.com/Madancsta?tab=repositories" className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow">
            <Github className="h-5 w-5" />
          </a>
          <a href="www.linkedin.com/in/madan-shrestha-8b7a9a302" className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="madancsta789@gmail.com" className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
