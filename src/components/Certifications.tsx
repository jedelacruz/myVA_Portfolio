import { Award, CheckCircle, X, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      image: "/certifications/Introduction to Computers and Operating Systems.pdf",
      title: "Introduction to Computers and Operating Systems and Security",
      provider: "Microsoft through Coursera",
      description: "Covers foundational computer concepts, operating system basics, and essential security practices for modern computing."
    },
    {
      image: "/certifications/DesigningUserInterfacesandExperiences.pdf",
      title: "Designing User Interfaces and Experiences (UI/UX)",
      provider: "IBM through Coursera",
      description: "Explores UI/UX principles, user-centered design, wireframing, prototyping, and usability testing for digital products."
    },
    {
      image: "/certifications/Introduction to Front-End Development.pdf",
      title: "Introduction to Front-End Development",
      provider: "Meta through Coursera",
      description: "Introduces HTML, CSS, and JavaScript fundamentals, focusing on building responsive and interactive web interfaces."
    },
    {
      image: "/certifications/Wordpress Cert - Coursera.pdf",
      title: "Build a free website with WordPress",
      provider: "Coursera",
      description: "Hands-on experience creating, customizing, and managing websites using WordPress, including themes and plugins."
    },
    {
      image: "/certifications/understanding ai.pdf",
      title: "Understanding Artificial Intelligence",
      provider: "Datacamp",
      description: "Provides an overview of AI concepts, applications, and ethical considerations, with real-world examples and use cases."
    },
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
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
                {/* Certificate Image/PDF */}
                <div className="mb-4 overflow-hidden rounded-lg relative">
                  {cert.image.endsWith('.pdf') ? (
                    // PDF handling - embedded iframe with click overlay
                    <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden">
                      <iframe
                        src={cert.image}
                        className="w-full h-full border-0"
                        title={`${cert.title} Certificate`}
                        style={{ width: '100%', height: '100%', overflow: 'hidden' }}
                        scrolling="no"
                      />
                      {/* Click overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="flex gap-4">
                          <button
                            onClick={() => openModal(cert)}
                            className="bg-neon-cyan text-black px-4 py-2 rounded-lg hover:bg-cyan-400 transition-colors text-sm font-medium"
                          >
                            Expand
                          </button>
                          <button
                            onClick={() => openInNewTab(cert.image)}
                            className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            New Tab
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Image handling
                    <div className="relative">
                      <img 
                        src={cert.image} 
                        alt={`${cert.title} Certificate`}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                        onClick={() => openModal(cert)}
                      />
                      {/* Image click overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                        <button
                          onClick={() => openModal(cert)}
                          className="bg-neon-cyan text-black px-4 py-2 rounded-lg hover:bg-cyan-400 transition-colors text-sm font-medium"
                        >
                          View Full Size
                        </button>
                      </div>
                    </div>
                  )}
                  {/* Fallback icon if image fails */}
                  <div className="hidden w-full h-48 bg-gray-800 rounded-lg items-center justify-center">
                    <Award className="h-16 w-16 text-neon-cyan" />
                  </div>
                </div>

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
        {/* View All Certificates Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black px-8"
            asChild
          >
            <a href="https://www.linkedin.com/in/jedelacruz21/details/certifications/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              View All Certificates
            </a>
          </Button>
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <div>
                <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                <p className="text-neon-cyan text-sm">{selectedCert.provider}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => openInNewTab(selectedCert.image)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink className="h-5 w-5 text-gray-400 hover:text-white" />
                </button>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  title="Close"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-white" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {selectedCert.image.endsWith('.pdf') ? (
                <iframe
                  src={selectedCert.image}
                  className="w-full h-96 border-0 rounded-lg"
                  title={`${selectedCert.title} Certificate`}
                />
              ) : (
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.title} Certificate`}
                  className="w-full h-auto max-h-96 object-contain rounded-lg"
                />
              )}
              
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-400">{selectedCert.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;