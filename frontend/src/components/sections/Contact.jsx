import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useToast } from "../../hooks/use-toast";
import { Mail, Phone, MapPin, Send, Download, Linkedin, Github } from "lucide-react";
import { personalInfo } from "../../data/mock";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Obrigado pelo contato. Retornarei em breve.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Entre em Contato</h2>
            <div className="w-20 h-1 bg-navy-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Interessado em conversar sobre oportunidades ou projetos? Entre em contato comigo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Information */}
            <div className="space-y-6">
              
              {/* Contact Cards */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center">
                      <Mail className="text-navy-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-800">Email</h3>
                      <p className="text-gray-600 text-sm">Resposta em até 24h</p>
                    </div>
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-navy-600 hover:text-navy-700 transition-colors font-medium"
                  >
                    {personalInfo.email}
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center">
                      <Phone className="text-navy-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-800">Telefone</h3>
                      <p className="text-gray-600 text-sm">Seg - Sex, 9h às 18h</p>
                    </div>
                  </div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-navy-600 hover:text-navy-700 transition-colors font-medium"
                  >
                    {personalInfo.phone}
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center">
                      <MapPin className="text-navy-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-800">Localização</h3>
                      <p className="text-gray-600 text-sm">Trabalho remoto disponível</p>
                    </div>
                  </div>
                  <p className="text-navy-600 font-medium">{personalInfo.location}</p>
                </CardContent>
              </Card>

              {/* Social Links & CV Download */}
              <Card className="border-0 shadow-lg bg-gradient-to-r from-navy-600 to-navy-700 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Conecte-se Comigo</h3>
                  
                  <div className="space-y-4">
                    {/* Social Links */}
                    <div className="flex space-x-4">
                      <a
                        href={personalInfo.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-navy-100 hover:text-white transition-colors"
                      >
                        <Linkedin size={20} />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href={personalInfo.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-navy-100 hover:text-white transition-colors"
                      >
                        <Github size={20} />
                        <span>GitHub</span>
                      </a>
                    </div>

                    {/* CV Download */}
                    <div className="pt-4 border-t border-navy-500">
                      <Button
                        className="w-full bg-white text-navy-600 hover:bg-navy-50"
                        onClick={() => {
                          window.open("https://customer-assets.emergentagent.com/job_c2661964-7912-4f4a-bf9c-a800cd7beb8c/artifacts/6t3ouo0g_Joseliano_cv_desenvolvedor_dev.pdf", "_blank");
                        }}
                      >
                        <Download size={16} className="mr-2" />
                        Download CV em PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-navy-800 mb-6">Envie uma Mensagem</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-medium">
                          Nome Completo *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Seu nome completo"
                          required
                          className="border-gray-300 focus:border-navy-500 focus:ring-navy-500"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu.email@exemplo.com"
                          required
                          className="border-gray-300 focus:border-navy-500 focus:ring-navy-500"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700 font-medium">
                        Assunto
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Assunto da sua mensagem"
                        className="border-gray-300 focus:border-navy-500 focus:ring-navy-500"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-medium">
                        Mensagem *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Descreva como posso ajudá-lo ou sobre o que gostaria de conversar..."
                        rows={6}
                        required
                        className="border-gray-300 focus:border-navy-500 focus:ring-navy-500"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={!isFormValid || isSubmitting}
                        className="w-full bg-navy-600 hover:bg-navy-700 text-white disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send size={16} className="mr-2" />
                            Enviar Mensagem
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Form Note */}
                    <p className="text-sm text-gray-500 text-center">
                      * Campos obrigatórios. Sua mensagem será respondida em até 24 horas.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-slate-100 to-slate-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-navy-800 mb-4">
                  Pronto para Colaborar?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Estou sempre interessado em discutir novas oportunidades, projetos desafiadores 
                  e como posso contribuir para o sucesso da sua equipe ou empresa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-navy-600 hover:bg-navy-700 text-white px-8"
                    onClick={() => {
                      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <Mail size={20} className="mr-2" />
                    Vamos Conversar
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white px-8"
                    onClick={() => {
                      window.open("https://customer-assets.emergentagent.com/job_c2661964-7912-4f4a-bf9c-a800cd7beb8c/artifacts/6t3ouo0g_Joseliano_cv_desenvolvedor_dev.pdf", "_blank");
                    }}
                  >
                    <Download size={20} className="mr-2" />
                    Ver Currículo Completo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;