import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github, Calendar, Award, Eye, EyeOff } from "lucide-react";
import { projects } from "../../data/mock";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const getStatusColor = (status) => {
    switch (status) {
      case "Produção": return "bg-green-600";
      case "Concluído": return "bg-blue-600";
      case "Em Desenvolvimento": return "bg-yellow-600";
      default: return "bg-gray-600";
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Projetos em Destaque</h2>
            <div className="w-20 h-1 bg-navy-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Seleção dos principais projetos que demonstram minha experiência em liderança técnica e desenvolvimento
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project) => (
              <Card key={project.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/20 transition-colors duration-300"></div>
                  
                  {/* Status Badge */}
                  <Badge className={`absolute top-4 right-4 ${getStatusColor(project.status)} text-white`}>
                    {project.status}
                  </Badge>
                  
                  {/* View Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      className="bg-white text-navy-800 hover:bg-navy-800 hover:text-white"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye size={16} className="mr-2" />
                      Ver Detalhes
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  
                  {/* Project Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-navy-800 mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-navy-100 text-navy-700 text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                      className="text-navy-600 hover:text-navy-700"
                    >
                      Ver Mais
                    </Button>
                    
                    <div className="flex space-x-2">
                      {/* Mock buttons - in real app would link to actual repos/demos */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-gray-600"
                        disabled
                      >
                        <Github size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-gray-600"
                        disabled
                      >
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Show More/Less Button */}
          {projects.length > 3 && (
            <div className="text-center mb-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(!showAll)}
                className="border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white px-8"
              >
                {showAll ? (
                  <>
                    <EyeOff size={20} className="mr-2" />
                    Ver Menos
                  </>
                ) : (
                  <>
                    <Eye size={20} className="mr-2" />
                    Ver Todos ({projects.length} projetos)
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Project Statistics */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-slate-50 to-slate-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-navy-800 mb-6 text-center">
                Impacto dos Projetos
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-green-600" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-navy-800 mb-2">60%</div>
                  <p className="text-gray-600">Melhoria Performance</p>
                  <p className="text-sm text-gray-500 mt-1">Redução no tempo de resposta</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-blue-600" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-navy-800 mb-2">80%</div>
                  <p className="text-gray-600">Redução Bugs</p>
                  <p className="text-sm text-gray-500 mt-1">Backlog de erros eliminado</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-navy-600" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-navy-800 mb-2">100%</div>
                  <p className="text-gray-600">Modernização</p>
                  <p className="text-sm text-gray-500 mt-1">Sistemas migrados com sucesso</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-navy-800">{selectedProject.title}</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </Button>
            </div>
            
            <div className="p-6">
              
              {/* Project Image */}
              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <Badge className={`absolute top-4 right-4 ${getStatusColor(selectedProject.status)} text-white`}>
                  {selectedProject.status}
                </Badge>
              </div>

              {/* Project Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-navy-800 mb-2">Período</h4>
                  <p className="text-gray-600">{selectedProject.period}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-800 mb-2">Status</h4>
                  <Badge className={`${getStatusColor(selectedProject.status)} text-white`}>
                    {selectedProject.status}
                  </Badge>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-800 mb-2">Tecnologias</h4>
                  <p className="text-gray-600">{selectedProject.technologies.length} tecnologias</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="font-semibold text-navy-800 mb-3">Descrição do Projeto</h4>
                <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="font-semibold text-navy-800 mb-3">Principais Conquistas</h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-navy-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-navy-800 mb-3">Tecnologias Utilizadas</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-navy-100 text-navy-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-4 pt-6 border-t">
                <Button
                  variant="outline"
                  className="border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white"
                  disabled
                >
                  <Github size={16} className="mr-2" />
                  Ver Código (Confidencial)
                </Button>
                <Button
                  variant="outline"
                  className="border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white"
                  disabled
                >
                  <ExternalLink size={16} className="mr-2" />
                  Demo (Restrito)
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;