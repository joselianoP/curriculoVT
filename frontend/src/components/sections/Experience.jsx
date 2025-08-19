import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Building2, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { experiences } from "../../data/mock";

const Experience = () => {
  const [expandedExperience, setExpandedExperience] = useState(null);

  const toggleExpanded = (id) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Experiência Profissional</h2>
            <div className="w-20 h-1 bg-navy-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Mais de duas décadas desenvolvendo soluções inovadoras e liderando equipes técnicas
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-navy-200"></div>

            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative mb-12 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
              } md:w-1/2`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-auto md:right-auto w-4 h-4 bg-navy-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 md:translate-x-0" 
                     style={{
                       left: index % 2 === 0 ? 'auto' : '2rem',
                       right: index % 2 === 0 ? '-2rem' : 'auto',
                     }}>
                </div>

                <Card className={`ml-12 md:ml-0 border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  expandedExperience === exp.id ? 'ring-2 ring-navy-200' : ''
                }`}>
                  <CardContent className="p-6">
                    
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-navy-800 mb-1">{exp.position}</h3>
                          <div className="flex items-center space-x-2 text-gray-600 mb-2">
                            <Building2 size={16} />
                            <span className="font-medium">{exp.company}</span>
                            {exp.client && (
                              <>
                                <span>•</span>
                                <span className="text-sm">Cliente: {exp.client}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <Badge variant="outline" className="border-navy-600 text-navy-600 whitespace-nowrap ml-4">
                          {exp.duration}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies Preview */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.slice(0, 6).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-navy-100 text-navy-700 text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {exp.technologies.length > 6 && (
                        <Badge variant="outline" className="text-xs">
                          +{exp.technologies.length - 6} mais
                        </Badge>
                      )}
                    </div>

                    {/* Expand/Collapse Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpanded(exp.id)}
                      className="w-full justify-center text-navy-600 hover:text-navy-700 hover:bg-navy-50"
                    >
                      {expandedExperience === exp.id ? (
                        <>
                          <ChevronUp size={16} className="mr-2" />
                          Ver menos
                        </>
                      ) : (
                        <>
                          <ChevronDown size={16} className="mr-2" />
                          Ver detalhes
                        </>
                      )}
                    </Button>

                    {/* Expanded Content */}
                    {expandedExperience === exp.id && (
                      <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in">
                        
                        {/* Responsibilities */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-navy-800 mb-3">Principais Responsabilidades:</h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((responsibility, index) => (
                              <li key={index} className="flex items-start space-x-3 text-gray-600">
                                <div className="w-2 h-2 bg-navy-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm leading-relaxed">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* All Technologies */}
                        <div>
                          <h4 className="font-semibold text-navy-800 mb-3">Tecnologias Utilizadas:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="bg-navy-100 text-navy-700 text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="text-center mt-16">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-navy-600 to-navy-700 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Resumo da Experiência</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-2">5+</div>
                    <p className="text-navy-100">Empresas de Tecnologia</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">10+</div>
                    <p className="text-navy-100">Grandes Clientes</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">22+</div>
                    <p className="text-navy-100">Anos de Experiência</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;