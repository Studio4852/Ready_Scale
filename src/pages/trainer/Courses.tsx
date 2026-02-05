import { motion } from "framer-motion";
import { BookOpen, Users, DollarSign, MoreVertical } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const courses = [
  {
    id: 1,
    title: "Cloud AI Fundamentals",
    students: 156,
    revenue: 7230,
    completion: 78,
    status: "Published",
  },
  {
    id: 2,
    title: "Prompt Engineering Masterclass",
    students: 89,
    revenue: 5220,
    completion: 65,
    status: "Published",
  },
  {
    id: 3,
    title: "Advanced LLM Integration",
    students: 0,
    revenue: 0,
    completion: 45,
    status: "Draft",
  },
];

const TrainerCourses = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight">
              My Courses
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage your course content and track performance
            </p>
          </div>
          <Button className="gap-2">
            <BookOpen className="w-4 h-4" />
            Create Course
          </Button>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="glass-card p-6 space-y-4"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{course.title}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      course.status === "Published"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {course.status}
                  </span>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Students
                  </span>
                  <span className="text-foreground font-medium">{course.students}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Revenue
                  </span>
                  <span className="text-foreground font-medium">${course.revenue.toLocaleString()}</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Avg. Completion</span>
                    <span>{course.completion}%</span>
                  </div>
                  <Progress value={course.completion} className="h-1.5" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default TrainerCourses;
