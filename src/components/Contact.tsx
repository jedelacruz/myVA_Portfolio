import { Mail, MessageCircle, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-white bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to streamline your business operations? Let's discuss how I can help 
            you achieve your goals with professional virtual assistance services.
          </p>
        </div>
        
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:2janemmanueldelacruz21@gmail.com"
              className="flex items-center gap-2 text-neon-cyan hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              2janemmanueldelacruz21@gmail.com
            </a>
            <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
            <a 
              href="https://www.linkedin.com/in/jedelacruz21/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neon-cyan hover:text-white transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              LinkedIn
            </a>
            <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
            <a 
              href="https://www.facebook.com/je.things.1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neon-cyan hover:text-white transition-colors"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;