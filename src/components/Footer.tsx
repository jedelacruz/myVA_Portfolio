
import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex gap-6 mb-8">
            <a 
              href="https://github.com/jedelacruz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card hover:bg-white/10 transition-all duration-300 neon-glow group"
            >
              <Github className="h-6 w-6 text-gray-400 group-hover:text-neon-cyan transition-colors" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/jedelacruz21/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass-card hover:bg-white/10 transition-all duration-300 neon-glow group"
            >
              <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-neon-cyan transition-colors" />
            </a>
          </div>
          
          <div className="text-gray-400 space-y-2">
            <p className="flex items-center gap-2 justify-center">
              Made with <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> by Jed Elacruz
            </p>
            <p className="text-sm">
              © 2024 Jed Elacruz. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
