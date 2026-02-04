import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const questions = [
  {
    id: 1,
    question: "How familiar are you with Large Language Models (LLMs) like GPT and Claude?",
    options: [
      { label: "Never heard of them", score: 0 },
      { label: "Basic understanding", score: 25 },
      { label: "Use them regularly", score: 50 },
      { label: "Can build applications with them", score: 75 },
      { label: "Expert-level proficiency", score: 100 },
    ],
  },
  {
    id: 2,
    question: "Have you integrated AI APIs into production applications?",
    options: [
      { label: "No experience", score: 0 },
      { label: "Learning/experimenting", score: 25 },
      { label: "Built 1-2 projects", score: 50 },
      { label: "Multiple production apps", score: 75 },
      { label: "Architecting AI systems at scale", score: 100 },
    ],
  },
  {
    id: 3,
    question: "How would you rate your prompt engineering skills?",
    options: [
      { label: "Not familiar with the concept", score: 0 },
      { label: "Basic prompts only", score: 25 },
      { label: "Can write effective prompts", score: 50 },
      { label: "Advanced techniques (CoT, few-shot)", score: 75 },
      { label: "Expert at optimizing prompts", score: 100 },
    ],
  },
  {
    id: 4,
    question: "What's your experience with AI/ML frameworks and tools?",
    options: [
      { label: "None", score: 0 },
      { label: "Familiar with concepts", score: 25 },
      { label: "Used basic tools (Hugging Face, etc.)", score: 50 },
      { label: "Comfortable with multiple frameworks", score: 75 },
      { label: "Can train and deploy custom models", score: 100 },
    ],
  },
  {
    id: 5,
    question: "How do you stay updated with AI developments?",
    options: [
      { label: "I don't actively follow AI news", score: 0 },
      { label: "Occasional articles/videos", score: 25 },
      { label: "Regular newsletters/podcasts", score: 50 },
      { label: "Active in AI communities", score: 75 },
      { label: "Contributing to AI research/OSS", score: 100 },
    ],
  },
];

const getScoreLevel = (score: number) => {
  if (score >= 80) return { level: "Expert", color: "text-emerald-400", description: "You're AI-ready! Top employers are looking for talent like you." };
  if (score >= 60) return { level: "Advanced", color: "text-blue-400", description: "Strong foundation. A few targeted courses will get you to expert level." };
  if (score >= 40) return { level: "Intermediate", color: "text-amber-400", description: "Good progress! Our training paths can accelerate your growth." };
  if (score >= 20) return { level: "Beginner", color: "text-orange-400", description: "You're starting your AI journey. We have resources to help you advance." };
  return { level: "Newcomer", color: "text-red-400", description: "Welcome to AI! Our beginner courses are perfect for you." };
};

const ReadinessTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = (score: number) => {
    setAnswers((prev) => ({ ...prev, [question.id]: score }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const totalScore = Math.round(
    Object.values(answers).reduce((sum, score) => sum + score, 0) / questions.length
  );
  const scoreInfo = getScoreLevel(totalScore);

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Home</span>
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="question"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>{Math.round(progress)}% complete</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                {/* Question */}
                <div className="glass-card p-8 space-y-6">
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                    {question.question}
                  </h2>

                  <div className="space-y-3">
                    {question.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(option.score)}
                        className={`w-full p-4 text-left rounded-xl border transition-all duration-200 ${
                          answers[question.id] === option.score
                            ? "border-foreground bg-foreground/10"
                            : "border-border hover:border-muted-foreground/50 hover:bg-muted/30"
                        }`}
                      >
                        <span className="text-foreground">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                  <Button
                    variant="ghost"
                    onClick={handleBack}
                    disabled={currentQuestion === 0}
                    className="gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={answers[question.id] === undefined}
                    className="gap-2"
                  >
                    {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="glass-card p-10 text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted">
                    <CheckCircle2 className="w-10 h-10 text-foreground" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">
                      Your AI Readiness Score
                    </h2>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-6xl font-bold text-foreground">{totalScore}</span>
                      <span className="text-2xl text-muted-foreground">/100</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className={`text-xl font-semibold ${scoreInfo.color}`}>
                      {scoreInfo.level}
                    </span>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      {scoreInfo.description}
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" onClick={handleRestart} className="gap-2">
                      Retake Test
                    </Button>
                    <Button onClick={() => navigate("/")} className="gap-2">
                      <Zap className="w-4 h-4" />
                      Get Matched with Employers
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default ReadinessTest;
