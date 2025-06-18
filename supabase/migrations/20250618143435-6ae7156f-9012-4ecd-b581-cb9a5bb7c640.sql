
-- Criar tabela para armazenar as solicitações de contato
CREATE TABLE public.contact_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir que qualquer pessoa insira dados (formulário público)
CREATE POLICY "Anyone can insert contact requests" 
  ON public.contact_requests 
  FOR INSERT 
  WITH CHECK (true);

-- Criar política para visualização (apenas admins poderão ver)
-- Para agora, vamos permitir que qualquer pessoa autenticada veja
CREATE POLICY "Authenticated users can view contact requests" 
  ON public.contact_requests 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
