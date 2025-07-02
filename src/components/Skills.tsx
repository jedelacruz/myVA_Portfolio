
import { Code, Users, Database, Globe, Calendar, FileText, Mail, Search } from "lucide-react";

const Skills = () => {
  const techSkills = [
    { name: "HTML & CSS", icon: Globe },
    { name: "JavaScript", icon: Code },
    { name: "PHP", icon: Code },
    { name: "MySQL", icon: Database },
    { name: "Python", icon: Code },
    { name: "C#", icon: Code },
    { name: "Git & GitHub", icon: Code },
    { name: "VS Code", icon: Code }
  ];

  const vaSkills = [
    { name: "Google Workspace", icon: Globe },
    { name: "Microsoft Office", icon: FileText },
    { name: "Canva Design", icon: Users },
    { name: "Email Management", icon: Mail },
    { name: "Calendar Scheduling", icon: Calendar },
    { name: "Research & Analysis", icon: Search },
    { name: "Data Entry", icon: Database },
    { name: "Customer Service", icon: Users }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-white bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tech Skills */}
          <div className="glass-card p-8 neon-glow">
            <h3 className="text-2xl font-bold text-neon-cyan mb-6 text-center">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {techSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <skill.icon className="h-5 w-5 text-neon-cyan mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* VA Skills */}
          <div className="glass-card p-8 neon-glow">
            <h3 className="text-2xl font-bold text-neon-cyan mb-6 text-center">
              Virtual Assistant Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {vaSkills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="flex items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <skill.icon className="h-5 w-5 text-neon-cyan mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
