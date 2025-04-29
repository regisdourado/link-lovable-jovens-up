import Header from "@/components/Header";

const Aula3 = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
    <Header />
    <main className="flex-grow container py-10 px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-brand-indigo mb-8 text-center">Aula 3: Networking, Conteúdo e Oportunidades</h1>
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-brand-indigo">Networking e Busca de Vagas</h2>
        <p className="mb-4 text-gray-700">Aprenda a fazer conexões estratégicas, se comunicar com profissionais e encontrar vagas perfeitas para você.</p>
        <h3 className="text-lg font-semibold mb-2">Dicas para Networking:</h3>
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>Adicione colegas, professores e profissionais da sua área</li>
          <li>Mande mensagens educadas e personalizadas</li>
          <li>Participe de grupos e interaja em postagens</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Como buscar vagas:</h3>
        <ol className="list-decimal ml-6 mb-4 text-gray-700">
          <li>Use filtros de busca por área, localidade e tipo de vaga</li>
          <li>Siga empresas que você admira</li>
          <li>Ative alertas de vagas para ser avisado em tempo real</li>
        </ol>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-4 text-blue-800">
          <b>Dica:</b> Compartilhe conteúdos relevantes e mostre interesse genuíno pelo mercado!
        </div>
        <a href="/docs/guia_busca_vagas.pdf" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-white bg-brand-indigo px-4 py-2 rounded hover:bg-brand-indigo/80 font-semibold shadow">Guia: Como Buscar Vagas no LinkedIn</a>
      </div>
    </main>
  </div>
);

export default Aula3;
