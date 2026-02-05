import { motion } from "framer-motion";
import { DollarSign, Download, Calendar, ArrowUpRight } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const paymentHistory = [
  {
    id: 1,
    date: "Jan 15, 2026",
    amount: 2340,
    status: "Paid",
    method: "Bank Transfer",
  },
  {
    id: 2,
    date: "Dec 15, 2025",
    amount: 3120,
    status: "Paid",
    method: "Bank Transfer",
  },
  {
    id: 3,
    date: "Nov 15, 2025",
    amount: 2890,
    status: "Paid",
    method: "Bank Transfer",
  },
  {
    id: 4,
    date: "Oct 15, 2025",
    amount: 4100,
    status: "Paid",
    method: "Bank Transfer",
  },
];

const TrainerPayments = () => {
  const totalEarnings = 12450;
  const pendingPayout = 2340;
  const nextPayoutDate = "Feb 15, 2026";
  const revenueShare = 70;

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
              Payments
            </h1>
            <p className="text-muted-foreground mt-2">
              Track your earnings and payment history
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export Statement
          </Button>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          <div className="glass-card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="icon-box">
                <DollarSign className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Total Earnings (YTD)
                </p>
                <p className="text-3xl font-bold text-foreground">${totalEarnings.toLocaleString()}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Revenue share: <span className="text-foreground font-medium">{revenueShare}%</span>
            </p>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="icon-box">
                <ArrowUpRight className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Pending Payout
                </p>
                <p className="text-3xl font-bold text-foreground">${pendingPayout.toLocaleString()}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Earned this period
            </p>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="icon-box">
                <Calendar className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  Next Payout
                </p>
                <p className="text-2xl font-bold text-foreground">{nextPayoutDate}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Payouts processed monthly on the 15th
            </p>
          </div>
        </motion.div>

        {/* Payment History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-6">
            Payment History
          </h3>

          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 text-xs text-muted-foreground uppercase tracking-wider mb-4 px-4">
            <span>Date</span>
            <span>Amount</span>
            <span>Method</span>
            <span className="text-right">Status</span>
          </div>

          {/* Table Rows */}
          <div className="space-y-3">
            {paymentHistory.map((payment) => (
              <div
                key={payment.id}
                className="grid grid-cols-4 gap-4 items-center p-4 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors"
              >
                <span className="text-sm text-foreground">{payment.date}</span>
                <span className="text-sm font-medium text-foreground">
                  ${payment.amount.toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground">{payment.method}</span>
                <div className="text-right">
                  <Badge variant="outline" className="text-xs uppercase tracking-wider">
                    {payment.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default TrainerPayments;
