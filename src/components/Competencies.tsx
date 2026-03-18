import { motion } from "framer-motion";
import OrnateDiv from "./OrnateDiv";
import MandalaDecor from "./MandalaDecor";

const competencies = [
  "AI Based Solution Sales",
  "SaaS Sales & Strategy",
  "CRM & Lead Qualification",
  "Social Media & Email Marketing",
  "Cold Calling & Client Acquisition",
  "Team Leadership & Coaching",
  "Data Analytics & Machine Learning",
];

const tagVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.07,
      type: "spring" as const,
      stiffness: 250,
      damping: 20,
    },
  }),
};

const Competencies = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 bg-background relative overflow-hidden" id="competencies">
      <MandalaDecor className="-top-20 -right-20" size={350} opacity={0.03} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="line-accent-tricolor mb-6" />
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight inline-block bg-foreground/5 px-4 py-2 rounded-lg border-l-4 border-primary">
          Core <span className="text-gradient-gold">Competencies</span>
        </h2>
        <OrnateDiv className="max-w-xs mb-8" />
      </motion.div>

      <div className="flex flex-wrap gap-3 max-w-3xl">
        {competencies.map((c, i) => (
          <motion.span
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={tagVariants}
            whileHover={{
              scale: 1.08,
              borderColor: "hsl(42 80% 55%)",
              boxShadow: "0 0 15px hsl(42 80% 55% / 0.15)",
              transition: { duration: 0.2 },
            }}
            className="px-4 py-2 rounded-sm border border-primary/20 text-base font-display text-secondary-foreground cursor-default transition-all"
          >
            {c}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Competencies;
