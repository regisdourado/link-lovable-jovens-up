
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Trophy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ChallengeCardProps {
  title: string;
  description: string;
  action: string;
  badgeTitle?: string;
}

const ChallengeCard = ({
  title,
  description,
  action,
  badgeTitle
}: ChallengeCardProps) => {
  const [completed, setCompleted] = useState(false);
  
  const handleComplete = () => {
    setCompleted(true);
    if (badgeTitle) {
      toast.success(`Parabéns! Você conquistou o selo "${badgeTitle}"`, {
        description: "Continue aprendendo para ganhar mais conquistas!",
        action: {
          label: "Ver conquistas",
          onClick: () => console.log("Navegando para conquistas"),
        },
      });
    } else {
      toast.success("Desafio concluído com sucesso!", {
        description: "Continue assim! 🚀",
      });
    }
  };
  
  return (
    <Card className={`border-2 ${completed ? "border-green-300 bg-green-50/50" : "border-brand-purple/20"}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base font-semibold flex items-center gap-2">
            {completed ? (
              <CheckCircle size={18} className="text-green-500" />
            ) : (
              <Trophy size={18} className="text-brand-violet" />
            )}
            {title}
          </CardTitle>
        </div>
        <CardDescription className="text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pb-2">
        {badgeTitle && !completed && (
          <div className="bg-muted/50 rounded-md p-2 text-xs flex items-center gap-1.5">
            <Trophy size={14} className="text-brand-violet" />
            <span>Conquista: <span className="font-medium text-brand-violet">{badgeTitle}</span></span>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-2">
        <Button 
          onClick={handleComplete} 
          className="w-full"
          variant={completed ? "outline" : "default"}
          disabled={completed}
        >
          {completed ? "Concluído" : action}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ChallengeCard;
