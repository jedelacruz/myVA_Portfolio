
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10"></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-neon-cyan to-white bg-clip-text text-transparent">
            Jed Elacruz
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            IT Student & Healthcare Support Representative
          </p>
          
          <p className="text-lg md:text-xl text-neon-cyan font-medium mb-8 animate-glow">
            Aspiring Virtual Assistant with Tech & Support Background
          </p>
          
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Combining technical expertise with exceptional communication skills to deliver 
            outstanding virtual assistance services. Ready to help you streamline your business operations.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-neon-cyan hover:bg-neon-cyan/80 text-black font-semibold px-8 py-3 neon-glow transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black px-8 py-3 transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Hire Me
          </Button>
        </div>
        
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/jedelacruz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card hover:bg-white/10 transition-all duration-300 neon-glow"
          >
            <Github className="h-6 w-6 text-neon-cyan" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/jedelacruz21/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card hover:bg-white/10 transition-all duration-300 neon-glow"
          >
            <Linkedin className="h-6 w-6 text-neon-cyan" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
