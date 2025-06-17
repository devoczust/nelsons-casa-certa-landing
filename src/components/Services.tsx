
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Elétrica Residencial",
      description: "Instalação e reparo de tomadas, interruptores, chuveiros elétricos, luminárias e pequenos reparos elétricos.",
      icon: "⚡"
    },
    {
      title: "Hidráulica",
      description: "Reparo de vazamentos, troca de torneiras, instalação de válvulas, desentupimento e pequenos reparos hidráulicos.",
      icon: "🔧"
    },
    {
      title: "Montagem de Móveis",
      description: "Montagem de móveis planejados, estantes, guarda-roupas, mesas, cadeiras e todos os tipos de móveis.",
      icon: "🛠️"
    },
    {
      title: "Instalação de Suportes",
      description: "Fixação de TVs na parede, suportes, prateleiras, quadros, espelhos e outros itens de decoração.",
      icon: "📺"
    },
    {
      title: "Pequenos Reparos",
      description: "Conserto de fechaduras, dobradiças, ajustes em portas e janelas, troca de ferragens em geral.",
      icon: "🔨"
    },
    {
      title: "Manutenção Geral",
      description: "Serviços diversos de manutenção residencial, instalações e pequenos consertos em geral.",
      icon: "🏠"
    }
  ];

  const handleWhatsAppClick = (service: string) => {
    const message = `Olá! Gostaria de solicitar um orçamento para ${service}.`;
    window.open(`https://wa.me/5541988518580?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços para sua casa ou apartamento, 
            sempre com qualidade e preço justo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 text-center">
                  {service.description}
                </CardDescription>
                <Button 
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="w-full bg-secondary hover:bg-secondary/90"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Precisa de Outro Serviço?
            </h3>
            <p className="text-gray-600 mb-6">
              Não encontrou o que procura? Entre em contato! Realizamos diversos outros 
              tipos de pequenos reparos e manutenções residenciais.
            </p>
            <Button 
              onClick={() => handleWhatsAppClick("outros serviços")}
              size="lg"
              className="bg-primary hover:bg-primary/90"
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
