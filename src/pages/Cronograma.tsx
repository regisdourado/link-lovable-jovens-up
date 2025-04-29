import Header from "@/components/Header";

const etapas = [
  { etapa: "Módulo 1", descricao: "LinkedIn & Marca Pessoal", data: "01/05" },
  { etapa: "Módulo 2", descricao: "Perfil Campeão", data: "05/05" },
  { etapa: "Módulo 3", descricao: "Networking e Oportunidades", data: "10/05" },
  { etapa: "Módulo 4", descricao: "Preparação para o Mercado", data: "15/05" },
];

const Cronograma = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
      <Header />
      <main className="flex-grow container py-10 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-indigo mb-8 text-center">Cronograma do Curso</h1>
<p className="text-center text-blue-700 mb-6">Fique por dentro das datas e etapas do seu desenvolvimento!</p>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-lg">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="py-3 px-4 text-left">Etapa</th>
                <th className="py-3 px-4 text-left">Descrição</th>
                <th className="py-3 px-4 text-left">Data</th>
              </tr>
            </thead>
            <tbody>
              {etapas.map((et, idx) => (
                <tr key={idx} className="border-t hover:bg-blue-50">
                  <td className="py-2 px-4 font-semibold text-brand-indigo">{et.etapa}</td>
                  <td className="py-2 px-4">{et.descricao}</td>
                  <td className="py-2 px-4 font-mono text-blue-700">{et.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Cronograma;
