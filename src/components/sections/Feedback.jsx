import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, Eye, EyeOff } from "lucide-react";
import { feedbacks } from "../../data/mock";

const Feedbacks = () => {
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedFeedbacks = showAll ? feedbacks : feedbacks.slice(0, 3);

  const getStatusColor = (status) => {
    switch (status) {
      case "Produção":
        return "bg-green-600";
      case "Concluído":
        return "bg-blue-600";
      case "Em Desenvolvimento":
        return "bg-yellow-500";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <section id="feedback" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">
              Feedback Técnico
            </h2>
            <div className="w-20 h-1 bg-navy-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Avaliações técnicas e feedback recebidos
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedFeedbacks.map((item) => (
              <Card
                key={item.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                
                {/* Imagem */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  <Badge
                    className={`absolute top-4 right-4 ${getStatusColor(item.status)} text-white`}
                  >
                    {item.status}
                  </Badge>
                </div>

                <CardContent className="p-6">

                  {/* Título */}
                  <h3 className="text-xl font-semibold text-navy-800 mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Data */}
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>

                  {/* Descrição */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies?.slice(0, 3).map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-navy-100 text-navy-700 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Ação */}
                  <div className="pt-4 border-t">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedFeedback(item)}
                      className="text-navy-600"
                    >
                      <Eye size={16} className="mr-2" />
                      Ver Detalhes
                    </Button>
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>

          {/* Botão ver mais */}
          {feedbacks.length > 3 && (
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
                    Ver Todos ({feedbacks.length})
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedFeedback && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            
            <div className="p-6 border-b flex justify-between">
              <h3 className="text-xl font-bold text-navy-800">
                {selectedFeedback.title}
              </h3>

              <Button
                variant="ghost"
                onClick={() => setSelectedFeedback(null)}
              >
                ✕
              </Button>
            </div>

            <div className="p-6">

              {/* Imagem */}
              <img
                src={selectedFeedback.image}
                alt={selectedFeedback.title}
                className="w-full h-64 object-cover rounded mb-6"
              />

              {/* Info */}
              <div className="mb-4 text-sm text-gray-500">
                <Calendar size={14} className="inline mr-2" />
                {selectedFeedback.period}
              </div>

              {/* Descrição completa */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {selectedFeedback.summary}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {selectedFeedback.highlights?.map((h, i) => (
                  <li key={i} className="text-gray-600">
                    • {h}
                  </li>
                ))}
              </ul>

              {/* Tecnologias */}
              <div className="flex flex-wrap gap-2">
                {selectedFeedback.technologies?.map((tech, i) => (
                  <Badge key={i} className="bg-navy-100 text-navy-700">
                    {tech}
                  </Badge>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Feedbacks;