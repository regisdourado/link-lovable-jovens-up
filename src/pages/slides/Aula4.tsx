import Header from "@/components/Header";

const Aula4 = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
    <Header />
    <main className="flex-grow container py-10 px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-brand-indigo mb-8 text-center">Aula 4: Otimização Avançada e Mercado</h1>
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-brand-indigo">Destaque-se para recrutadores</h2>
        <p className="mb-4 text-gray-700">Aprenda técnicas avançadas para seu perfil aparecer nas buscas dos recrutadores, pedir recomendações e se preparar para entrevistas.</p>
        <h3 className="text-lg font-semibold mb-2">Dicas de otimização:</h3>
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>Peça recomendações para colegas e gestores</li>
          <li>Adicione certificados e cursos relevantes</li>
          <li>Mantenha seu perfil sempre atualizado</li>
          <li>Personalize sua URL do LinkedIn</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Prepare-se para entrevistas:</h3>
        <ol className="list-decimal ml-6 mb-4 text-gray-700">
          <li>Pesquise sobre a empresa antes da entrevista</li>
          <li>Treine respostas para perguntas comuns</li>
          <li>Mostre confiança e seja você mesmo</li>
        </ol>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-4 text-blue-800">
          <b>Dica:</b> Um perfil otimizado aumenta suas chances de ser encontrado por recrutadores!
        </div>
        <a href="/docs/checklist_perfil_otimizado.pdf" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-white bg-brand-indigo px-4 py-2 rounded hover:bg-brand-indigo/80 font-semibold shadow">Checklist de Perfil Otimizado</a>
      </div>
    </main>
  </div>
);

export default Aula4;
