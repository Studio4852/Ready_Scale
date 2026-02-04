import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="badge-pill"
    >
      <Zap className="w-3.5 h-3.5" />
      <span>{text}</span>
    </motion.div>
  );
};

export default Badge;
