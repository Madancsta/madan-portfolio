import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
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

  const projects = [
    {
      title: "Onez",
      description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
      tags: ["Java", "Html", "JS", "JEE"],
      image: "🛒",
    },
    {
      title: "Vendor Management System",
      description: "Collaborative task manager with real-time updates and team features.",
      tags: ["Python", "Java Script", "MariaDB"],
      image: "✅",
    },
    {
      title: "Printech",
      description: "SaaS platform helping customers buy printers",
      tags: ["Html", "CSS", "JS"],
      image: "🎨",
    },
    {
      title: "Kwality Banquet",
      description: "A platform to book banquet halls with user reviews and ratings.",
      tags: ["Html", "CSS", "JS"],
      image: "🌤️",
    },
    {
      title: "Quiz app",
      description: "Interactive quiz application with multiple categories and score tracking.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "📊",
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-first fitness app with workout plans and progress tracking.",
      tags: ["React Native", "Redux", "Express"],
      image: "💪",
    },
    {
      title: "Recipe Sharing Platform",
      description: "Community platform for sharing and discovering recipes worldwide.",
      tags: ["Angular", "GraphQL", "PostgreSQL"],
      image: "🍳",
    },
    {
      title: "Real Estate Marketplace",
      description: "Property listing platform with virtual tours and advanced search.",
      tags: ["React", "Node.js", "Maps API"],
      image: "🏠",
    },
    {
      title: "Learning Management System",
      description: "Online education platform with courses, quizzes, and certifications.",
      tags: ["Django", "React", "Docker"],
      image: "📚",
    },
    {
      title: "Music Streaming App",
      description: "Spotify-like music player with playlists and recommendations.",
      tags: ["Svelte", "WebAudio", "Firebase"],
      image: "🎵",
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 rounded-full" />
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and creative solutions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Project Image/Icon */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent group-hover:scale-110 transition-transform duration-500" />
                  <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </span>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 border-border hover:bg-primary/10">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
