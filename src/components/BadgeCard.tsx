
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";

interface BadgeCardProps {
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress?: number;
}

const BadgeCard = ({
  title,
  description,
  icon,
  unlocked,
  progress = 0
}: BadgeCardProps) => {
  return (
    <Card className={`text-center transition-all ${unlocked ? 'border-brand-purple bg-white' : 'border-gray-200 bg-gray-50'}`}>
      <CardHeader className="pb-2 pt-6 space-y-0">
        <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-2 ${
          unlocked 
            ? 'bg-gradient-to-r from-brand-indigo to-brand-violet text-white animate-pulse-scale' 
            : 'bg-gray-200 text-gray-400'
        }`}>
          <div className="text-2xl">{icon}</div>
        </div>
        <h3 className={`font-semibold ${unlocked ? 'text-brand-indigo' : 'text-gray-500'}`}>{title}</h3>
      </CardHeader>
      
      <CardContent className="pb-4">
        <CardDescription className="text-xs">
          {description}
        </CardDescription>
      </CardContent>
      
      {!unlocked && progress > 0 && (
        <CardFooter className="pt-0 pb-4">
          <div className="w-full">
            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-brand-indigo to-brand-violet"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">{progress}% completo</p>
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default BadgeCard;
