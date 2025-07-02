
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MessageCircle, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        
        <div className="glass-card p-8 md:p-12 neon-glow">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-neon-cyan" />
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-12 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-neon-cyan focus:ring-neon-cyan"
                />
              </div>
              
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-neon-cyan" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-12 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-neon-cyan focus:ring-neon-cyan"
                />
              </div>
            </div>
            
            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 h-5 w-5 text-neon-cyan" />
              <Textarea
                name="message"
                placeholder="Tell me about your project or how I can help you..."
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="pl-12 bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-neon-cyan focus:ring-neon-cyan resize-none"
              />
            </div>
            
            <div className="text-center">
              <Button 
                type="submit"
                size="lg"
                className="bg-neon-cyan hover:bg-neon-cyan/80 text-black font-semibold px-8 py-3 neon-glow transition-all duration-300"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </div>
          </form>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Prefer to reach out directly?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 text-neon-cyan hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              your.email@example.com
            </a>
            <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
            <a 
              href="https://www.linkedin.com/in/jedelacruz21/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neon-cyan hover:text-white transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              LinkedIn Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
