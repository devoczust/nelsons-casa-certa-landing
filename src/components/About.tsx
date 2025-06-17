
const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Sobre Nelson Oczust
            </h2>
            <p className="text-lg text-gray-600">
              Profissional experiente em serviços de manutenção e pequenas reformas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center mb-6 lg:mb-0">
                <span className="text-gray-500 text-lg">Foto do Nelson</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Experiência e Confiança
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Com mais de <strong>35 anos de experiência</strong> em serviços de manutenção 
                  residencial, Nelson Oczust é referência em <strong>pequenas reformas</strong> e 
                  serviços de <strong>marido de aluguel</strong> em Curitiba e região metropolitana.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Formado em técnicas de construção civil e com cursos de especialização em 
                  elétrica e hidráulica residencial, oferece serviços com total segurança e qualidade.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary mb-2">+500</div>
                  <div className="text-gray-600 text-sm">Projetos Concluídos</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-secondary mb-2">98%</div>
                  <div className="text-gray-600 text-sm">Aprovação dos Clientes</div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Diferenciais:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Pontualidade e compromisso com prazos
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Orçamentos transparentes e sem surpresas
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Materiais de qualidade e ferramentas profissionais
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Garantia nos serviços executados
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
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
