import Header from "@/components/Header";

const materiais = [
  { nome: "Guia Rápido: O que é LinkedIn?", url: "/docs/pocket_guide_linkedin.pdf" },
  { nome: "Modelos de Resumo e Título", url: "/docs/modelos_resumo_titulo.pdf" },
  { nome: "Checklist de Perfil Otimizado", url: "/docs/checklist_perfil_otimizado.pdf" },
  { nome: "Guia: Como Buscar Vagas no LinkedIn", url: "/docs/guia_busca_vagas.pdf" },
  { nome: "Templates de Email para Recrutadores", url: "/docs/templates_email.pdf" },
  { nome: "Guia de IA Generativa para LinkedIn", url: "/docs/guia_ia_linkedin.pdf" },
  { nome: "Guia de Soft Skills do Futuro", url: "/docs/guia_soft_skills.pdf" },
];

const Materiais = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />
      <main className="flex-grow container py-10 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-indigo mb-8 text-center">Materiais & Ferramentas Rápidas</h1>
<p className="text-center text-blue-700 mb-4">Acesse exemplos, templates, checklists e guias práticos para baixar e usar agora!</p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-8 text-yellow-800 text-center">
          <b>Dica:</b> Baixe os materiais e use como referência sempre que precisar turbinar seu perfil!
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {materiais.map((mat, idx) => (
            <a key={idx} href={mat.url} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-lg p-6 block hover:bg-blue-50 transition border-l-4 border-blue-400 mb-2">
              <span className="font-semibold text-brand-indigo text-lg">{mat.nome}</span>
              <span className="block text-gray-500 text-sm mt-1">Clique para baixar ou visualizar</span>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Materiais;
