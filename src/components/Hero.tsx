
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle, Star, Award, Hammer, Wrench, Home } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541988518580?text=Olá! Gostaria de solicitar um orçamento para serviços de reforma e manutenção.', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+5541988518580', '_self');
  };

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-construction-50 via-amber-50 to-earth-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-construction-pattern" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-construction-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-earth-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Floating construction tools */}
      <div className="absolute top-32 left-10 text-construction-600 opacity-20 animate-float">
        <Hammer className="w-16 h-16 animate-hammer" />
      </div>
      <div className="absolute top-48 right-16 text-construction-600 opacity-20 animate-float animation-delay-2000">
        <Wrench className="w-12 h-12" />
      </div>
      <div className="absolute bottom-32 right-32 text-construction-600 opacity-20 animate-float animation-delay-4000">
        <Home className="w-14 h-14" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Trust indicators */}
          <div className="flex items-center justify-center mb-8 space-x-6 text-sm text-wood-700 animate-slide-up">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-amber-500 fill-current" />
              <span className="font-medium">5.0 • 500+ Avaliações</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-construction-600" />
              <span className="font-medium">Profissional Certificado</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span className="font-medium">Garantia de Qualidade</span>
            </div>
          </div>

          {/* Main content */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold text-wood-900 mb-8 leading-tight">
              <span className="block">Seu</span>
              <span className="bg-gradient-to-r from-construction-600 via-construction-700 to-earth-600 bg-clip-text text-transparent">
                Marido de Aluguel
              </span>
              <span className="block text-4xl md:text-5xl font-bold text-wood-700">em Curitiba</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-wood-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Transformamos sua casa com serviços especializados de <strong className="text-construction-700">pequenas reformas</strong>, 
              <strong className="text-construction-700"> elétrica</strong>, <strong className="text-construction-700">hidráulica</strong> e 
              <strong className="text-construction-700"> montagem de móveis</strong>. Qualidade profissional, rapidez garantida.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-gradient-to-r from-secondary to-teal-700 hover:from-teal-700 hover:to-secondary text-white text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-semibold"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Solicitar Orçamento Grátis
              </Button>
              <Button 
                onClick={handleCallClick}
                variant="outline"
                size="lg" 
                className="text-lg px-10 py-6 rounded-xl border-2 border-construction-400 text-construction-700 hover:bg-construction-50 hover:border-construction-500 font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <Phone className="w-6 h-6 mr-3" />
                (41) 98851-8580
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-16 animate-slide-up animation-delay-2000">
            <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&h=600" 
                alt="Profissional realizando reforma residencial em Curitiba"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                  <p className="text-construction-800 font-semibold">✓ Mais de 35 anos de experiência</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up animation-delay-4000">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-construction-100 hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-construction-600 to-earth-600 bg-clip-text text-transparent mb-3">
                  500+
                </div>
                <div className="text-wood-600 font-medium">Serviços Realizados</div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-construction-100 hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-construction-600 to-earth-600 bg-clip-text text-transparent mb-3">
                  35+
                </div>
                <div className="text-wood-600 font-medium">Anos de Experiência</div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-construction-100 hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-construction-600 to-earth-600 bg-clip-text text-transparent mb-3">
                  100%
                </div>
                <div className="text-wood-600 font-medium">Clientes Satisfeitos</div>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-construction-100 hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-construction-600 to-earth-600 bg-clip-text text-transparent mb-3">
                  24h
                </div>
                <div className="text-wood-600 font-medium">Resposta Rápida</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
