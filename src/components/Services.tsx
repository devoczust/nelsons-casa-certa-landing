
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Zap, Wrench, Hammer, Monitor, Settings, Home } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Elétrica Residencial",
      description: "Instalação e reparo de tomadas, interruptores, chuveiros elétricos, luminárias e pequenos reparos elétricos.",
      icon: <Zap className="w-8 h-8" />,
      bgImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Hidráulica",
      description: "Reparo de vazamentos, troca de torneiras, instalação de válvulas, desentupimento e pequenos reparos hidráulicos.",
      icon: <Wrench className="w-8 h-8" />,
      bgImage: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Montagem de Móveis",
      description: "Montagem de móveis planejados, estantes, guarda-roupas, mesas, cadeiras e todos os tipos de móveis.",
      icon: <Hammer className="w-8 h-8" />,
      bgImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Instalação de Suportes",
      description: "Fixação de TVs na parede, suportes, prateleiras, quadros, espelhos e outros itens de decoração.",
      icon: <Monitor className="w-8 h-8" />,
      bgImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Pequenos Reparos",
      description: "Conserto de fechaduras, dobradiças, ajustes em portas e janelas, troca de ferragens em geral.",
      icon: <Settings className="w-8 h-8" />,
      bgImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&h=600"
    },
    {
      title: "Manutenção Geral",
      description: "Serviços diversos de manutenção residencial, instalações e pequenos consertos em geral.",
      icon: <Home className="w-8 h-8" />,
      bgImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&h=600"
    }
  ];

  const handleWhatsAppClick = (service: string) => {
    const message = `Olá! Gostaria de solicitar um orçamento para ${service}.`;
    window.open(`https://wa.me/5541988518580?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-construction-50 via-amber-50 to-earth-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-construction-pattern" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-construction-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-earth-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-wood-900 mb-6">
            Nossos <span className="bg-gradient-to-r from-construction-600 to-earth-600 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-wood-600 max-w-3xl mx-auto leading-relaxed font-light">
            Oferecemos uma ampla gama de serviços para sua casa ou apartamento, 
            sempre com qualidade profissional e preço justo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/95 backdrop-blur-sm hover:scale-105 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.bgImage} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  {service.icon}
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-wood-800 group-hover:text-construction-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-wood-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button 
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="w-full bg-gradient-to-r from-secondary to-teal-700 hover:from-teal-700 hover:to-secondary transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl max-w-3xl mx-auto border border-construction-100">
            <h3 className="text-3xl font-bold text-wood-800 mb-6">
              Precisa de Outro Serviço?
            </h3>
            <p className="text-wood-600 mb-8 text-lg leading-relaxed">
              Não encontrou o que procura? Entre em contato! Realizamos diversos outros 
              tipos de pequenos reparos e manutenções residenciais.
            </p>
            <Button 
              onClick={() => handleWhatsAppClick("outros serviços")}
              size="lg"
              className="bg-gradient-to-r from-construction-600 to-construction-700 hover:from-construction-700 hover:to-construction-800 text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Consultar Outros Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
