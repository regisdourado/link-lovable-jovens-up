import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const slides = [
  { nome: "Aula 1: Introdução ao LinkedIn e Marca Pessoal", url: "/slides/aula1" },
  { nome: "Aula 2: Perfil Campeão", url: "/slides/aula2" },
  { nome: "Aula 3: Networking e Oportunidades", url: "/slides/aula3" },
  { nome: "Aula 4: Otimização Avançada e Preparação pro Mercado", url: "/slides/aula4" },
];

const Slides = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />
      <main className="flex-grow container py-10 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-indigo mb-8 text-center">Slides das Aulas</h1>
        <p className="text-center text-blue-700 mb-6">Acesse os slides de cada aula e revise o conteúdo sempre que quiser!</p>
        <div className="grid md:grid-cols-2 gap-8">
          {slides.map((slide, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between border-l-4 border-blue-400 mb-2">
              <div>
                <h2 className="text-2xl font-bold text-brand-indigo mb-2">{slide.titulo}</h2>
                <p className="mb-2 text-gray-700">{slide.desc}</p>
              </div>
              <Button className="bg-gradient-to-r from-brand-indigo to-blue-500 text-white mt-4 font-semibold shadow-lg hover:scale-105 transition-transform" onClick={() => window.location.href = slide.link}>
                📑 Acessar Slide
              </Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Slides;
