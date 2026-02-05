import { motion } from "framer-motion";
import { Zap, ShieldCheck, Award, Play } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ScoreCard from "@/components/dashboard/ScoreCard";
import StatCard from "@/components/dashboard/StatCard";

const AssociateDashboard = () => {
  return (
    <DashboardLayout>
      <div className="max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="badge-pill mb-4 inline-flex">
                <Zap className="w-3.5 h-3.5" />
                <span>Active Protocol: Cloud AI Engineering Path</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight">
                Status Room:
                <br />
                Alex Johnson
              </h1>
              <p className="text-muted-foreground mt-2">
                Verified as <span className="text-foreground">Cloud Engineering Path</span>.
                Earn the <span className="underline">Readiness Stamp</span> to activate employer matching.
              </p>
            </div>

            {/* Run Audit */}
            <div className="hidden md:flex flex-col items-center gap-2">
              <div className="w-28 h-28 rounded-full border-2 border-border flex items-center justify-center">
                <Award className="w-10 h-10 text-foreground" strokeWidth={1} />
              </div>
              <span className="text-xs text-muted-foreground tracking-widest uppercase">
                Run Audit
              </span>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          <ScoreCard score={78} className="md:col-span-1" />
          
          <div className="glass-card p-6 flex items-center gap-6">
            <div className="icon-box">
              <Award className="w-6 h-6 text-foreground" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Earned Badges
              </p>
              <p className="text-3xl font-bold text-foreground">2</p>
            </div>
          </div>

          <div className="glass-card p-6 flex items-center gap-6">
            <div className="icon-box">
              <Play className="w-6 h-6 text-foreground" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Legacy Modules
              </p>
              <p className="text-3xl font-bold text-foreground">2 / 3</p>
            </div>
          </div>
        </motion.div>

        {/* AI Mentor Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="icon-box">
              <ShieldCheck className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">
                AI Mentor Reasoning
              </h3>
              <p className="text-sm text-muted-foreground">Protocol Version: 3.1-PRO</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-muted/30 border border-border space-y-3">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Strength</div>
              <p className="text-sm text-foreground font-medium">Strong API integration skills</p>
              <p className="text-xs text-muted-foreground">Your projects show consistent use of RESTful patterns and error handling.</p>
            </div>
            <div className="p-4 rounded-xl bg-muted/30 border border-border space-y-3">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Focus Area</div>
              <p className="text-sm text-foreground font-medium">Prompt Engineering</p>
              <p className="text-xs text-muted-foreground">Complete the advanced prompting module to boost your readiness score.</p>
            </div>
            <div className="p-4 rounded-xl bg-muted/30 border border-border space-y-3">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Next Step</div>
              <p className="text-sm text-foreground font-medium">Complete Cloud AI Badge</p>
              <p className="text-xs text-muted-foreground">1 assessment remaining to unlock employer matching.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default AssociateDashboard;
