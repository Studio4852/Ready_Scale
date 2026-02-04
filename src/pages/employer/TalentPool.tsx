import { motion } from "framer-motion";
import { Search, Download } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const candidates = [
  { id: 1, name: "Sarah Chen", email: "sarah.c@dev.com", score: 92, verified: true },
  { id: 2, name: "Marcus Bell", email: "marcus.b@it.com", score: 84, verified: true },
];

const TalentPool = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight italic">
              Employer Console
            </h1>
            <p className="text-muted-foreground">
              Enterprise Talent Management & Custom Studio
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Pipeline Export
          </Button>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="flex gap-2 mb-6"
        >
          <Button variant="default" className="uppercase tracking-wider text-xs">
            Verified Candidates
          </Button>
          <Button variant="ghost" className="uppercase tracking-wider text-xs text-muted-foreground">
            Company Managers
          </Button>
        </motion.div>

        {/* Talent Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
              Available Talent
            </h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search skills..."
                className="pl-9 bg-muted/30 border-border w-48"
              />
            </div>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 text-xs text-muted-foreground uppercase tracking-wider mb-4 px-4">
            <span>Identity</span>
            <span>Score</span>
            <span className="text-right">Verification</span>
          </div>

          {/* Table Rows */}
          <div className="space-y-3">
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className="grid grid-cols-3 gap-4 items-center p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-muted text-foreground">
                      {candidate.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">{candidate.name}</p>
                    <p className="text-xs text-muted-foreground uppercase">
                      {candidate.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Progress value={candidate.score} className="h-2 flex-1" />
                  <span className="text-sm font-medium text-foreground">
                    {candidate.score}%
                  </span>
                </div>

                <div className="text-right">
                  {candidate.verified && (
                    <Badge variant="outline" className="uppercase text-xs tracking-wider">
                      Verified
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default TalentPool;
