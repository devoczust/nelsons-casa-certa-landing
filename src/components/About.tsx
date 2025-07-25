
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-construction-50 to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-wood-texture" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-construction-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-wood-900 mb-6">
              Sobre <span className="bg-gradient-to-r from-construction-600 to-amber-600 bg-clip-text text-transparent">Nelson Oczust</span>
            </h2>
            <p className="text-xl text-wood-600 max-w-3xl mx-auto leading-relaxed font-light">
              Profissional experiente em serviços de manutenção e pequenas reformas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-construction-100 to-amber-100 rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=600" 
                  alt="Profissional experiente Nelson Oczust"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-construction-600 mb-2">35+</div>
                    <div className="text-wood-600 text-sm font-medium">Anos de<br/>Experiência</div>
                  </div>
                </div>
              </div>
              
              {/* Additional images */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&h=300" 
                    alt="Ferramentas profissionais"
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                    Ferramentas Profissionais
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=400&h=300" 
                    alt="Trabalho em andamento"
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                    Trabalho Detalhado
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-construction-100">
                <h3 className="text-3xl font-bold text-wood-800 mb-6">
                  Experiência e Confiança
                </h3>
                <p className="text-wood-600 leading-relaxed mb-6 text-lg">
                  Com mais de <strong className="text-construction-600">35 anos de experiência</strong> em serviços de manutenção 
                  residencial, Nelson Oczust é referência em <strong className="text-secondary">pequenas reformas</strong> e 
                  serviços de <strong className="text-construction-600">marido de aluguel</strong> em Curitiba e região metropolitana.
                </p>
                <p className="text-wood-600 leading-relaxed mb-6 text-lg">
                  Formado em técnicas de construção civil e com cursos de especialização em 
                  elétrica e hidráulica residencial, oferece serviços com total segurança e qualidade.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-construction-50 to-construction-100 p-6 rounded-xl text-center shadow-lg border border-construction-200 hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-construction-600 mb-3">+500</div>
                  <div className="text-wood-700 font-medium">Projetos Concluídos</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center shadow-lg border border-green-200 hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-secondary mb-3">100%</div>
                  <div className="text-wood-700 font-medium">Aprovação dos Clientes</div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-construction-100">
                <h4 className="text-xl font-semibold text-wood-800 mb-6">Diferenciais:</h4>
                <ul className="space-y-4">
                  <li className="flex items-center text-wood-600 text-lg">
                    <span className="text-secondary mr-4 text-xl">✓</span>
                    Pontualidade e compromisso com prazos
                  </li>
                  <li className="flex items-center text-wood-600 text-lg">
                    <span className="text-secondary mr-4 text-xl">✓</span>
                    Orçamentos transparentes e sem surpresas
                  </li>
                  <li className="flex items-center text-wood-600 text-lg">
                    <span className="text-secondary mr-4 text-xl">✓</span>
                    Materiais de qualidade e ferramentas profissionais
                  </li>
                  <li className="flex items-center text-wood-600 text-lg">
                    <span className="text-secondary mr-4 text-xl">✓</span>
                    Garantia nos serviços executados
                  </li>
                  <li className="flex items-center text-wood-600 text-lg">
                    <span className="text-secondary mr-4 text-xl">✓</span>
                    Atendimento personalizado e resposta rápida
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
