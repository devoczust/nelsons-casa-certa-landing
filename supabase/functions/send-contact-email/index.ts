
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message }: ContactEmailRequest = await req.json();

    // Enviar email para gabriel.oczust@gmail.com usando o email de teste permitido
    const emailResponse = await resend.emails.send({
      from: "Marido de Aluguel Curitiba <devoczust@gmail.com>",
      to: ["gabriel.oczust@gmail.com"],
      subject: `Nova Solicitação de Orçamento - ${name}`,
      html: `
        <h2>Nova Solicitação de Orçamento Recebida</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Dados do Cliente:</h3>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Tipo de Serviço:</strong> ${service || 'Não especificado'}</p>
        </div>
        <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3>Descrição do Serviço:</h3>
          <p>${message}</p>
        </div>
        <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-radius: 8px;">
          <p><strong>Ação recomendada:</strong> Entre em contato com o cliente o mais breve possível pelo WhatsApp ou telefone.</p>
        </div>
      `,
    });

    // Enviar email de confirmação para o cliente usando o email de teste permitido
    // (apenas para teste - em produção você deve verificar um domínio)
    if (email === "devoczust@gmail.com") {
      await resend.emails.send({
        from: "Marido de Aluguel Curitiba <devoczust@gmail.com>",
        to: [email],
        subject: "Solicitação Recebida - Marido de Aluguel Curitiba",
        html: `
          <h2>Obrigado pelo seu contato, ${name}!</h2>
          <p>Recebemos sua solicitação de orçamento e entraremos em contato em breve.</p>
          <div style="background-color: #f0f8ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3>Resumo da sua solicitação:</h3>
            <p><strong>Tipo de Serviço:</strong> ${service || 'Não especificado'}</p>
            <p><strong>Descrição:</strong> ${message}</p>
          </div>
          <p>Nossa equipe analisará sua solicitação e retornará o contato rapidamente, geralmente em até 2 horas durante nosso horário de atendimento.</p>
          <p><strong>Horário de Atendimento:</strong> Segunda a Sexta das 7h às 18h</p>
          <p>Atenciosamente,<br>Equipe Marido de Aluguel Curitiba</p>
        `,
      });
    }

    console.log("Emails enviados com sucesso:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Erro ao enviar email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
