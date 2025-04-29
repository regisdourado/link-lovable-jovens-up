import Header from "@/components/Header";

const Aula2 = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
    <Header />
    <main className="flex-grow container py-10 px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-brand-indigo mb-8 text-center">Aula 2: Perfil Campeão</h1>
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-brand-indigo">Título e resumo que chamam atenção</h2>
        <div className="text-sm text-gray-500 mb-2">Duração: 5 min <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded bg-blue-100 text-blue-800">🏆 Conquista: Perfil Campeão</span></div>
        <h3 className="text-lg font-semibold mt-4 mb-2">Seu Título: O Chamariz do Perfil!</h3>
        <p className="mb-4">Seu título é uma das primeiras coisas que as pessoas veem – use-o estrategicamente! ✨</p>
        <h4 className="font-semibold mb-2">Exemplos de bons títulos:</h4>
        <ul className="list-disc ml-6 mb-4">
          <li>Estudante de Administração | Jovem Aprendiz em Logística | Interessado em Gestão de Projetos</li>
          <li>Estudante de TI | Conhecimentos em Python e HTML | Em busca de primeiro estágio em Desenvolvimento</li>
          <li>Jovem Aprendiz em Atendimento ao Cliente | Comunicativo e Organizado | Futuro profissional de Marketing</li>
        </ul>
        <h4 className="font-semibold mb-2">Seu resumo deve contar sua história:</h4>
        <ol className="list-decimal ml-6 mb-4">
          <li><b>Quem você é</b>: Sua formação e momento atual</li>
          <li><b>O que você sabe fazer</b>: Habilidades e conhecimentos</li>
          <li><b>O que você busca</b>: Objetivos claros</li>
          <li><b>Como te contactar</b>: Email profissional</li>
        </ol>
        <h4 className="font-semibold mb-2">Exemplo de resumo:</h4>
        <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-700 mb-4">
          “Estudante de Administração no 2º semestre, atualmente Jovem Aprendiz na empresa XYZ onde aprendo sobre processos administrativos.<br/>
          Possuo habilidades em organização, Excel básico e comunicação. Sou dedicado, aprendo rápido e busco crescimento profissional.<br/>
          Busco oportunidades em Administração ou áreas correlatas onde possa desenvolver minha carreira.<br/>
          Contato: seuemail@gmail.com”
        </blockquote>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-2 text-yellow-800">
          <b>Lembre-se:</b> Seja autêntico e direto! Ninguém gosta de ler textos enormes.
        </div>
        <a href="/docs/modelos_resumo_titulo.pdf" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-white bg-brand-indigo px-4 py-2 rounded hover:bg-brand-indigo/80 font-semibold shadow">Modelos de Resumo e Título</a>
      </div>
    </main>
  </div>
);

export default Aula2;
