import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className="flex items-baseline"
    >
      <h1 className="logo-text text-5xl md:text-7xl text-foreground">
        ReadyScale
      </h1>
      <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-muted-foreground ml-1 mb-2" />
    </motion.div>
  );
};

export default Logo;
