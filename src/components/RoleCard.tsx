import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface RoleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  href?: string;
}

const RoleCard = ({ icon: Icon, title, description, delay = 0, href }: RoleCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (href) {
      navigate(href);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      onClick={handleClick}
      className="glass-card p-10 cursor-pointer transition-all duration-300 flex-1 max-w-sm"
    >
      <div className="flex flex-col items-center text-center gap-6">
        <div className="icon-box">
          <Icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold tracking-wide uppercase text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default RoleCard;
