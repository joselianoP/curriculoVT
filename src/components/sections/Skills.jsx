import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

import {
  Code, 
  Code2,
  Globe,    
  Settings, 
  Award ,
  Server,
  Coffee,
  Monitor,
  Database,
  Cloud,
  GitBranch,
  Shield,
  Bug,
  FileBarChart,
  Wrench,
  PencilRuler,
  GraduationCap,
  Users,
  Brain,
  Bot,
  Blocks,
  Hammer,
} from "lucide-react";



import { skills } from "../../data/mock";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Group technical skills by category
  const skillsByCategory = skills.technical.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryIcons = {
    Architecture: <Brain size={20} />,

  Java: <Coffee size={20} />,
  Microsoft: <Blocks size={20} />,
  PHP: <Hammer size={20} />,

  Frontend: <Monitor size={20} />,
  Database: <Database size={20} />,

  Cloud: <Cloud size={20} />,
  DevOps: <GitBranch size={20} />,
  Messaging: <GitBranch size={20} />,

  Security: <Shield size={20} />,
  Quality: <Bug size={20} />,
  Reporting: <FileBarChart size={20} />,

  Modeling: <PencilRuler size={20} />,

  Tools: <Wrench size={20} />,
  Servers: <Server size={20} />,
  IDE: <Monitor size={20} />,

  Methodology: <GraduationCap size={20} />,
  Leadership: <Users size={20} />,

   JavaScript: <Code2 size={20} />,

  AI: <Bot size={20} />,
  };

  const getSkillColor = (level) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-gray-500";
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Habilidades</h2>
            <div className="w-20 h-1 bg-navy-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Competências técnicas e interpessoais desenvolvidas ao longo de mais de duas décadas
            </p>
          </div>

          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="technical" className="flex items-center space-x-2">
                <Code size={18} />
                <span>Técnicas</span>
              </TabsTrigger>
              <TabsTrigger value="soft" className="flex items-center space-x-2">
                <Brain size={18} />
                <span>Interpessoais</span>
              </TabsTrigger>
              <TabsTrigger value="languages" className="flex items-center space-x-2">
                <Globe size={18} />
                <span>Idiomas</span>
              </TabsTrigger>
            </TabsList>

            {/* Technical Skills */}
            <TabsContent value="technical">
              <div className="space-y-8">
                
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      activeCategory === "all"
                        ? "bg-navy-600 text-white"
                        : "bg-white text-gray-600 hover:bg-navy-100"
                    }`}
                  >
                    Todas
                  </button>
                  {Object.keys(skillsByCategory).map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors flex items-center space-x-2 ${
                        activeCategory === category
                          ? "bg-navy-600 text-white"
                          : "bg-white text-gray-600 hover:bg-navy-100"
                      }`}
                    >
                      {categoryIcons[category]}
                      <span>{category}</span>
                    </button>
                  ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                    <div key={category} className={activeCategory !== "all" && activeCategory !== category ? "hidden" : ""}>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center text-navy-600">
                              {categoryIcons[category]}
                            </div>
                            <h3 className="text-xl font-semibold text-navy-800">{category}</h3>
                          </div>
                          
                          <div className="space-y-4">
                            {categorySkills.map((skill, index) => (
                              <div key={index}>
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-gray-700 font-medium">{skill.name}</span>
                                  <span className="text-sm text-gray-500">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div
                                    className={`h-2 rounded-full transition-all duration-500 ${getSkillColor(skill.level)}`}
                                    style={{ width: `${skill.level}%` }}
                                  ></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Soft Skills */}
            <TabsContent value="soft">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.soft.map((skill, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-navy-100 to-navy-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Brain className="text-navy-600" size={24} />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-navy-800 mb-3">{skill.name}</h3>
                      
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#e5e7eb"
                            strokeWidth="8"
                            fill="none"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#1e3a8a"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${skill.level * 2.51} 251`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-lg font-bold text-navy-800">{skill.level}%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Languages */}
            <TabsContent value="languages">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {skills.languages.map((language, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-navy-100 to-navy-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="text-navy-600" size={24} />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-navy-800 mb-4">{language.name}</h3>
                      
                      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                        <div
                          className="bg-navy-600 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${language.level}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Básico</span>
                        <span>Fluente</span>
                      </div>
                      
                      <Badge className="mt-3 bg-navy-600 text-white">
                        {language.level === 100 ? "Nativo" : 
                         language.level >= 75 ? "Técnico" : 
                         language.level >= 45 ? "Básico" : "Iniciante"}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Skills Summary */}
          <div className="mt-16">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-navy-600 to-navy-700 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Resumo de Competências</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">{skills.technical.length}+</div>
                    <p className="text-navy-100">Tecnologias</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">{skills.soft.length}</div>
                    <p className="text-navy-100">Soft Skills</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">{skills.languages.length}</div>
                    <p className="text-navy-100">Idiomas</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <p className="text-navy-100">Anos Liderança</p>
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

export default Skills;