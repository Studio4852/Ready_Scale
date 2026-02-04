import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, Lock, ChevronRight } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";

const lockedExams = [
  { id: 2, title: "Architecture Lead Exam", requirement: "Requires Readiness Stamp" },
  { id: 3, title: "Security Protocol III", requirement: "Target Score 92%" },
];

const Assessments = () => {
  return (
    <DashboardLayout>
      <div className="max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-start justify-between"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight mb-2">
              Assessment
              <br />
              Control
            </h1>
            <p className="text-muted-foreground max-w-md">
              Verify your readiness through rigorous technical evaluations.
              Passing earns you the official protocol stamp.
            </p>
          </div>

          {/* Score badges */}
          <div className="hidden md:flex gap-3">
            <div className="glass-card px-5 py-3 text-center">
              <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-1">
                Best Score
              </span>
              <span className="text-2xl font-bold text-foreground">78%</span>
            </div>
            <div className="glass-card px-5 py-3 text-center">
              <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-1">
                Attempts
              </span>
              <span className="text-2xl font-bold text-foreground">2</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Exam Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Dashed border effect */}
              <div className="absolute inset-4 border-2 border-dashed border-border rounded-xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="icon-box bg-foreground">
                    <ShieldCheck className="w-6 h-6 text-background" />
                  </div>
                  <span className="badge-pill">Active Protocol</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide mb-3">
                  Readiness Exam
                </h2>
                <p className="text-muted-foreground mb-6 max-w-lg">
                  The ultimate verification step. Passing this exam with 85% or
                  higher unlocks direct access to employer pipelines.
                </p>

                <div className="flex items-center gap-6 mb-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>10 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>85% Target</span>
                  </div>
                </div>

                <Button className="w-full py-6 text-base uppercase tracking-wider gap-2">
                  Initiate Attempt
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Locked Exams */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {lockedExams.map((exam) => (
              <div
                key={exam.id}
                className="glass-card p-5 flex items-center gap-4 opacity-50"
              >
                <div className="icon-box bg-muted">
                  <Lock className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground uppercase tracking-wide text-sm">
                    {exam.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Locked: {exam.requirement}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Assessments;
