
import { MessageCircle, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541988518580?text=Olá! Gostaria de mais informações sobre os serviços.', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+5541988518580', '_self');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-wood-800 text-white py-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-wood-texture opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informações da Empresa */}
          <div>
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-construction-500 to-amber-500 rounded-lg flex items-center justify-center relative shadow-lg">
                  <div className="w-5 h-5 bg-white rounded-sm absolute"></div>
                  <div className="w-3 h-3 bg-wood-800 absolute bottom-1 right-1 rounded-sm"></div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white leading-tight">
                    Nelson Oczust
                  </h1>
                  <p className="text-sm text-construction-200">
                    Marido de Aluguel
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Mais de 35 anos oferecendo serviços de qualidade em pequenas reformas 
              e manutenção residencial em Curitiba e região.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-secondary hover:bg-secondary/90 p-2 rounded-full transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <button 
                onClick={handleCallClick}
                className="bg-construction-600 hover:bg-construction-700 p-2 rounded-full transition-colors"
              >
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-construction-200">Nossos Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-construction-300 transition-colors cursor-pointer">Elétrica Residencial</li>
              <li className="hover:text-construction-300 transition-colors cursor-pointer">Hidráulica</li>
              <li className="hover:text-construction-300 transition-colors cursor-pointer">Montagem de Móveis</li>
              <li className="hover:text-construction-300 transition-colors cursor-pointer">Instalação de Suportes</li>
              <li className="hover:text-construction-300 transition-colors cursor-pointer">Pequenos Reparos</li>
              <li className="hover:text-construction-300 transition-colors cursor-pointer">Manutenção Geral</li>
            </ul>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-construction-200">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-construction-300 transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-construction-300 transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="hover:text-construction-300 transition-colors"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-construction-300 transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-construction-200">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-construction-400" />
                <span>(41) 98851-8580</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-construction-400" />
                <span>WhatsApp</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-construction-400" />
                <span>Curitiba e Região Metropolitana</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-2 text-construction-200">Horário de Atendimento</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Segunda a Sexta: 7h às 18h</p>
                <p>Domingo: Emergências</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-wood-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Nelson Oczust - Marido de Aluguel. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-construction-300 text-sm">
                Pequenas Reformas • Manutenção Residencial • Curitiba/PR
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
