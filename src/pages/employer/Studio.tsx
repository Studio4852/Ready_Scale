import { motion } from "framer-motion";
import DashboardLayout from "@/components/layout/DashboardLayout";

const Studio = () => {
  return (
    <DashboardLayout>
      <div className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight italic">
            Training Studio
          </h1>
          <p className="text-muted-foreground">
            Create and manage custom training paths for your team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-12 text-center"
        >
          <p className="text-muted-foreground">
            Studio features coming soon. Build custom learning modules for your
            organization.
          </p>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Studio;
