import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Plus, 
  Star, 
  Download, 
  BookOpen,
  Clock,
  Users,
  Filter,
  Grid,
  List
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const courses = [
  {
    id: 1,
    title: "Advanced React Patterns",
    provider: "ReadyScale",
    category: "Frontend",
    duration: "6h 30m",
    rating: 4.9,
    enrollments: 1240,
    price: "Included",
    featured: true,
  },
  {
    id: 2,
    title: "Kubernetes Masterclass",
    provider: "ReadyScale",
    category: "DevOps",
    duration: "8h 15m",
    rating: 4.8,
    enrollments: 890,
    price: "Included",
    featured: true,
  },
  {
    id: 3,
    title: "API Security Best Practices",
    provider: "ReadyScale",
    category: "Security",
    duration: "4h 45m",
    rating: 4.7,
    enrollments: 654,
    price: "Included",
    featured: false,
  },
  {
    id: 4,
    title: "Node.js Performance Tuning",
    provider: "ReadyScale",
    category: "Backend",
    duration: "5h 20m",
    rating: 4.6,
    enrollments: 432,
    price: "Included",
    featured: false,
  },
  {
    id: 5,
    title: "TypeScript Deep Dive",
    provider: "ReadyScale",
    category: "Frontend",
    duration: "7h",
    rating: 4.9,
    enrollments: 1560,
    price: "Included",
    featured: true,
  },
  {
    id: 6,
    title: "AWS Solutions Architect",
    provider: "ReadyScale",
    category: "Cloud",
    duration: "12h",
    rating: 4.8,
    enrollments: 2100,
    price: "Premium",
    featured: true,
  },
];

const categories = ["All", "Frontend", "Backend", "DevOps", "Security", "Cloud"];

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredCourses = activeCategory === "All" 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

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
              Marketplace
            </h1>
            <p className="text-muted-foreground">
              Browse and manage available courses and content.
            </p>
          </div>
          <Button className="gap-2 uppercase tracking-wider">
            <Plus className="w-4 h-4" />
            Add Course
          </Button>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-between mb-6"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                className="pl-9 bg-muted/30 border-border w-64"
              />
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex gap-2 mb-6 flex-wrap"
        >
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className="uppercase tracking-wider text-xs"
            >
              {cat}
            </Button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" 
            : "space-y-4"
          }
        >
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className={`glass-card overflow-hidden hover:bg-muted/40 transition-colors ${
                viewMode === "list" ? "flex items-center p-4" : ""
              }`}
            >
              {viewMode === "grid" ? (
                <>
                  <div className="h-32 bg-muted/30 flex items-center justify-center relative">
                    <BookOpen className="w-12 h-12 text-muted-foreground" />
                    {course.featured && (
                      <Badge className="absolute top-3 right-3 uppercase text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="text-xs uppercase">
                        {course.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="w-3 h-3 fill-current text-yellow-400" />
                        {course.rating}
                      </div>
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{course.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {course.enrollments}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        {course.price}
                      </span>
                      <Button variant="outline" size="sm" className="gap-1 uppercase tracking-wider text-xs">
                        <Download className="w-3 h-3" />
                        Add
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-lg bg-muted/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-foreground">{course.title}</h3>
                      {course.featured && (
                        <Badge className="uppercase text-xs">Featured</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <Badge variant="outline" className="text-xs uppercase">
                        {course.category}
                      </Badge>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {course.enrollments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current text-yellow-400" />
                        {course.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-foreground">
                      {course.price}
                    </span>
                    <Button variant="outline" size="sm" className="gap-1 uppercase tracking-wider text-xs">
                      <Download className="w-3 h-3" />
                      Add
                    </Button>
                  </div>
                </>
              )}
            </Card>
          ))}
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Marketplace;
