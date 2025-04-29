
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import LessonCard from "@/components/LessonCard";
import { moduleData } from "@/data/courseData";

const ModuleDetail = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  
  const module = moduleData.find((m) => m.id === moduleId);
  
  if (!module) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Módulo não encontrado</h1>
          <Button onClick={() => navigate('/modulos')}>Voltar para módulos</Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container py-6 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            className="mb-4"
            onClick={() => navigate('/modulos')}
          >
            <ChevronLeft size={16} className="mr-1" />
            Voltar para módulos
          </Button>
          
          <div className="bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-lg p-6 mb-8">
            <h1 className="text-2xl font-bold mb-2">{module.title}</h1>
            <p className="text-white/90">{module.description}</p>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Microlições do módulo</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {module.lessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  id={lesson.id}
                  title={lesson.title}
                  description={lesson.description}
                  duration={lesson.duration}
                  path={`/modulos/${module.id}/${lesson.id}`}
                  completed={!!lesson.completed}
                  locked={!!lesson.locked}
                  hasBadge={lesson.hasBadge}
                  badgeTitle={lesson.badgeTitle}
                />
              ))}
            </div>
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

export default ModuleDetail;
