import { motion } from "framer-motion";
import { 
  Download, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Award,
  Calendar,
  FileText,
  BarChart3
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const monthlyData = [
  { month: "Jan", users: 120, completions: 85 },
  { month: "Feb", users: 145, completions: 102 },
  { month: "Mar", users: 168, completions: 128 },
  { month: "Apr", users: 192, completions: 156 },
  { month: "May", users: 215, completions: 178 },
  { month: "Jun", users: 248, completions: 205 },
];

const courseData = [
  { name: "Frontend", value: 35 },
  { name: "Backend", value: 28 },
  { name: "DevOps", value: 22 },
  { name: "Security", value: 15 },
];

const COLORS = ["hsl(0 0% 70%)", "hsl(0 0% 55%)", "hsl(0 0% 40%)", "hsl(0 0% 30%)"];

const recentReports = [
  { id: 1, name: "Monthly User Activity", date: "Feb 1, 2026", type: "PDF" },
  { id: 2, name: "Course Completion Rates", date: "Jan 28, 2026", type: "Excel" },
  { id: 3, name: "Client Engagement Summary", date: "Jan 25, 2026", type: "PDF" },
  { id: 4, name: "Revenue by Client", date: "Jan 20, 2026", type: "Excel" },
];

const Reports = () => {
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
              Reports
            </h1>
            <p className="text-muted-foreground">
              Analytics and insights across the platform.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Select defaultValue="30days">
              <SelectTrigger className="w-40 bg-muted/30">
                <SelectValue placeholder="Time Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 Days</SelectItem>
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="90days">Last 90 Days</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export All
            </Button>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <Card className="glass-card p-4">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-foreground" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Total Users</span>
            </div>
            <p className="text-3xl font-bold text-foreground">1,248</p>
            <p className="text-xs text-green-400 flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" />
              +12% this month
            </p>
          </Card>
          <Card className="glass-card p-4">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 text-foreground" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Courses</span>
            </div>
            <p className="text-3xl font-bold text-foreground">86</p>
            <p className="text-xs text-green-400 flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" />
              +5 new this month
            </p>
          </Card>
          <Card className="glass-card p-4">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-5 h-5 text-foreground" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Badges Earned</span>
            </div>
            <p className="text-3xl font-bold text-foreground">3,420</p>
            <p className="text-xs text-green-400 flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" />
              +156 this week
            </p>
          </Card>
          <Card className="glass-card p-4">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-5 h-5 text-foreground" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Avg Score</span>
            </div>
            <p className="text-3xl font-bold text-foreground">78%</p>
            <p className="text-xs text-green-400 flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" />
              +3% improvement
            </p>
          </Card>
        </motion.div>

        {/* Charts Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
        >
          {/* User Growth Chart */}
          <div className="lg:col-span-2 glass-card p-6">
            <h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-6">
              User Growth & Completions
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(0 0% 55%)", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "hsl(0 0% 55%)", fontSize: 12 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="hsl(0 0% 70%)"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="completions"
                    stroke="hsl(0 0% 45%)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[hsl(0_0%_70%)]" />
                <span className="text-xs text-muted-foreground">Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[hsl(0_0%_45%)]" />
                <span className="text-xs text-muted-foreground">Completions</span>
              </div>
            </div>
          </div>

          {/* Course Distribution */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-6">
              Course Distribution
            </h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={courseData}
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {courseData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {courseData.map((item, index) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {item.name} ({item.value}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recent Reports */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
              Recent Reports
            </h3>
            <Button variant="outline" size="sm" className="uppercase tracking-wider text-xs">
              View All
            </Button>
          </div>

          <div className="space-y-3">
            {recentReports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <FileText className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{report.name}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {report.date}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground uppercase">{report.type}</span>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
