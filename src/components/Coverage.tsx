
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Área de Atendimento
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Atendemos Curitiba e região metropolitana com rapidez e qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mapa de Curitiba */}
          <div className="bg-gray-100 rounded-lg overflow-hidden min-h-[400px] relative">
            <img 
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&h=600" 
              alt="Vista aérea de Curitiba e região metropolitana"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">
                  Curitiba e Região Metropolitana
                </h3>
                <p className="text-lg">
                  Cobrimos toda a região de Curitiba com<br />
                  atendimento rápido e eficiente
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Principais Cidades */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Cidades Atendidas
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cities.map((city, index) => (
                  <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                    <MapPin className="w-4 h-4 text-primary mr-2" />
                    <span className="text-gray-700 font-medium">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Principais Bairros de Curitiba */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Principais Bairros de Curitiba
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {neighborhoods.map((neighborhood, index) => (
                  <div key={index} className="flex items-center text-gray-600 py-1">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    {neighborhood}
                  </div>
                ))}
              </div>
            </div>

            {/* Informações de Atendimento */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Informações de Atendimento
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Atendimento em toda região metropolitana
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Deslocamento sem taxa adicional na região
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Horário flexível, incluindo fins de semana
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Resposta rápida via WhatsApp
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
