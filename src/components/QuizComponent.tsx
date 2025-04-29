
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizComponentProps {
  question: QuizQuestion;
  onComplete: (correct: boolean) => void;
}

const QuizComponent = ({ question, onComplete }: QuizComponentProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const isCorrect = selectedOption === question.correctAnswer;
  
  const handleSubmit = () => {
    if (selectedOption === null) return;
    setHasSubmitted(true);
    
    // Call the onComplete callback after the user sees the result
    setTimeout(() => {
      onComplete(isCorrect);
    }, 1000);
  };
  
  return (
    <Card className="w-full border-2 border-brand-purple/10">
      <CardHeader>
        <CardTitle className="text-lg">Desafio rápido</CardTitle>
        <CardDescription>{question.question}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <RadioGroup 
          value={selectedOption?.toString()} 
          onValueChange={(value) => !hasSubmitted && setSelectedOption(parseInt(value))}
          className="space-y-3"
        >
          {question.options.map((option, index) => (
            <div 
              key={index} 
              className={`flex items-center space-x-2 rounded-md border p-3 transition-colors ${
                hasSubmitted && index === question.correctAnswer
                  ? "border-green-500 bg-green-50"
                  : hasSubmitted && index === selectedOption
                    ? isCorrect 
                      ? "border-green-500 bg-green-50"
                      : "border-red-500 bg-red-50"
                    : "hover:bg-muted/50"
              }`}
            >
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <Label 
                htmlFor={`option-${index}`}
                className="flex-grow cursor-pointer"
              >
                {option}
              </Label>
              
              {hasSubmitted && index === question.correctAnswer && (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
              
              {hasSubmitted && index === selectedOption && !isCorrect && (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
            </div>
          ))}
        </RadioGroup>
        
        {hasSubmitted && (
          <div className={`mt-4 p-3 rounded-md ${
            isCorrect ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
          }`}>
            <p className="text-sm">
              {isCorrect ? "✓ Correto!" : "✗ Não foi dessa vez!"}
            </p>
            <p className="text-sm mt-1">{question.explanation}</p>
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        {!hasSubmitted ? (
          <Button 
            onClick={handleSubmit} 
            disabled={selectedOption === null}
            className="w-full"
          >
            Verificar resposta
          </Button>
        ) : (
          <Button 
            onClick={() => onComplete(isCorrect)}
            variant="outline"
            className="w-full"
          >
            <span>Continuar</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuizComponent;
