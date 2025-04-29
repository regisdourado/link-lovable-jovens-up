import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

const HomeLinkedinJovem = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />
      <main className="flex-grow container py-10 px-4 md:px-8">
        {/* Hero */}
        <section className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-indigo mb-4">LinkedIn para Jovens Aprendizes</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Impulsione sua carreira! Aprenda a criar um perfil campeão, fazer networking e conquistar oportunidades no LinkedIn.
          </p>
          <Button className="bg-brand-indigo text-white px-8 py-3 text-lg" onClick={() => navigate("/aulas")}>Comece Agora</Button>
        </section>
        {/* Sobre o Curso */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-2">Sobre o Curso</h2>
              <p className="text-gray-700 mb-2">Curso prático e online para jovens de 16 a 21 anos. Aprenda a usar o LinkedIn para crescer profissionalmente, com linguagem simples e exemplos reais.</p>
              <p className="text-gray-700">Voltado para estudantes do ensino médio/técnico e jovens aprendizes que querem se destacar no mercado de trabalho.</p>
            </div>
            <div className="flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80" className="rounded-xl shadow-lg max-h-72" alt="Jovens aprendendo online" />
            </div>
          </div>
        </section>
        {/* Benefícios */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-indigo mb-6 text-center">Benefícios do Curso</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="font-semibold mb-2">100% Online</h3>
              <p>Acesse de onde quiser, no seu ritmo.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="font-semibold mb-2">Certificado Digital</h3>
              <p>Receba certificado ao concluir todas as etapas.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="font-semibold mb-2">Grupo Exclusivo</h3>
              <p>Tire dúvidas e faça networking com outros jovens.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="font-semibold mb-2">Conteúdo Atualizado</h3>
              <p>Tudo sobre LinkedIn, com dicas práticas e atuais.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="font-semibold mb-2">Aprenda na Prática</h3>
              <p>Atividades hands-on e exemplos reais pra você aplicar o conhecimento na hora.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="font-semibold mb-2">Suporte Contínuo</h3>
              <p>Acesso a um grupo exclusivo pra tirar dúvidas e trocar ideias com outras pessoas do curso.</p>
              <a href="https://chat.whatsapp.com/EorqXsk3htc0wKnBmmvZvA" target="_blank" className="inline-block mt-3 text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600">Entrar no Grupo</a>
            </div>
          </div>
        </section>
        {/* Conteúdo Programático */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-indigo mb-6 text-center">Conteúdo Programático</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold mb-2">Módulo 1: LinkedIn & Marca Pessoal</h3>
              <p>O que é LinkedIn? Como criar uma marca pessoal forte e se destacar.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold mb-2">Módulo 2: Perfil Campeão</h3>
              <p>Monte um perfil completo, com foto, resumo, experiências e conquistas.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold mb-2">Módulo 3: Networking e Oportunidades</h3>
              <p>Aprenda a se conectar, participar de grupos e buscar vagas certas para você.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold mb-2">Módulo 4: Preparação para o Mercado</h3>
              <p>Dicas de currículo, entrevistas e como usar o LinkedIn para crescer.</p>
            </div>
          </div>
        </section>
        {/* Como Funciona */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-brand-indigo mb-6 text-center">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="font-semibold mb-2">Aulas Curtas</h3>
              <p>Vídeos e materiais objetivos, direto ao ponto.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="font-semibold mb-2">Exercícios Práticos</h3>
              <p>Aprenda fazendo, com atividades para cada módulo.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="font-semibold mb-2">Suporte</h3>
              <p>Tire dúvidas pelo grupo exclusivo ou e-mail.</p>
            </div>
          </div>
        </section>
        {/* CTA */}
        <section className="text-center mt-12">
          <Button className="bg-brand-indigo text-white px-8 py-3 text-lg" onClick={() => navigate("/aulas")}>Ver todas as aulas</Button>
        </section>
      </main>
    </div>
  );
};

export default HomeLinkedinJovem;
