
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Roberto",
      location: "Batel, Curitiba",
      rating: 5,
      comment: "Montou toda a mobília do meu quarto em meio período. Trabalho impecável e muito organizado. Super recomendo!",
      service: "Montagem de Móveis",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "João Santos",
      location: "Água Verde, Curitiba",
      rating: 5,
      comment: "Muito pontual e caprichoso. Resolveu um problema de vazamento que outros não conseguiram. Preço justo!",
      service: "Reparo Hidráulico",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Mariana Costa",
      location: "Portão, Curitiba",
      rating: 5,
      comment: "Instalou várias tomadas e interruptores na casa nova. Trabalho muito bem feito e com garantia. Excelente profissional!",
      service: "Instalação Elétrica",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Roberto Lima",
      location: "Champagnat, Curitiba",
      rating: 5,
      comment: "Montou todos os móveis da casa nova rapidamente. Muito cuidadoso e deixou tudo organizado. Profissional top!",
      service: "Montagem de Móveis",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Fernanda Costa",
      location: "Bigorrilho, Curitiba",
      rating: 5,
      comment: "Instalou a TV na parede e alguns quadros. Trabalho perfeito, sem danificar a parede. Super recomendo!",
      service: "Instalação de Suportes",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Carlos Eduardo",
      location: "Cabral, Curitiba",
      rating: 5,
      comment: "Consertou a fechadura e ajustou as portas. Serviço rápido e bem feito. Preço honesto e qualidade garantida!",
      service: "Pequenos Reparos",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100"
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
    <section id="testimonials" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.4))]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O Que Nossos <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Veja os depoimentos de quem já confiou em nossos serviços
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/90 backdrop-blur-sm hover:scale-105 group">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="border-t pt-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover shadow-lg"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-lg">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                      <p className="text-sm text-primary font-medium mt-1">{testimonial.service}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl max-w-3xl mx-auto border border-white/50">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Avaliação Geral dos Clientes
            </h3>
            <div className="flex items-center justify-center mb-6">
              <div className="text-5xl font-bold text-primary mr-6">5.0</div>
              <div>
                <div className="flex items-center mb-3">
                  {renderStars(5)}
                </div>
                <p className="text-gray-600 text-lg">Baseado em mais de 100 avaliações</p>
              </div>
            </div>
            <p className="text-gray-600 text-xl">
              <strong className="text-primary">100% dos clientes</strong> recomendam nossos serviços para amigos e familiares
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
