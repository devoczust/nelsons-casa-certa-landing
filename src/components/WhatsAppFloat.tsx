
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar o botão após 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541999999999?text=Olá! Vim pelo site e gostaria de solicitar um orçamento.', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-secondary hover:bg-secondary/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse group relative"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Clique para conversar!
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
        </div>

        {/* Pulso animado */}
        <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-30"></div>
      </button>
      
      {/* Texto chamativo */}
      <div className="absolute bottom-full right-0 mb-2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-bounce">
        💬 Orçamento Grátis!
      </div>
    </div>
  );
};

export default WhatsAppFloat;
