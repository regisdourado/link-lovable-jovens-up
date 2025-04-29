import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const aulas = [
  {
    titulo: "Aula 1: Introdução ao LinkedIn e Marca Pessoal",
    objetivo: "Descobrir como o LinkedIn pode ser seu aliado desde o início da carreira.",
    atividades: [
      "Quiz interativo: Descubra seu estilo profissional!",
      "Desafio: Crie uma frase de apresentação sobre você."
    ],
    link: "/slides/aula1"
  },
  {
    titulo: "Aula 2: Perfil Campeão",
    objetivo: "Montar um perfil completo, com foto, resumo, experiências e conquistas.",
    atividades: [
      "Exemplo prático: Veja um perfil campeão.",
      "Checklist: O que não pode faltar no seu perfil."
    ],
    link: "/slides/aula2"
  },
  {
    titulo: "Aula 3: Networking e Oportunidades",
    objetivo: "Aprender a se conectar, participar de grupos e buscar vagas certas.",
    atividades: [
      "Simulação: Como abordar um recrutador.",
      "Mini-desafio: Encontre uma vaga interessante."
    ],
    link: "/slides/aula3"
  },
  {
    titulo: "Aula 4: Preparação para o Mercado",
    objetivo: "Dicas de currículo, entrevistas e como usar o LinkedIn para crescer.",
    atividades: [
      "Dica rápida: Como se preparar para entrevista.",
      "Exemplo: Currículo campeão."
    ],
    link: "/slides/aula4"
  }
];

const Aulas = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />
      <main className="flex-grow container py-10 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-indigo mb-8 text-center">Aulas</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {aulas.map((aula, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
  <div>
    <h2 className="text-2xl font-bold text-brand-indigo mb-2">{aula.titulo}</h2>
    <div className="mb-3"><span className="inline-block bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold mr-2">🎯 Objetivo</span> <span>{aula.objetivo}</span></div>
    <h3 className="text-lg font-semibold mb-1 text-gray-700">Atividades Práticas</h3>
    <ul className="list-disc ml-6 mb-4 text-gray-700">
      {aula.atividades.map((atv, i) => <li key={i} className="mb-1">{atv}</li>)}
    </ul>
  </div>
  <Button className="bg-brand-indigo text-white mt-4" onClick={() => window.location.href = aula.link}>
    Ver Slides
  </Button>
</div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Aulas;
