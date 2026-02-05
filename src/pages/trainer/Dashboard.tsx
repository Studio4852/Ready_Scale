import { motion } from "framer-motion";
import { Star, DollarSign, TrendingUp, Users } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const reviews = [
  {
    id: 1,
    student: "Sarah Chen",
    course: "Cloud AI Fundamentals",
    rating: 5,
    comment: "Excellent explanations! Made complex topics very accessible.",
    date: "2 days ago",
  },
  {
    id: 2,
    student: "Marcus Bell",
    course: "Prompt Engineering Masterclass",
    rating: 4,
    comment: "Great content, would love more hands-on examples.",
    date: "5 days ago",
  },
  {
    id: 3,
    student: "Emily Rodriguez",
    course: "Cloud AI Fundamentals",
    rating: 5,
    comment: "Best AI course I've taken. Very practical approach.",
    date: "1 week ago",
  },
];

const TrainerDashboard = () => {
  const averageRating = 4.7;
  const totalEarnings = 12450;
  const pendingPayout = 2340;
  const revenueShare = 70;

  return (
    <DashboardLayout>
      <div className="max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="badge-pill mb-4 inline-flex">
            <Star className="w-3.5 h-3.5" />
            <span>Verified Trainer</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tight">
            Trainer Console
          </h1>
          <p className="text-muted-foreground mt-2">
            Track your reviews and earnings
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="glass-card p-6 flex items-center gap-4">
            <div className="icon-box">
              <Star className="w-6 h-6 text-foreground" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Avg. Rating
              </p>
              <p className="text-3xl font-bold text-foreground">{averageRating}</p>
            </div>
          </div>

          <div className="glass-card p-6 flex items-center gap-4">
            <div className="icon-box">
              <DollarSign className="w-6 h-6 text-foreground" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Total Earnings
              </p>
              <p className="text-3xl font-bold text-foreground">${totalEarnings.toLocaleString()}</p>
            </div>
          </div>

          <div className="glass-card p-6 flex items-center gap-4">
            <div className="icon-box">
              <TrendingUp className="w-6 h-6 text-foreground" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Pending Payout
              </p>
              <p className="text-3xl font-bold text-foreground">${pendingPayout.toLocaleString()}</p>
            </div>
          </div>

          <div className="glass-card p-6 flex items-center gap-4">
            <div className="icon-box">
              <Users className="w-6 h-6 text-foreground" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Revenue Share
              </p>
              <p className="text-3xl font-bold text-foreground">{revenueShare}%</p>
            </div>
          </div>
        </motion.div>

        {/* Earnings Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card p-6 mb-8"
        >
          <h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-6">
            Earnings Breakdown
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Cloud AI Fundamentals</span>
              <span className="text-sm font-medium text-foreground">$7,230</span>
            </div>
            <Progress value={70} className="h-2" />
            
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-muted-foreground">Prompt Engineering Masterclass</span>
              <span className="text-sm font-medium text-foreground">$5,220</span>
            </div>
            <Progress value={50} className="h-2" />
          </div>
        </motion.div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
              Recent Reviews
            </h3>
            <span className="text-sm text-muted-foreground">{reviews.length} reviews</span>
          </div>

          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="p-4 rounded-xl bg-muted/20 border border-border"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-muted text-foreground">
                        {review.student.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{review.student}</p>
                      <p className="text-xs text-muted-foreground">{review.course}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "text-amber-400 fill-amber-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{review.comment}</p>
                <p className="text-xs text-muted-foreground mt-2">{review.date}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default TrainerDashboard;
