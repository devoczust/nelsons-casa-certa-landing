
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541988518580?text=Olá! Gostaria de solicitar um orçamento para serviços de reforma e manutenção.', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+5541988518580', '_self');
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            <span className="text-primary">Marido de Aluguel</span> em Curitiba
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Serviços de <strong>pequenas reformas</strong>, <strong>elétrica</strong>, <strong>hidráulica</strong>, 
            <strong> montagem de móveis</strong> e <strong>manutenção residencial</strong> com rapidez e qualidade!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-4 animate-pulse"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Orçamento Grátis via WhatsApp
            </Button>
            <Button 
              onClick={handleCallClick}
              variant="outline"
              size="lg" 
              className="text-lg px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Phone className="w-6 h-6 mr-3" />
              (41) 98851-8580
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-primary mb-2">+500</div>
              <div className="text-gray-600 text-sm">Serviços Realizados</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-primary mb-2">35+</div>
              <div className="text-gray-600 text-sm">Anos de Experiência</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600 text-sm">Clientes Satisfeitos</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-2xl font-bold text-primary mb-2">24h</div>
              <div className="text-gray-600 text-sm">Resposta Rápida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
