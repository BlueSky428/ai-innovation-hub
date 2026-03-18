import { motion } from "framer-motion";

interface OrnateDivProps {
  className?: string;
}

const OrnateDiv = ({ className = "" }: OrnateDivProps) => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-3 origin-left ${className}`}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" className="shrink-0 opacity-60">
        <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="hsl(42 80% 55%)" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-primary/20 to-transparent" />
      <svg width="12" height="12" viewBox="0 0 20 20" className="shrink-0 opacity-40">
        <circle cx="10" cy="10" r="4" fill="none" stroke="hsl(25 95% 53%)" strokeWidth="1" />
        <circle cx="10" cy="10" r="2" fill="hsl(42 80% 55%)" />
      </svg>
    </motion.div>
  );
};

export default OrnateDiv;
