
const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-white bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-neon-cyan mx-auto rounded-full"></div>
        </div>
        
        <div className="glass-card p-8 md:p-12 neon-glow">
          <div className="text-center">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              I'm a dedicated first-year IT student with hands-on experience in customer support 
              at Alorica, specializing in healthcare customer service. My unique blend of technical 
              knowledge and exceptional communication skills positions me perfectly for the virtual 
              assistant industry.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Currently transitioning into the Virtual Assistant field, I bring a strong foundation 
              in both technology and customer service. I actively work on personal coding projects 
              and continuously expand my skill set to provide comprehensive support to clients.
            </p>
            
            <p className="text-lg md:text-xl text-neon-cyan font-medium">
              Ready to leverage my tech expertise and communication excellence to help streamline 
              your business operations and boost productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
