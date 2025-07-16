
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "JEAI",
      description: "JEAI is a free AI-powered platform made in Gemini for fast, high-quality text generation and editing. It features a responsive, user-friendly interface with a built-in text editor for easy writing and content creation.",
      tech: ["TypeScript", "Next.js", "Tailwind CSS", "Clerk", "Gemini"],
      stars: 12,
      forks: 5,
      live: "https://jeai.vercel.app/",
      repo: "https://github.com/jedelacruz/Jeai"
    },
    {
      title: "GradeQuest",
      description: "GradeQuest is a 2D platformer game that I've developed using Godot (GDScript). It combines engaging gameplay mechanics with a student-inspired theme, showcasing creativity and technical skills.",
      tech: ["Godot Engine", "GDScript", "Game Design",  "Game Art", 'Game Audio'],
      stars: 8,
      forks: 3,
      live: "https://jedelacruz.itch.io/gradequest",
      repo: "https://github.com/jedelacruz/GradeQuest"
    },
   
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-white bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-card p-6 hover:bg-white/10 transition-all duration-300 neon-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a 
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Github className="h-4 w-4 text-gray-400" />
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-black"
                  asChild
                >
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    View Live
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black px-8"
            asChild
          >
            <a href="https://github.com/jedelacruz" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
