
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o orçamento?",
      answer: "O orçamento é totalmente gratuito! Entre em contato via WhatsApp ou telefone, descreva o serviço necessário e agendar uma visita. Após avaliar o trabalho, fornecemos um orçamento detalhado sem compromisso."
    },
    {
      question: "Qual é o prazo para execução dos serviços?",
      answer: "O prazo varia conforme o tipo e complexidade do serviço. Pequenos reparos geralmente são concluídos no mesmo dia. Serviços maiores como instalações elé⁣tricas podem levar de 1 a 3 dias. Sempre informamos o prazo no orçamento."
    },
    {
      question: "Os materiais estão inclusos no preço?",
      answer: "Depende do serviço. Para pequenos reparos, geralmente incluímos materiais básicos. Para serviços maiores, fornecemos duas opções: com e sem material. Sempre usamos materiais de qualidade."
    },
    {
      question: "Vocês atendem aos finais de semana?",
      answer: "Atendemos aos domingos somente para emergências, mediante agendamento prévio. Durante a semana nosso horário é de segunda a sexta-feira das 7h às 18h."
    },
    {
      question: "Como é calculado o valor dos serviços?",
      answer: "O valor é calculado considerando o tipo de serviço, tempo de execução e materiais necessários. Trabalhamos com preços justos e competitivos, sempre transparentes e sem surpresas."
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer: "Aceitamos dinheiro, PIX, cartão de débito e crédito. Para serviços de maior valor, também oferecemos parcelamento no cartão de crédito."
    },
    {
      question: "Fazem serviços em condomínios?",
      answer: "Sim, atendemos residências em condomínios. Respeitamos todas as normas condominiais e horários estabelecidos. Sempre que necessário, nos cadastramos previamente na administração."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.4))]" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Perguntas <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Esclareça suas dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl px-8 hover:shadow-xl transition-shadow">
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-primary py-8 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-8 leading-relaxed text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl max-w-3xl mx-auto border border-white/50">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-8 text-xl leading-relaxed">
              Entre em contato conosco! Estamos sempre prontos para esclarecer 
              qualquer questão sobre nossos serviços.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/5541988518580?text=Olá! Tenho algumas dúvidas sobre os serviços.', '_blank')}
                className="bg-gradient-to-r from-secondary to-green-700 hover:from-green-700 hover:to-secondary text-white px-8 py-4 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                WhatsApp
              </button>
              <button 
                onClick={() => window.open('tel:+5541988518580', '_self')}
                className="bg-gradient-to-r from-primary to-blue-700 hover:from-blue-700 hover:to-primary text-white px-8 py-4 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Ligar Agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
