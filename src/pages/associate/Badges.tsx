import { motion } from "framer-motion";
import { Award } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const badges = [
  { id: 1, title: "Quick Learner", certifiedDate: "Nov 2023" },
  { id: 2, title: "Foundation Expert", certifiedDate: "Nov 2023" },
  { id: 3, title: "UI Specialist", certifiedDate: "Nov 2023" },
];

const Badges = () => {
  return (
    <DashboardLayout>
      <div className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight">
            Recognition Vault
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {badges.map((badge, idx) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + idx * 0.1 }}
              className="glass-card p-8 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center mb-4">
                <Award className="w-10 h-10 text-background" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {badge.title}
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                Certified {badge.certifiedDate}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Badges;
