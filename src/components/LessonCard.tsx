
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, PlayCircle, CheckCircle, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface LessonCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  path: string;
  completed: boolean;
  locked: boolean;
  hasBadge?: boolean;
  badgeTitle?: string;
}

const LessonCard = ({
  id,
  title,
  description,
  duration,
  path,
  completed,
  locked,
  hasBadge = false,
  badgeTitle = ""
}: LessonCardProps) => {
  const navigate = useNavigate();
  
  return (
    <Card className={`overflow-hidden transition-all duration-200 ${
      locked ? "bg-gray-50 opacity-80" : 
      completed ? "border-green-200 bg-green-50/50" : "hover:shadow-md"
    }`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base font-semibold">
            {locked && <Lock size={14} className="inline mr-1 text-gray-400" />}
            {title}
          </CardTitle>
          {completed && (
            <CheckCircle size={18} className="text-green-500" />
          )}
          {hasBadge && !locked && (
            <Badge variant="outline" className="text-xs border-brand-purple text-brand-purple">
              🏆 {badgeTitle}
            </Badge>
          )}
        </div>
        <CardDescription className="text-xs line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Clock size={12} />
          <span>{duration}</span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          onClick={() => !locked && navigate(path)} 
          className="w-full gap-2 text-xs"
          variant={locked ? "outline" : completed ? "outline" : "default"}
          disabled={locked}
        >
          {locked ? (
            "Bloqueado"
          ) : completed ? (
            <>
              <CheckCircle size={14} />
              Completo
            </>
          ) : (
            <>
              <PlayCircle size={14} />
              Começar
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LessonCard;
