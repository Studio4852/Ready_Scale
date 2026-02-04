import { motion } from "framer-motion";
import { Search, Plus, CheckCircle } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const users = [
  { id: 1, name: "Alex Johnson", email: "alex.j@example.com", role: "Associate", status: "Active" },
  { id: 2, name: "Sarah Chen", email: "sarah.c@dev.com", role: "Associate", status: "Active" },
  { id: 3, name: "Jordan Employer", email: "jordan@tech-hire.com", role: "Employer", status: "Active" },
  { id: 4, name: "System Admin", email: "admin@readyscale.ai", role: "Management", status: "Active" },
];

const ManagementUsers = () => {
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

        {/* Users Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-foreground uppercase tracking-wide">
                Platform Users
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                Global Account Management
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or role..."
                  className="pl-9 bg-muted/30 border-border w-64"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Plus className="w-4 h-4" />
                Create Account
              </Button>
            </div>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 text-xs text-muted-foreground uppercase tracking-wider mb-4 px-4">
            <span>User Profile</span>
            <span>Role Authority</span>
            <span>Status</span>
            <span className="text-right">Settings</span>
          </div>

          {/* Table Rows */}
          <div className="space-y-3">
            {users.map((user) => (
              <div
                key={user.id}
                className="grid grid-cols-4 gap-4 items-center p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-muted text-foreground">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </div>

                <div>
                  <Badge variant="outline" className="uppercase text-xs tracking-wider">
                    {user.role}
                  </Badge>
                </div>

                <div className="flex items-center gap-2">
                  <span className="status-dot" />
                  <span className="text-sm text-foreground">{user.status}</span>
                </div>

                <div className="text-right">
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    •••
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

export default ManagementUsers;
