import { motion } from "framer-motion";
import { ShieldCheck, Building2 } from "lucide-react";
import Badge from "@/components/Badge";
import Logo from "@/components/Logo";
import RoleCard from "@/components/RoleCard";
import SectionLabel from "@/components/SectionLabel";

const Index = () => {
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
            />
            <RoleCard
              icon={Building2}
              title="Employer"
              description="Build custom training paths, manage talent pipelines, and hire verified experts with confidence."
              delay={0.4}
            />
          </div>

          {/* Platform Management Label */}
          <SectionLabel text="Platform Management" />
        </div>
      </main>
    </div>
  );
};

export default Index;
