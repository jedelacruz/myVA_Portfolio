
import { Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Customer Service Foundations",
      provider: "LinkedIn Learning",
      description: "Comprehensive training in customer service principles and best practices"
    },
    {
      title: "Time Management for Remote Workers",
      provider: "LinkedIn Learning", 
      description: "Specialized skills for managing time effectively in remote work environments"
    },
    {
      title: "Learning Canva",
      provider: "LinkedIn Learning",
      description: "Professional graphic design and content creation using Canva"
    },
    {
      title: "Virtual Assistant Skills",
      provider: "LinkedIn Learning",
      description: "Core competencies for providing exceptional virtual assistance services"
    },
    {
      title: "Google Workspace Essential Training",
      provider: "LinkedIn Learning",
      description: "Mastery of Google's productivity suite for business applications"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-white bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className="glass-card p-6 hover:bg-white/10 transition-all duration-300 neon-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start mb-4">
                <Award className="h-6 w-6 text-neon-cyan mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-neon-cyan text-sm font-medium mb-2">
                    {cert.provider}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {cert.description}
              </p>
              
              <div className="flex items-center mt-4 pt-4 border-t border-white/10">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span className="text-xs text-green-400 font-medium">Certified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
