import Header from "@/components/Header";

const perguntas = [
  {
    pergunta: "Preciso ter experiência para participar?",
    resposta: "Não! O curso é feito para quem está começando agora e quer aprender do zero."
  },
  {
    pergunta: "Vou ganhar certificado?",
    resposta: "Sim! Ao concluir todas as etapas, você recebe um certificado digital para turbinar seu currículo e perfil."
  },
  {
    pergunta: "Como tiro dúvidas durante o curso?",
    resposta: "Você pode usar nosso grupo exclusivo ou enviar e-mail para os instrutores."
  },
  {
    pergunta: "O curso é gratuito?",
    resposta: "Sim, 100% gratuito para jovens aprendizes!"
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />
      <main className="flex-grow container py-10 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-indigo mb-8 text-center">Perguntas Frequentes (FAQ)</h1>
<p className="text-center text-blue-700 mb-6">Tire suas dúvidas de um jeito simples, rápido e direto!</p>
        <div className="max-w-2xl mx-auto space-y-6">
          {perguntas.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-400">
              <h2 className="font-semibold text-brand-indigo mb-2 flex items-center"><span className="mr-2">❓</span>{item.pergunta}</h2>
              <p className="text-gray-700 ml-6">{item.resposta}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FAQ;
