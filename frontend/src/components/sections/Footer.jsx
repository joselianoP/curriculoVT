import React from "react";
import { Button } from "../ui/button";
import { Heart, ArrowUp, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "../../data/mock";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = [
    { name: "Sobre", id: "about" },
    { name: "Experiência", id: "experience" },
    { name: "Formação", id: "education" },
    { name: "Habilidades", id: "skills" },
    { name: "Projetos", id: "projects" },
    { name: "Contato", id: "contact" }
  ];

  return (
    <footer className="bg-navy-800 text-white relative">
      
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-navy-600 hover:bg-navy-700 text-white rounded-full w-12 h-12 shadow-lg"
      >
        <ArrowUp size={20} />
      </Button>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* About Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">{personalInfo.name}</h3>
              <p className="text-navy-200 mb-6 leading-relaxed">
                {personalInfo.title} com {personalInfo.experience} em desenvolvimento de software, 
                arquitetura de sistemas e liderança técnica. Especialista em modernização de sistemas 
                e otimização de performance.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-navy-700 rounded-full flex items-center justify-center text-navy-200 hover:bg-navy-600 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-navy-700 rounded-full flex items-center justify-center text-navy-200 hover:bg-navy-600 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 bg-navy-700 rounded-full flex items-center justify-center text-navy-200 hover:bg-navy-600 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-navy-200 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-navy-400" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-navy-200 hover:text-white transition-colors text-sm"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-navy-400" />
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-navy-200 hover:text-white transition-colors text-sm"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-navy-400" />
                  <span className="text-navy-200 text-sm">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="border-t border-navy-700 pt-8 mb-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4">Principais Tecnologias</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Java", "Spring Boot", "Angular", "Node.js", ".NET", "AWS", 
                  "Docker", "Kubernetes", "SQL Server", "Oracle", "MongoDB", "Git"
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-navy-700 text-navy-200 rounded-full text-sm hover:bg-navy-600 hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-navy-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-navy-300 text-sm">
                <p>
                  © {currentYear} {personalInfo.name}. Todos os direitos reservados.
                </p>
              </div>

              {/* Made with love */}
              <div className="flex items-center space-x-2 text-navy-300 text-sm">
                <span>Desenvolvido com</span>
                <Heart size={16} className="text-red-400 animate-pulse" />
                <span>usando React & FastAPI</span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8 pt-4 border-t border-navy-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-navy-300 text-sm">
              <div>
                <strong className="text-navy-100">Disponibilidade:</strong> Remoto e Presencial
              </div>
              <div>
                <strong className="text-navy-100">Modalidade:</strong> CLT, PJ, Freelancer
              </div>
              <div>
                <strong className="text-navy-100">Resposta:</strong> Até 24h
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;