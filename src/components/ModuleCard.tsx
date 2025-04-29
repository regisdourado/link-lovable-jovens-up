
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PlayCircle, Clock, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface ModuleCardProps {
  id: string;
  title: string;
  description: string;
  lessonsCount: number;
  completedLessons: number;
  timeEstimate: string;
  path: string;
  isNew?: boolean;
}

const ModuleCard = ({ 
  id,
  title, 
  description, 
  lessonsCount, 
  completedLessons, 
  timeEstimate,
  path,
  isNew = false
}: ModuleCardProps) => {
  const navigate = useNavigate();
  const progress = Math.round((completedLessons / lessonsCount) * 100);
  
  return (
    <Card className="h-full hover:shadow-md transition-shadow duration-200 flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          {isNew && (
            <Badge variant="default" className="bg-gradient-to-r from-brand-purple to-brand-blue text-xs">
              NOVO
            </Badge>
          )}
        </div>
        <CardDescription className="text-sm line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2 flex-grow">
        <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{timeEstimate}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>{completedLessons}/{lessonsCount} aulas</span>
          </div>
        </div>
        
        <Progress value={progress} className="h-1.5" />
      </CardContent>
      
      <CardFooter className="pt-2">
        <Button 
          onClick={() => navigate(path)} 
          className="w-full gap-2"
          variant={completedLessons === 0 ? "default" : 
                  completedLessons === lessonsCount ? "outline" : 
                  "secondary"}
        >
          {completedLessons === 0 ? (
            <>
              <PlayCircle size={16} />
              Começar
            </>
          ) : completedLessons === lessonsCount ? (
            <>
              <CheckCircle size={16} />
              Revisar
            </>
          ) : (
            <>
              <PlayCircle size={16} />
              Continuar
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ModuleCard;
