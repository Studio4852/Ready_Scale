import { motion } from "framer-motion";
import { Settings2 } from "lucide-react";

interface SectionLabelProps {
  text: string;
}

const SectionLabel = ({ text }: SectionLabelProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="flex items-center gap-2 text-muted-foreground/60 text-xs tracking-[0.2em] uppercase"
    >
      <Settings2 className="w-3.5 h-3.5" />
      <span>{text}</span>
    </motion.div>
  );
};

export default SectionLabel;
