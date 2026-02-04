import { motion } from "framer-motion";
import { Download, Users, TrendingUp, CheckCircle, Settings2, Sparkles } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

const chartData = [
  { name: "Ready for Hire", value: 12 },
  { name: "In Training", value: 45 },
  { name: "Near Ready", value: 32 },
  { name: "Waitlist", value: 8 },
];

const EmployerPipeline = () => {
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

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
        >
          <StatCard
            icon={Users}
            label="Talent Pool"
            value="112"
            sublabel="+8 This Month"
          />
          <StatCard
            icon={TrendingUp}
            label="Company Ready"
            value="82%"
            sublabel="Benchmark Met"
          />
          <StatCard
            icon={CheckCircle}
            label="Hiring Quota"
            value="24/50"
            sublabel="Active Hiring"
          />
          <StatCard
            icon={Settings2}
            label="Studio Assets"
            value="14"
            sublabel="Manage Courses"
          />
        </motion.div>

        {/* Charts Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Readiness Metrics Chart */}
          <div className="lg:col-span-2 glass-card p-6">
            <h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-6">
              Readiness Metrics
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} barCategoryGap="20%">
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(0 0% 55%)", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(0 0% 55%)", fontSize: 12 }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {chartData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === 1 ? "hsl(0 0% 70%)" : "hsl(0 0% 40%)"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Hiring Intel */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-foreground" />
              <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
                Hiring Intel
              </h3>
            </div>

            <div className="glass-card p-4 mb-6 bg-muted/30">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                Smart Suggestion
              </p>
              <p className="text-sm text-foreground italic leading-relaxed">
                "Focus your next 3 hires on <strong>Sarah Chen's</strong> squad.
                Their DevOps readiness just hit the 95th percentile."
              </p>
            </div>

            <Button variant="outline" className="w-full uppercase tracking-wider">
              Analyze Full Pipeline
            </Button>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default EmployerPipeline;
