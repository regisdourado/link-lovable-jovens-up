import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import QuizComponent from "@/components/QuizComponent";
import ChallengeCard from "@/components/ChallengeCard";
import { moduleData } from "@/data/courseData";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";

const LessonDetail = () => {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>();
  const navigate = useNavigate();
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const module = moduleData.find((m) => m.id === moduleId);
  const lesson = module?.lessons.find((l) => l.id === lessonId);
  
  if (!module || !lesson) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Lição não encontrada</h1>
          <Button onClick={() => navigate('/modulos')}>Voltar para módulos</Button>
        </div>
      </div>
    );
  }
  
  // Find next and previous lessons
  const currentLessonIndex = module.lessons.findIndex((l) => l.id === lessonId);
  const previousLesson = currentLessonIndex > 0 ? module.lessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < module.lessons.length - 1 ? module.lessons[currentLessonIndex + 1] : null;
  
  const handleComplete = () => {
    toast.success("Lição concluída!", {
      description: "Seu progresso foi salvo",
    });
    
    // If this is the last lesson in module, navigate back to module page
    if (!nextLesson) {
      setTimeout(() => {
        navigate(`/modulos/${moduleId}`);
      }, 1500);
    } else {
      // Otherwise navigate to next lesson
      setTimeout(() => {
        navigate(`/modulos/${moduleId}/${nextLesson.id}`);
      }, 1500);
    }
  };
  
  const handleQuizComplete = (correct: boolean) => {
    setQuizCompleted(true);
    if (correct) {
      toast.success("Resposta correta!", {
        description: "Continue assim!",
      });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container py-6 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between mb-6">
            <Button
              variant="ghost"
              onClick={() => navigate(`/modulos/${moduleId}`)}
            >
              <ChevronLeft size={16} className="mr-1" />
              Voltar para o módulo
            </Button>
            
            <div className="text-sm text-gray-500">
              Lição {currentLessonIndex + 1} de {module.lessons.length}
            </div>
          </div>
          
          <div className="bg-white rounded-lg border shadow-sm p-6 mb-8">
            <h1 className="text-2xl font-bold mb-2">{lesson.title}</h1>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span className="mr-4">Duração: {lesson.duration}</span>
              {lesson.hasBadge && (
                <span className="text-brand-purple flex items-center gap-1">
                  🏆 Conquista: {lesson.badgeTitle}
                </span>
              )}
            </div>
            
            <div className="prose prose-sm md:prose-base max-w-none">
              <ReactMarkdown>{lesson.content}</ReactMarkdown>
            </div>
          </div>
          
          {/* Quiz Component */}
          {lesson.quiz && !quizCompleted && (
            <div className="mb-8">
              <QuizComponent
                question={{
                  id: `quiz-${lesson.id}`,
                  question: lesson.quiz.question,
                  options: lesson.quiz.options,
                  correctAnswer: lesson.quiz.correctAnswer,
                  explanation: lesson.quiz.explanation,
                }}
                onComplete={handleQuizComplete}
              />
            </div>
          )}
          
          {/* Challenge Component */}
          {lesson.challenge && (
            <div className="mb-8">
              <ChallengeCard
                title={lesson.challenge.title}
                description={lesson.challenge.description}
                action={lesson.challenge.action}
                badgeTitle={lesson.challenge.badgeTitle}
              />
            </div>
          )}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {previousLesson ? (
              <Button
                variant="outline"
                onClick={() => navigate(`/modulos/${moduleId}/${previousLesson.id}`)}
              >
                <ChevronLeft size={16} className="mr-2" />
                Lição anterior
              </Button>
            ) : (
              <div></div>
            )}
            
            {nextLesson ? (
              <Button
                onClick={handleComplete}
              >
                Próxima lição
                <ChevronRight size={16} className="ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleComplete}
              >
                <CheckCircle size={16} className="mr-2" />
                Concluir módulo
              </Button>
            )}
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t py-6 mt-10">
        <div className="container text-center text-sm text-gray-500">
          <p>© 2025 LinkedIn para Jovens Aprendizes</p>
        </div>
      </footer>
    </div>
  );
};

export default LessonDetail;
