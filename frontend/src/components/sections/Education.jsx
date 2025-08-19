import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { education, certifications } from "../../data/mock";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Formação Acadêmica</h2>
            <div className="w-20 h-1 bg-navy-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Formação sólida em tecnologia e gestão, com foco em aprendizado contínuo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-navy-800 mb-8 flex items-center">
                <GraduationCap className="mr-3 text-navy-600" size={28} />
                Educação
              </h3>
              
              <div className="space-y-6">
                {education.map((edu) => (
                  <Card key={edu.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-grow">
                          <h4 className="text-xl font-semibold text-navy-800 mb-2 group-hover:text-navy-600 transition-colors">
                            {edu.degree}
                          </h4>
                          <p className="text-gray-600 font-medium mb-2">{edu.institution}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{edu.period}</span>
                            </div>
                            <Badge variant="outline" className="border-green-500 text-green-600">
                              {edu.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="ml-4">
                          <Badge className={`${
                            edu.type === 'Pós-graduação' ? 'bg-navy-600' :
                            edu.type === 'MBA' ? 'bg-blue-600' : 'bg-gray-600'
                          } text-white`}>
                            {edu.type}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Progress indicator based on type */}
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div className={`h-2 rounded-full ${
                          edu.type === 'Pós-graduação' ? 'bg-navy-600 w-full' :
                          edu.type === 'MBA' ? 'bg-blue-600 w-full' : 'bg-gray-600 w-full'
                        }`}></div>
                      </div>
                      
                      {/* Additional info for recent education */}
                      {edu.period === '2024' && (
                        <div className="bg-navy-50 rounded-lg p-4 mt-4">
                          <p className="text-sm text-navy-700">
                            <strong>Foco:</strong> Cloud Computing, AWS, Docker, Kubernetes, DevOps, 
                            Arquitetura de Microsserviços e Práticas Modernas de Desenvolvimento.
                          </p>
                        </div>
                      )}
                      
                      {edu.period === '2013' && (
                        <div className="bg-blue-50 rounded-lg p-4 mt-4">
                          <p className="text-sm text-blue-700">
                            <strong>Foco:</strong> Gerenciamento de Projetos seguindo as melhores práticas 
                            do PMI, metodologias ágeis, liderança de equipes e gestão de riscos.
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-navy-800 mb-8 flex items-center">
                <Award className="mr-3 text-navy-600" size={28} />
                Certificações
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert) => (
                  <Card key={cert.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-grow">
                          <h4 className="text-lg font-semibold text-navy-800 mb-2 group-hover:text-navy-600 transition-colors">
                            {cert.name}
                          </h4>
                          <p className="text-gray-600 font-medium mb-2">{cert.issuer}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{cert.year}</span>
                            </div>
                          </div>
                        </div>
                        <div className="ml-4">
                          <Badge className={`${
                            cert.status === 'Ativo' ? 'bg-green-600' : 'bg-gray-600'
                          } text-white`}>
                            {cert.status}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Certification Icon */}
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-navy-100 to-navy-200 rounded-full mb-4 mx-auto">
                        <Award className="text-navy-600" size={24} />
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Call to Action for More Certifications */}
                <Card className="border-2 border-dashed border-navy-300 hover:border-navy-500 transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="text-navy-600" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-navy-800 mb-2">
                      Aprendizado Contínuo
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Sempre buscando novas certificações e conhecimentos para me manter 
                      atualizado com as últimas tecnologias do mercado.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Educational Timeline Summary */}
          <div className="mt-16">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-slate-50 to-slate-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-navy-800 mb-6 text-center">
                  Linha do Tempo Educacional
                </h3>
                
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-navy-200"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center relative">
                      <div className="w-12 h-12 bg-navy-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h4 className="font-semibold text-navy-800 mb-2">2009 - Graduação</h4>
                      <p className="text-gray-600 text-sm">Tecnologia da Informação</p>
                    </div>
                    
                    <div className="text-center relative">
                      <div className="w-12 h-12 bg-navy-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h4 className="font-semibold text-navy-800 mb-2">2013 - MBA</h4>
                      <p className="text-gray-600 text-sm">Gerenciamento de Projetos</p>
                    </div>
                    
                    <div className="text-center relative">
                      <div className="w-12 h-12 bg-navy-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <h4 className="font-semibold text-navy-800 mb-2">2024 - Pós-graduação</h4>
                      <p className="text-gray-600 text-sm">Cloud Computing</p>
                    </div>
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

export default Education;