import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { MapPin, Calendar, Award } from "lucide-react";
import { personalInfo, achievements } from "../../data/mock";
import { Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Sobre Mim</h2>
            <div className="w-20 h-1 bg-navy-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Conheça mais sobre minha trajetória profissional e conquistas ao longo dos anos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main About Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-navy-800 mb-6">
                    Minha Jornada Profissional
                  </h3>
                  
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {personalInfo.summary}
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Ao longo da minha carreira, tenho me especializado em arquitetura de sistemas, 
                      liderança técnica e modernização de aplicações legadas. Minha experiência abrange 
                      desde o desenvolvimento hands-on até a gestão estratégica de equipes multidisciplinares.
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed">
                      Atualmente, atuo como Especialista na Capgemini, onde lidero 
                      iniciativas de modernização de sistemas para o Bradesco Seguros, focando em 
                      performance, escalabilidade e boas práticas de desenvolvimento.
                    </p>
                  </div>

                  {/* Key Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-navy-600 mb-2">22+</div>
                      <p className="text-gray-500 text-sm">Anos de Experiência</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-navy-600 mb-2">50+</div>
                      <p className="text-gray-500 text-sm">Projetos Concluídos</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-navy-600 mb-2">15+</div>
                      <p className="text-gray-500 text-sm">Tecnologias</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-navy-800 mb-6 flex items-center">
                    <Award className="mr-3 text-navy-600" size={24} />
                    Principais Conquistas
                  </h3>
                  
                  <div className="space-y-4">
                    {achievements.map((achievement) => (
                      <div key={achievement.id} className="flex items-start space-x-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center">
                            <Award className="text-navy-600" size={20} />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-navy-800 mb-1">{achievement.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{achievement.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span>{achievement.year}</span>
                            <span>•</span>
                            <span>{achievement.organization}</span>   
                          </div>
                            {achievement.url !== "#" && (
                              <p className="text-gray-600 text-sm mb-2"> 
                              <a
                                href={achievement.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-navy-600 transition-colors duration-200 transform hover:scale-110"
                              >
                                <Globe className="w-4 h-4" /> 
                            </a></p>)}
                          
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              
              {/* Personal Info Card */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-navy-800 mb-6">Informações</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-navy-600" size={18} />
                      <div>
                        <p className="text-sm text-gray-500">Localização</p>
                        <p className="font-medium text-gray-800">{personalInfo.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Calendar className="text-navy-600" size={18} />
                      <div>
                        <p className="text-sm text-gray-500">Experiência</p>
                        <p className="font-medium text-gray-800">{personalInfo.experienceAnos}{personalInfo.experience}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Specialties */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-navy-800 mb-6">Especialidades</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Liderança Técnica",
                      "Arquitetura de Sistemas",
                      "Modernização de Sistemas",
                      "Mentoria",
                      "Gestão de Projetos",
                      "Code Review",
                      "Performance Optimization",
                      "Metodologias Ágeis"
                    ].map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="bg-navy-100 text-navy-700 hover:bg-navy-200">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-navy-800 mb-6">Idiomas</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Português</span>
                        <span className="text-sm text-gray-500">Nativo</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-navy-600 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Inglês</span>
                        <span className="text-sm text-gray-500">Técnico</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-navy-600 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Espanhol</span>
                        <span className="text-sm text-gray-500">Básico</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-navy-600 h-2 rounded-full w-2/5"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;