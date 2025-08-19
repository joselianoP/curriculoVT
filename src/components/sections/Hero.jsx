import React from "react";
import { Button } from "../ui/button";
import { Download, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "../../data/mock";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 items-center">
            
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <p className="text-navy-600 font-medium text-lg tracking-wide">
                  Olá, eu sou
                </p>
                <h1 className="text-5xl lg:text-6xl font-bold text-navy-800 leading-tight">
                  {personalInfo.name}
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-600 font-light">
                  {personalInfo.title}
                </h2>
                <p className="text-lg text-gray-500">
                  {personalInfo.experienceAnos}{personalInfo.experience}
                </p>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                {personalInfo.summary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-3"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail size={20} className="mr-2" />
                  Entre em Contato
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white px-8 py-3"
                  onClick={() => {
                    window.open("https://drive.google.com/file/d/1NEXdp4LLLSzGAEDF2Uu8m4dyEwaeBeq8/view?usp=sharing", "_blank");
                  }}
                >
                  <Download size={20} className="mr-2" />
                  Download CV
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-12 pt-4">
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-navy-600 transition-colors duration-200 transform hover:scale-110"
                >
                  <Linkedin size={28} />
                </a>
               {/* <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-navy-600 transition-colors duration-200 transform hover:scale-110"
                >
                  <Github size={28} />
                </a>*/}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-400 hover:text-navy-600 transition-colors duration-200 transform hover:scale-110"
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>

        
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-16 animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-400 hover:text-navy-600 transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;