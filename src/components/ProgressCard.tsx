
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Clock } from "lucide-react";

interface ProgressCardProps {
  completedLessons: number;
  totalLessons: number;
  earnedBadges: number;
  totalBadges: number;
  timeSpent: string;
}

const ProgressCard = ({
  completedLessons,
  totalLessons,
  earnedBadges,
  totalBadges,
  timeSpent,
}: ProgressCardProps) => {
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);
  const badgesPercentage = Math.round((earnedBadges / totalBadges) * 100);

  return (
    <Card className="border-2 border-primary/10 bg-white">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Seu progresso</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Aulas completadas</span>
            <span className="font-medium">{completedLessons}/{totalLessons}</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Conquistas</span>
            <span className="font-medium">{earnedBadges}/{totalBadges}</span>
          </div>
          <Progress value={badgesPercentage} className="h-2" />
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock size={16} />
            <span>Tempo de estudo</span>
          </div>
          <span className="font-medium text-sm">{timeSpent}</span>
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Award size={16} />
            <span>Próxima conquista</span>
          </div>
          <span className="text-xs font-medium text-brand-purple">Perfil Campeão</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
