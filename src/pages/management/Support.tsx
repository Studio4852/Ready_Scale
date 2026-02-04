import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  User,
  Filter,
  MoreVertical
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const tickets = [
  {
    id: "TKT-001",
    subject: "Unable to access learning materials",
    user: "Sarah Chen",
    company: "Global Tech Corp",
    status: "open",
    priority: "high",
    created: "2 hours ago",
    messages: 3,
  },
  {
    id: "TKT-002",
    subject: "Badge not appearing after completion",
    user: "Marcus Bell",
    company: "Innovate Soft",
    status: "pending",
    priority: "medium",
    created: "5 hours ago",
    messages: 5,
  },
  {
    id: "TKT-003",
    subject: "Request for bulk user import",
    user: "Admin",
    company: "Secure Systems",
    status: "resolved",
    priority: "low",
    created: "1 day ago",
    messages: 8,
  },
  {
    id: "TKT-004",
    subject: "Zoom integration not connecting",
    user: "Jennifer Wu",
    company: "Global Tech Corp",
    status: "open",
    priority: "high",
    created: "3 hours ago",
    messages: 2,
  },
  {
    id: "TKT-005",
    subject: "Assessment score calculation issue",
    user: "David Park",
    company: "Innovate Soft",
    status: "pending",
    priority: "medium",
    created: "8 hours ago",
    messages: 4,
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "open":
      return "bg-red-500/20 text-red-400 border-red-500/30";
    case "pending":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    case "resolved":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getPriorityIcon = (priority: string) => {
  switch (priority) {
    case "high":
      return <AlertCircle className="w-4 h-4 text-red-400" />;
    case "medium":
      return <Clock className="w-4 h-4 text-yellow-400" />;
    default:
      return <CheckCircle className="w-4 h-4 text-muted-foreground" />;
  }
};

const Support = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredTickets = activeTab === "all" 
    ? tickets 
    : tickets.filter(t => t.status === activeTab);

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
            Support Center
          </h1>
          <p className="text-muted-foreground">
            Manage user tickets and platform support requests.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="glass-card p-4 text-center">
            <p className="text-3xl font-bold text-foreground">12</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Open Tickets</p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-3xl font-bold text-foreground">8</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Pending</p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-3xl font-bold text-foreground">156</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Resolved</p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-3xl font-bold text-foreground">2.4h</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Avg Response</p>
          </div>
        </motion.div>

        {/* Tickets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex items-center justify-between mb-6">
              <TabsList className="bg-muted/30">
                <TabsTrigger value="all" className="uppercase tracking-wider text-xs">
                  All Tickets
                </TabsTrigger>
                <TabsTrigger value="open" className="uppercase tracking-wider text-xs">
                  Open
                </TabsTrigger>
                <TabsTrigger value="pending" className="uppercase tracking-wider text-xs">
                  Pending
                </TabsTrigger>
                <TabsTrigger value="resolved" className="uppercase tracking-wider text-xs">
                  Resolved
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search tickets..."
                    className="pl-9 bg-muted/30 border-border w-48"
                  />
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
              </div>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="glass-card overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 p-4 border-b border-border text-xs text-muted-foreground uppercase tracking-wider">
                  <span className="col-span-1">ID</span>
                  <span className="col-span-4">Subject</span>
                  <span className="col-span-2">User</span>
                  <span className="col-span-2">Status</span>
                  <span className="col-span-2">Created</span>
                  <span className="col-span-1"></span>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-border">
                  {filteredTickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-muted/20 transition-colors cursor-pointer"
                    >
                      <span className="col-span-1 text-sm font-mono text-muted-foreground">
                        {ticket.id}
                      </span>
                      <div className="col-span-4 flex items-center gap-2">
                        {getPriorityIcon(ticket.priority)}
                        <div>
                          <p className="text-sm font-medium text-foreground">{ticket.subject}</p>
                          <p className="text-xs text-muted-foreground">{ticket.company}</p>
                        </div>
                      </div>
                      <div className="col-span-2 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                          <User className="w-3 h-3 text-muted-foreground" />
                        </div>
                        <span className="text-sm text-foreground">{ticket.user}</span>
                      </div>
                      <div className="col-span-2">
                        <Badge className={`uppercase text-xs tracking-wider ${getStatusColor(ticket.status)}`}>
                          {ticket.status}
                        </Badge>
                      </div>
                      <div className="col-span-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {ticket.created}
                      </div>
                      <div className="col-span-1 flex items-center justify-end gap-2">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MessageSquare className="w-3 h-3" />
                          {ticket.messages}
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Assign Agent</DropdownMenuItem>
                            <DropdownMenuItem>Mark Resolved</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Support;
