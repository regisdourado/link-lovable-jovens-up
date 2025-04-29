
import Header from "@/components/Header";
import ModuleCard from "@/components/ModuleCard";
import { moduleData, getModuleProgress } from "@/data/courseData";

const ModulesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container py-6 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Módulos do curso</h1>
          
          <p className="text-gray-600 mb-8">
            Nosso curso é dividido em módulos para facilitar seu aprendizado. Complete-os na ordem sugerida para maximizar seu progresso.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moduleData.map((module) => {
              const { completedLessons, totalLessons } = getModuleProgress(module.id);
              
              return (
                <ModuleCard
                  key={module.id}
                  id={module.id}
                  title={module.title}
                  description={module.description}
                  lessonsCount={totalLessons}
                  completedLessons={completedLessons}
                  timeEstimate={`${totalLessons * 4} min`}
                  path={`/modulos/${module.id}`}
                  isNew={module.isNew}
                />
              );
            })}
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t py-6">
        <div className="container text-center text-sm text-gray-500">
          <p>© 2025 LinkedIn para Jovens Aprendizes</p>
        </div>
      </footer>
    </div>
  );
};

export default ModulesPage;
