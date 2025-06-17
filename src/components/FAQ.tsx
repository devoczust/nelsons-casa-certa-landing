
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
      answer: "O prazo varia conforme o tipo e complexidade do serviço. Pequenos reparos geralmente são concluídos no mesmo dia. Serviços maiores como instalações elétricas podem levar de 1 a 3 dias. Sempre informamos o prazo no orçamento."
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Esclareça suas dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border-0 shadow-md rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco! Estamos sempre prontos para esclarecer 
              qualquer questão sobre nossos serviços.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/5541988518580?text=Olá! Tenho algumas dúvidas sobre os serviços.', '_blank')}
                className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-lg font-medium"
              >
                WhatsApp
              </button>
              <button 
                onClick={() => window.open('tel:+5541988518580', '_self')}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium"
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
