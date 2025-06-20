
import { MapPin } from "lucide-react";

const Coverage = () => {
  const neighborhoods = [
    "Xaxim", "Capão Raso", "Fazendinha", "Sítio Cercado", "Boqueirão",
    "Hauer", "Cidade Industrial", "Umbará", "Novo Mundo", "Santa Felicidade",
    "Orleans", "Tatuquara", "Campo de Santana", "São Braz", "Lindoia",
    "Vila Izabel", "Guabirotuba", "Parolin", "Prado Velho", "Vila Hauer",
    "Rebouças", "Portão"
  ];

  const cities = [
    "Curitiba", "São José dos Pinhais", "Pinhais", "Colombo", 
    "Almirante Tamandaré", "Campo Largo", "Araucária"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.4))]" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Área de <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Atendimento</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Atendemos Curitiba e região metropolitana com rapidez e qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Mapa de Curitiba */}
          <div className="relative group">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600298881974-6be191ceeda1?auto=format&fit=crop&w=800&h=600" 
                alt="Vista aérea de Curitiba e região metropolitana"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-10">
                <div className="text-center text-white">
                  <MapPin className="w-16 h-16 mx-auto mb-4 filter drop-shadow-lg" />
                  <h3 className="text-2xl font-semibold mb-2 filter drop-shadow-lg">
                    Curitiba e Região Metropolitana
                  </h3>
                  <p className="text-lg filter drop-shadow-lg">
                    Cobrimos toda a região de Curitiba com<br />
                    atendimento rápido e eficiente
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Principais Cidades */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Cidades Atendidas
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {cities.map((city, index) => (
                  <div key={index} className="flex items-center bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Principais Bairros de Curitiba */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Principais Bairros de Curitiba
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {neighborhoods.map((neighborhood, index) => (
                  <div key={index} className="flex items-center text-gray-600 py-2 hover:text-secondary transition-colors">
                    <span className="w-3 h-3 bg-secondary rounded-full mr-4 flex-shrink-0"></span>
                    <span className="font-medium">{neighborhood}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Informações de Atendimento */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border border-green-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-6">
                Informações de Atendimento
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-4 text-xl">✓</span>
                  <span className="font-medium">Atendimento em toda região metropolitana</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-4 text-xl">✓</span>
                  <span className="font-medium">Deslocamento sem taxa adicional na região</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-4 text-xl">✓</span>
                  <span className="font-medium">Horário flexível, incluindo fins de semana</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-4 text-xl">✓</span>
                  <span className="font-medium">Resposta rápida via WhatsApp</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
