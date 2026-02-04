import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Upload, 
  Video, 
  BookOpen, 
  Plus, 
  Play, 
  Clock, 
  Users,
  Calendar,
  ExternalLink,
  CheckCircle
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const uploadedCourses = [
  { 
    id: 1, 
    title: "React Fundamentals", 
    type: "video", 
    duration: "4h 30m", 
    enrolled: 24,
    status: "active"
  },
  { 
    id: 2, 
    title: "DevOps Essentials", 
    type: "video", 
    duration: "6h 15m", 
    enrolled: 18,
    status: "active"
  },
  { 
    id: 3, 
    title: "API Design Patterns", 
    type: "video", 
    duration: "3h 45m", 
    enrolled: 12,
    status: "draft"
  },
];

const availableCourses = [
  { 
    id: 1, 
    title: "Cloud Architecture", 
    provider: "ReadyScale", 
    duration: "8h", 
    rating: 4.8 
  },
  { 
    id: 2, 
    title: "Security Fundamentals", 
    provider: "ReadyScale", 
    duration: "5h", 
    rating: 4.9 
  },
  { 
    id: 3, 
    title: "Agile & Scrum Mastery", 
    provider: "ReadyScale", 
    duration: "4h", 
    rating: 4.7 
  },
];

const liveTrainings = [
  { 
    id: 1, 
    title: "Weekly Code Review Session", 
    instructor: "Sarah Chen",
    date: "Feb 6, 2026",
    time: "2:00 PM EST",
    attendees: 15,
    status: "scheduled"
  },
  { 
    id: 2, 
    title: "System Design Workshop", 
    instructor: "Marcus Bell",
    date: "Feb 10, 2026",
    time: "10:00 AM EST",
    attendees: 22,
    status: "scheduled"
  },
];

const Studio = () => {
  const [activeTab, setActiveTab] = useState("my-courses");

  return (
    <DashboardLayout>
      <div className="max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight italic">
            Training Studio
          </h1>
          <p className="text-muted-foreground">
            Create, upload, and manage training content for your team.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          <Card className="glass-card p-6 hover:bg-muted/40 transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                <Upload className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground uppercase tracking-wide text-sm">
                  Upload Course
                </h3>
                <p className="text-xs text-muted-foreground">
                  Add videos & materials
                </p>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-6 hover:bg-muted/40 transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                <BookOpen className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground uppercase tracking-wide text-sm">
                  Browse Library
                </h3>
                <p className="text-xs text-muted-foreground">
                  Pick from existing courses
                </p>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-6 hover:bg-muted/40 transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                <Video className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-foreground uppercase tracking-wide text-sm">
                  Schedule Live
                </h3>
                <p className="text-xs text-muted-foreground">
                  Host training via Zoom
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Tabs Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-muted/30 mb-6">
              <TabsTrigger value="my-courses" className="uppercase tracking-wider text-xs">
                My Courses
              </TabsTrigger>
              <TabsTrigger value="library" className="uppercase tracking-wider text-xs">
                Course Library
              </TabsTrigger>
              <TabsTrigger value="live" className="uppercase tracking-wider text-xs">
                Live Training
              </TabsTrigger>
            </TabsList>

            {/* My Courses Tab */}
            <TabsContent value="my-courses">
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
                    Uploaded Courses
                  </h3>
                  <Button variant="outline" size="sm" className="gap-2 uppercase tracking-wider text-xs">
                    <Plus className="w-4 h-4" />
                    New Course
                  </Button>
                </div>

                <div className="space-y-4">
                  {uploadedCourses.map((course) => (
                    <div
                      key={course.id}
                      className="flex items-center justify-between p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                          <Play className="w-5 h-5 text-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{course.title}</p>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {course.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {course.enrolled} enrolled
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge 
                          variant={course.status === "active" ? "default" : "secondary"}
                          className="uppercase text-xs tracking-wider"
                        >
                          {course.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Course Library Tab */}
            <TabsContent value="library">
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
                    Available Courses
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pre-built courses ready to assign
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {availableCourses.map((course) => (
                    <Card
                      key={course.id}
                      className="glass-card p-5 hover:bg-muted/40 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-foreground" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          ★ {course.rating}
                        </Badge>
                      </div>
                      <h4 className="font-bold text-foreground mb-1">{course.title}</h4>
                      <p className="text-xs text-muted-foreground mb-4">
                        By {course.provider} • {course.duration}
                      </p>
                      <Button variant="outline" size="sm" className="w-full uppercase tracking-wider text-xs">
                        Add to Training
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Live Training Tab */}
            <TabsContent value="live">
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
                      Live Training Sessions
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Schedule and manage Zoom-based training
                    </p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2 uppercase tracking-wider text-xs">
                    <Calendar className="w-4 h-4" />
                    Schedule Session
                  </Button>
                </div>

                <div className="space-y-4">
                  {liveTrainings.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                          <Video className="w-5 h-5 text-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{session.title}</p>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span>Instructor: {session.instructor}</span>
                            <span>•</span>
                            <span>{session.date} at {session.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          {session.attendees}
                        </div>
                        <Badge 
                          variant="outline"
                          className="uppercase text-xs tracking-wider flex items-center gap-1"
                        >
                          <CheckCircle className="w-3 h-3" />
                          {session.status}
                        </Badge>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <ExternalLink className="w-4 h-4" />
                          Join
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl border border-dashed border-border text-center">
                  <Video className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Connect your Zoom account to enable live training features
                  </p>
                  <Button variant="outline" size="sm" className="mt-3 uppercase tracking-wider text-xs">
                    Connect Zoom
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Studio;
