import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon?: LucideIcon;
  label: string;
  value: string | number;
  sublabel?: string;
  className?: string;
  variant?: "default" | "outlined";
}

const StatCard = ({
  icon: Icon,
  label,
  value,
  sublabel,
  className,
  variant = "default",
}: StatCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-6 flex flex-col gap-4",
        variant === "outlined" && "bg-transparent",
        className
      )}
    >
      <div className="flex items-center justify-between">
        {Icon && (
          <Icon className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
        )}
        {sublabel && (
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            {sublabel}
          </span>
        )}
      </div>
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {label}
        </p>
        <p className="text-3xl font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
