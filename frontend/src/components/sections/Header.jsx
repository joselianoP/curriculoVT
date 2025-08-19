import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, X, Download, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../../data/mock";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { id: "about", label: "Sobre" },
    { id: "experience", label: "Experiência" },
    { id: "education", label: "Formação" },
    { id: "skills", label: "Habilidades" },
    { id: "projects", label: "Projetos" },
    { id: "contact", label: "Contato" }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-navy-800 cursor-pointer"
                onClick={() => scrollToSection("hero")}>
              Joseliano Araujo
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-navy-600 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links & Download CV */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-navy-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
           {/* <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-navy-600 transition-colors"
            >
              <Github size={20} />
            </a>*/}
            <Button
              size="sm"
              className="bg-navy-600 hover:bg-navy-700 text-white"
              onClick={() => {
                // Mock download action
                window.open("https://drive.google.com/file/d/1NEXdp4LLLSzGAEDF2Uu8m4dyEwaeBeq8/view?usp=sharing", "_blank");
              }}
            >
              <Download size={16} className="mr-2" />
              CV PDF
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <nav className="flex flex-col p-4 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 hover:text-navy-600 transition-colors duration-200 text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t">
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-navy-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-navy-600 transition-colors"
                >
                  <Github size={20} />
                </a>
                <Button
                  size="sm"
                  className="bg-navy-600 hover:bg-navy-700 text-white flex-1"
                  onClick={() => {
                    window.open("https://drive.google.com/file/d/1NEXdp4LLLSzGAEDF2Uu8m4dyEwaeBeq8/view?usp=sharing", "_blank");
                  }}
                >
                  <Download size={16} className="mr-2" />
                  Baixar CV
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;