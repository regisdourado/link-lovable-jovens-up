
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ModuleCard from "@/components/ModuleCard";
import Header from "@/components/Header";
import ProgressCard from "@/components/ProgressCard";
import { moduleData, getTotalProgress } from "@/data/courseData";
import { Award, PlayCircle } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const { completedLessons, totalLessons, earnedBadges, totalBadges } = getTotalProgress();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container py-6 px-4 md:px-6">
        {/* Hero Section */}
        <section className="mb-10">
          <div className="rounded-lg p-6 md:p-8 bg-gradient-to-r from-brand-purple to-brand-blue text-white">
            <div className="max-w-xl mx-auto">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                LinkedIn para Jovens Aprendizes
              </h1>
              <p className="text-white/90 mb-6">
                Aprenda a usar o LinkedIn de forma estratégica para destacar seu perfil, fazer networking e conquistar oportunidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="bg-white text-brand-indigo hover:bg-white/90" 
                  size="lg"
                  onClick={() => navigate('/modulos')}
                >
                  <PlayCircle size={18} className="mr-2" />
                  Começar a aprender
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/20" 
                  size="lg"
                  onClick={() => navigate('/conquistas')}
                >
                  <Award size={18} className="mr-2" />
                  Ver conquistas
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Progress and Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Progress */}
          <div className="md:col-span-1">
            <ProgressCard 
              completedLessons={completedLessons}
              totalLessons={totalLessons}
              earnedBadges={earnedBadges}
              totalBadges={totalBadges}
              timeSpent="1h 23min"
            />
            
            <div className="mt-6 p-4 bg-white rounded-lg border">
              <h3 className="font-semibold mb-2">Próximos passos</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="min-w-5 h-5 rounded-full bg-brand-purple text-white flex items-center justify-center text-xs">
                    1
                  </div>
                  <span className="text-sm">Complete seu perfil no LinkedIn</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-5 h-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">
                    2
                  </div>
                  <span className="text-sm">Faça 5 conexões estratégicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-5 h-5 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-xs">
                    3
                  </div>
                  <span className="text-sm">Crie seu primeiro post</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right Column - Modules */}
          <div className="md:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Módulos do curso</h2>
              <Button variant="ghost" onClick={() => navigate('/modulos')}>Ver todos</Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {moduleData.slice(0, 4).map((module) => {
                const { completedLessons, totalLessons } = { 
                  completedLessons: module.lessons.filter(l => l.completed).length,
                  totalLessons: module.lessons.length
                };
                
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
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t py-6">
        <div className="container text-center text-sm text-gray-500">
          <p>© 2025 LinkedIn para Jovens Aprendizes</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
