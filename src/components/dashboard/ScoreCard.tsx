import { Progress } from "@/components/ui/progress";

interface ScoreCardProps {
  score: number;
  target?: number;
  className?: string;
}

const ScoreCard = ({ score, target = 85, className }: ScoreCardProps) => {
  return (
    <div className={`glass-card p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-muted-foreground uppercase tracking-wider">
          Readiness Score
        </span>
        <span className="text-4xl font-bold text-foreground">{score}%</span>
      </div>
      <Progress value={score} className="h-2 mb-3" />
      <p className="text-xs text-muted-foreground uppercase tracking-wide">
        Reach {target}% for protocol issuance
      </p>
    </div>
  );
};

export default ScoreCard;
