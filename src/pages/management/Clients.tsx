import { motion } from "framer-motion";
import { LayoutGrid, List, ExternalLink, CheckCircle } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const clients = [
  {
    id: 1,
    name: "Global Tech Corp",
    status: "Active",
    activeSeats: 45,
    avgScore: 88,
    image: "🏢",
  },
  {
    id: 2,
    name: "Innovate Soft",
    status: "Active",
    activeSeats: 12,
    avgScore: 72,
    image: "🌐",
  },
  {
    id: 3,
    name: "Secure Systems",
    status: "Pending",
    activeSeats: 8,
    avgScore: 95,
    image: "🔒",
  },
];

const ManagementClients = () => {
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

        {/* Title & Controls */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="flex items-center justify-between mb-6"
        >
          <div>
            <h2 className="text-xl font-bold text-foreground uppercase tracking-wide">
              Client Portfolio
            </h2>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              Enterprise Engagement Monitoring
            </p>
          </div>
          <div className="flex gap-1">
            <button className="p-2 rounded bg-foreground text-background">
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button className="p-2 rounded text-muted-foreground hover:bg-muted/30">
              <List className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Client Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {clients.map((client, idx) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center text-2xl">
                  {client.image}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{client.name}</h3>
                  <Badge
                    variant="outline"
                    className={`text-xs uppercase tracking-wider ${
                      client.status === "Active"
                        ? "status-active border-current"
                        : "status-pending border-current"
                    }`}
                  >
                    {client.status}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="glass-card p-3 bg-muted/20 text-center">
                  <p className="text-xs text-muted-foreground uppercase mb-1">
                    Active Seats
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {client.activeSeats}
                  </p>
                </div>
                <div className="glass-card p-3 bg-muted/20 text-center">
                  <p className="text-xs text-muted-foreground uppercase mb-1">
                    Avg Score
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {client.avgScore}%
                  </p>
                </div>
              </div>

              <Button variant="default" className="w-full gap-2 uppercase tracking-wider">
                Manage Console
                <ExternalLink className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default ManagementClients;
