
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Altura aproximada do header fixo
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541988518580?text=Olá! Gostaria de saber mais sobre os serviços de reforma e manutenção.', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50 border-b border-construction-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo size="md" showText={true} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-wood-700 hover:text-construction-600 transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-wood-700 hover:text-construction-600 transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-wood-700 hover:text-construction-600 transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-wood-700 hover:text-construction-600 transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Desktop WhatsApp Button */}
          <div className="hidden md:block">
            <Button onClick={handleWhatsAppClick} className="bg-secondary hover:bg-secondary/90">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-wood-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-wood-800 mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-wood-800 mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-construction-200">
            <nav className="flex flex-col space-y-3 pt-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-wood-700 hover:text-construction-600 transition-colors py-2 font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-wood-700 hover:text-construction-600 transition-colors py-2 font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-wood-700 hover:text-construction-600 transition-colors py-2 font-medium"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-wood-700 hover:text-construction-600 transition-colors py-2 font-medium"
              >
                Contato
              </button>
              <Button onClick={handleWhatsAppClick} className="bg-secondary hover:bg-secondary/90 mt-4">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
