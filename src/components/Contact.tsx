
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Clock, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio do formulário
    console.log('Form submitted:', formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });

    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5541988518580?text=Olá! Gostaria de solicitar um orçamento.', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+5541988518580', '_self');
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solicite seu orçamento gratuito e tire suas dúvidas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Fale Conosco
              </h3>
              <p className="text-gray-600 mb-8">
                Entre em contato através dos canais abaixo ou preencha o formulário. 
                Respondemos rapidamente e fornecemos orçamentos gratuitos!
              </p>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-secondary border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <MessageCircle className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                      <p className="text-gray-600">(41) 98851-8580</p>
                      <p className="text-sm text-gray-500">Resposta rápida garantida</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Telefone</h4>
                      <p className="text-gray-600">(41) 98851-8580</p>
                      <p className="text-sm text-gray-500">Atendimento personalizado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-50 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Horário de Atendimento</h4>
                      <p className="text-gray-600">Segunda a Sexta: 7h às 18h</p>
                      <p className="text-gray-600">Sábado: 8h às 16h</p>
                      <p className="text-sm text-gray-500">Domingo: Somente emergências</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-50 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Área de Atendimento</h4>
                      <p className="text-gray-600">Curitiba e Região Metropolitana</p>
                      <p className="text-sm text-gray-500">Deslocamento gratuito</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-secondary hover:bg-secondary/90 flex-1"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chamar no WhatsApp
              </Button>
              <Button 
                onClick={handleCallClick}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white flex-1"
                size="lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
            </div>
          </div>

          {/* Formulário de Contato */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Solicite seu Orçamento</CardTitle>
              <CardDescription>
                Preencha o formulário e retornaremos o contato rapidamente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(41) 98851-8580"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Serviço
                  </label>
                  <Input
                    id="service"
                    name="service"
                    type="text"
                    value={formData.service}
                    onChange={handleInputChange}
                    placeholder="Ex: Reparo elétrico, montagem de móveis..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição do Serviço *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Descreva detalhadamente o serviço que precisa..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Enviar Solicitação
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Campos obrigatórios. Seus dados estão seguros conosco.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
