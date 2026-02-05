import { useState, useEffect } from "react";

interface ReadinessState {
  isCompleted: boolean;
  score: number | null;
  level: string | null;
}

export const useReadinessTest = () => {
  const [readinessState, setReadinessState] = useState<ReadinessState>({
    isCompleted: false,
    score: null,
    level: null,
  });

  useEffect(() => {
    const completed = localStorage.getItem("readinessCompleted");
    const score = localStorage.getItem("readinessScore");
    const level = localStorage.getItem("readinessLevel");
    
    if (completed === "true" && score) {
      setReadinessState({
        isCompleted: true,
        score: parseInt(score, 10),
        level: level,
      });
    }
  }, []);

  const completeTest = (score: number, level: string) => {
    localStorage.setItem("readinessCompleted", "true");
    localStorage.setItem("readinessScore", score.toString());
    localStorage.setItem("readinessLevel", level);
    setReadinessState({
      isCompleted: true,
      score,
      level,
    });
  };

  const resetTest = () => {
    localStorage.removeItem("readinessCompleted");
    localStorage.removeItem("readinessScore");
    localStorage.removeItem("readinessLevel");
    setReadinessState({
      isCompleted: false,
      score: null,
      level: null,
    });
  };

  return { ...readinessState, completeTest, resetTest };
};
