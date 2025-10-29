import { useEffect, useRef, useState } from "react";
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { icon: Code2, title: "Development", desc: "React, TypeScript, Node.js" },
    { icon: Palette, title: "Design", desc: "UI/UX, Figma, Tailwind" },
    { icon: Rocket, title: "Deployment", desc: "AWS, Vercel, Docker" },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate developer with 5+ years of experience creating web applications 
                that users love. My journey in tech started with curiosity and has evolved into 
                a career building impactful digital solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in modern web technologies and always stay updated with the latest 
                trends. When I'm not coding, you'll find me contributing to open source or 
                exploring new design trends.
              </p>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl opacity-20">👨‍💻</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <skill.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
