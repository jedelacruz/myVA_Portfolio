
import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          
          
          <div className="text-gray-400 space-y-2">
            <p className="flex items-center gap-2 justify-center">
              Made with <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> by Je Dela Cruz
            </p>
            <p className="text-sm">
              © 2025 Je Dela Cruz. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
