import { motion } from "framer-motion";

interface MandalaDecorProps {
  className?: string;
  size?: number;
  opacity?: number;
}

const MandalaDecor = ({ className = "", size = 300, opacity = 0.06 }: MandalaDecorProps) => {
  const petals = 12;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className={`pointer-events-none absolute ${className}`}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="mandala-spin"
        style={{ opacity }}
      >
        {/* Outer ring of petals */}
        {Array.from({ length: petals }).map((_, i) => (
          <ellipse
            key={`outer-${i}`}
            cx="100"
            cy="30"
            rx="8"
            ry="30"
            fill="none"
            stroke="hsl(42 80% 55%)"
            strokeWidth="0.5"
            transform={`rotate(${(360 / petals) * i} 100 100)`}
          />
        ))}
        {/* Inner ring */}
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse
            key={`inner-${i}`}
            cx="100"
            cy="55"
            rx="5"
            ry="18"
            fill="none"
            stroke="hsl(25 95% 53%)"
            strokeWidth="0.5"
            transform={`rotate(${(360 / 8) * i} 100 100)`}
          />
        ))}
        {/* Center circles */}
        <circle cx="100" cy="100" r="20" fill="none" stroke="hsl(42 80% 55%)" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="10" fill="none" stroke="hsl(25 95% 53%)" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="3" fill="hsl(42 80% 55%)" opacity="0.3" />
        {/* Outer boundary */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="hsl(42 80% 55%)" strokeWidth="0.3" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="hsl(42 80% 55%)" strokeWidth="0.3" />
      </svg>
      {/* Counter-rotating inner layer */}
      <svg
        width={size * 0.6}
        height={size * 0.6}
        viewBox="0 0 200 200"
        className="mandala-spin-reverse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: opacity * 0.8 }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <path
            key={`lotus-${i}`}
            d="M100 60 Q110 80 100 100 Q90 80 100 60"
            fill="none"
            stroke="hsl(120 40% 35%)"
            strokeWidth="0.8"
            transform={`rotate(${60 * i} 100 100)`}
          />
        ))}
      </svg>
    </motion.div>
  );
};

export default MandalaDecor;
