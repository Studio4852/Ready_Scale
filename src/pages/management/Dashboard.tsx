import { motion } from "framer-motion";
import { Globe, TrendingUp, CheckCircle, Clock, Sparkles, LayoutGrid, List } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";

const activities = [
  { id: 1, title: "Next.js 15 Masterclass", creator: 104, status: "Awaiting Audit" },
  { id: 2, title: "Next.js 15 Masterclass", creator: 208, status: "Awaiting Audit" },
  { id: 3, title: "Next.js 15 Masterclass", creator: 312, status: "Awaiting Audit" },
];

const supportItems = [
  { id: 1, company: "TechHire Corp", issue: "API V2 Sync", priority: "high" },
  { id: 2, company: "Global Dev", issue: "License Seat Mod", priority: "low" },
];

const ManagementDashboard = () => {
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
              Platform Master
            </h1>
            <p className="text-muted-foreground">
              ReadyScale Infrastructure Control • Global Vendor Access
            </p>
          </div>
          <div className="glass-card px-4 py-3 flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs text-muted-foreground uppercase tracking-wide block">
                Protocol Status
              </span>
              <span className="text-sm font-medium status-active">
                Nominal Operation
              </span>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-current status-active flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
        >
          <StatCard icon={Globe} label="Global Clients" value="12" />
          <StatCard icon={TrendingUp} label="Platform Revenue" value="$1.2M" />
          <StatCard icon={CheckCircle} label="System Health" value="100%" />
          <StatCard icon={Clock} label="Pending Audits" value="24" />
        </motion.div>

        {/* Activity & Support Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* System Activity */}
          <div className="lg:col-span-2 glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
                Global System Activity
              </h3>
              <div className="flex gap-1">
                <button className="p-2 rounded bg-foreground text-background">
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button className="p-2 rounded text-muted-foreground hover:bg-muted/30">
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="icon-box bg-muted">
                      <LayoutGrid className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{activity.title}</p>
                      <p className="text-xs text-muted-foreground uppercase">
                        Submitted by Creator ID: {activity.creator} • {activity.status}
                      </p>
                    </div>
                  </div>
                  <Button variant="default" size="sm" className="uppercase text-xs tracking-wider">
                    Audit Now
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Support Pulse */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-foreground" />
              <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
                Support Pulse
              </h3>
            </div>

            <div className="space-y-3 mb-6">
              {supportItems.map((item) => (
                <div key={item.id} className="glass-card p-4 bg-muted/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        {item.company}
                      </p>
                      <p className="text-xs text-muted-foreground uppercase">
                        {item.issue}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded capitalize ${
                        item.priority === "high" ? "status-high" : "status-low"
                      }`}
                    >
                      {item.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full uppercase tracking-wider">
              Open Help Desk
            </Button>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default ManagementDashboard;
