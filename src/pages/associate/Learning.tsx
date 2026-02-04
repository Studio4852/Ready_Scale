import { motion } from "framer-motion";
import { Clock, CheckCircle2 } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import courseFrontend from "@/assets/course-frontend.jpg";
import courseBackend from "@/assets/course-backend.jpg";
import courseDevops from "@/assets/course-devops.jpg";

const courses = [
  {
    id: 1,
    title: "Modern Frontend Architecture",
    description: "Learn the fundamentals of scalable React architectures.",
    lessons: 3,
    duration: "45M",
    progress: 80,
    image: courseFrontend,
    completed: false,
  },
  {
    id: 2,
    title: "Backend Scalability",
    description: "Deep dive into microservices and database optimization.",
    lessons: 3,
    duration: "45M",
    progress: 60,
    image: courseBackend,
    completed: false,
  },
  {
    id: 3,
    title: "Advanced DevOps",
    description: "Automate deployments with CI/CD and Kubernetes.",
    lessons: 3,
    duration: "45M",
    progress: 0,
    image: courseDevops,
    completed: false,
  },
];

const Learning = () => {
  return (
    <DashboardLayout>
      <div className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-foreground italic mb-2">
            My Learning Path
          </h1>
          <p className="text-muted-foreground">
            Highly structured modules designed for industry readiness.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.1 }}
              className="glass-card overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-300"
                />
                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-border">
                  <div
                    className="h-full bg-foreground"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    {course.lessons} Lessons • {course.duration}
                  </span>
                  {course.completed && (
                    <CheckCircle2 className="w-4 h-4 text-foreground" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {course.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Self-paced</span>
                  </div>
                  <button className="text-xs font-semibold text-foreground uppercase tracking-wide hover:underline">
                    Continue
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Learning;
