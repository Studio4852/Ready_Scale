import { motion } from "framer-motion";
import { ShieldCheck, Building2, Settings2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Badge from "@/components/Badge";
import Logo from "@/components/Logo";
import RoleCard from "@/components/RoleCard";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full flex flex-col items-center gap-16">
          {/* Header */}
          <div className="flex flex-col items-center gap-6 text-center">
            <Badge text="AI Readiness & Talent Protocol" />
            <Logo />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl max-w-md"
            >
              Verify readiness. Accelerate hiring. Scale with AI.
            </motion.p>
          </div>

          {/* Role Cards */}
          <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
            <RoleCard
              icon={ShieldCheck}
              title="Associate"
              description="Upskill in AI, verify your readiness score, and get matched with top global employers."
              delay={0.3}
              href="/associate"
            />
            <RoleCard
              icon={Building2}
              title="Employer"
              description="Build custom training paths, manage talent pipelines, and hire verified experts with confidence."
              delay={0.4}
              href="/employer"
            />
          </div>

          {/* Platform Management Label */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={() => navigate("/management")}
            className="flex items-center gap-2 text-muted-foreground/60 text-xs tracking-[0.2em] uppercase hover:text-muted-foreground transition-colors"
          >
            <Settings2 className="w-3.5 h-3.5" />
            <span>Platform Management</span>
          </motion.button>
        </div>
      </main>
    </div>
  );
};

export default Index;
