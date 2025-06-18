import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Roberto",
      location: "Batel, Curitiba",
      rating: 5,
      comment: "Montou toda a mobília do meu quarto em meio período. Trabalho impecável e muito organizado. Super recomendo!",
      service: "Montagem de Móveis"
    },
    {
      name: "João Santos",
      location: "Água Verde, Curitiba",
      rating: 5,
      comment: "Muito pontual e caprichoso. Resolveu um problema de vazamento que outros não conseguiram. Preço justo!",
      service: "Reparo Hidráulico"
    },
    {
      name: "Ana Carolina",
      location: "Portão, Curitiba",
      rating: 5,
      comment: "Pintou meu apartamento em 2 dias. Trabalho limpo e organizado. Ficou perfeito! Já indiquei para várias amigas.",
      service: "Pintura Residencial"
    },
    {
      name: "Roberto Lima",
      location: "Champagnat, Curitiba",
      rating: 5,
      comment: "Montou todos os móveis da casa nova rapidamente. Muito cuidadoso e deixou tudo organizado. Profissional top!",
      service: "Montagem de Móveis"
    },
    {
      name: "Fernanda Costa",
      location: "Bigorrilho, Curitiba",
      rating: 5,
      comment: "Instalou a TV na parede e alguns quadros. Trabalho perfeito, sem danificar a parede. Super recomendo!",
      service: "Instalação de Suportes"
    },
    {
      name: "Carlos Eduardo",
      location: "Cabral, Curitiba",
      rating: 5,
      comment: "Consertou a fechadura e ajustou as portas. Serviço rápido e bem feito. Preço honesto e qualidade garantida!",
      service: "Pequenos Reparos"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja os depoimentos de quem já confiou em nossos serviços
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-sm text-primary font-medium mt-1">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Avaliação Geral dos Clientes
            </h3>
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl font-bold text-primary mr-4">5.0</div>
              <div>
                <div className="flex items-center mb-2">
                  {renderStars(5)}
                </div>
                <p className="text-gray-600">Baseado em mais de 100 avaliações</p>
              </div>
            </div>
            <p className="text-gray-600">
              <strong>100% dos clientes</strong> recomendam nossos serviços para amigos e familiares
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
