import Header from "@/components/Header";

const Aula1 = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
    <Header />
    <main className="flex-grow container py-10 px-4 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-brand-indigo mb-8 text-center">Aula 1: Introdução ao LinkedIn e Marca Pessoal</h1>
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-brand-indigo">O que é LinkedIn?</h2>
        <p className="mb-4 text-gray-700">Descubra o que é o LinkedIn, como funciona e por que é tão importante para sua carreira. Aprenda a criar sua marca pessoal e veja perfis que bombam na plataforma.</p>
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>Rede social profissional nº 1 do mundo</li>
          <li>Conecte-se com empresas, recrutadores e profissionais</li>
          <li>Mostre suas conquistas, cursos e experiências</li>
        </ul>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-4 text-blue-800">
          <b>Dica:</b> Um perfil no LinkedIn é seu cartão de visitas digital!
        </div>
        <a href="/docs/pocket_guide_linkedin.pdf" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-white bg-brand-indigo px-4 py-2 rounded hover:bg-brand-indigo/80 font-semibold shadow">Guia Rápido: O que é LinkedIn?</a>
      </div>
    </main>
  </div>
);

export default Aula1;
