import { motion } from "framer-motion";
import { FolderKanban, Lock, Users } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Enterprise E-commerce Platform",
    description: "Build a full-stack marketplace with real-time inventory management.",
    slotsLeft: 4,
    techLevel: "Level 4 Tech Stack",
    targetScore: 85,
    locked: true,
  },
  {
    id: 2,
    title: "Distributed Analytics Engine",
    description: "Process millions of events per second using stream processing.",
    slotsLeft: 4,
    techLevel: "Level 4 Tech Stack",
    targetScore: 90,
    locked: true,
  },
];

const Projects = () => {
  return (
    <DashboardLayout>
      <div className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-foreground italic mb-2">
            Project Squads
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            High-stakes collaborative environments where you prove your skills on
            real-world systems. Projects unlock automatically based on your{" "}
            <span className="text-foreground font-medium">Readiness Score</span>.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {projects.map((project) => (
            <div key={project.id} className="glass-card p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="icon-box bg-muted">
                  <FolderKanban className="w-6 h-6 text-muted-foreground" />
                </div>
                <span className="badge-pill text-xs">
                  <Lock className="w-3 h-3" />
                  Target: {project.targetScore}%
                </span>
              </div>

              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground/70 mb-6">
                {project.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>{project.slotsLeft} Slots Left</span>
                </div>
                <span>•</span>
                <span>{project.techLevel}</span>
              </div>

              <Button
                variant="outline"
                disabled
                className="w-full gap-2 opacity-50"
              >
                <Lock className="w-4 h-4" />
                Restricted Access
              </Button>
            </div>
          ))}
        </motion.div>

        {/* Senior Level Proposals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-10 text-center"
        >
          <h2 className="text-2xl font-bold text-foreground italic mb-2">
            Senior Level Proposals
          </h2>
          <p className="text-muted-foreground mb-6">
            Reach a Readiness Score of{" "}
            <span className="text-foreground font-semibold">95%+</span> to unlock
            the ability to lead and propose your own community-driven projects.
          </p>
          <Button variant="outline" className="uppercase tracking-wider">
            View Proposal Guidelines
          </Button>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Projects;
