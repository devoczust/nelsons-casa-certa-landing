
import { MessageCircle, Phone, MapPin } from "lucide-react";

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
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informações da Empresa */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Nelson Oczust</h3>
                <p className="text-gray-300 text-sm">Marido de Aluguel</p>
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
                className="bg-primary hover:bg-primary/90 p-2 rounded-full transition-colors"
              >
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Elétrica Residencial</li>
              <li>Hidráulica</li>
              <li>Montagem de Móveis</li>
              <li>Instalação de Suportes</li>
              <li>Pequenos Reparos</li>
              <li>Manutenção Geral</li>
            </ul>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-primary transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="hover:text-primary transition-colors"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(41) 98851-8580</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Curitiba e Região Metropolitana</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-2">Horário de Atendimento</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Segunda a Sexta: 7h às 18h</p>
                <p>Sábado: 8h às 16h</p>
                <p>Domingo: Emergências</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Nelson Oczust - Marido de Aluguel. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">
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
