import { motion } from "framer-motion";
import MandalaDecor from "./MandalaDecor";
import OrnateDiv from "./OrnateDiv";

const experiences = [
  {
    role: "Senior Vice President",
    company: "AI Work",
    period: "01/2025 – Present",
    location: "Grand Cayman, Cayman Islands",
    highlights: [
      "Achieved $2M annual revenue target with a team of 10 in the first year",
      "Signed clients like StockTwits (USA), Zerodha, IndMoney, Wonderful Sky (China)",
      "Led GTM for AI products: Freddie, Luca, Yumi, Orion, Hermes, Olympus, Saras",
      "Attracted $400K pipeline for AI engineering services (Multi-Agent RAG)",
    ],
  },
  {
    role: "Outbound Sales Team Lead",
    company: "Maestra",
    period: "09/2020 – 12/2024",
    location: "Kolkata, India",
    highlights: [
      "Exceeded annual target — USD 490K in last fiscal year",
      "Acquired Netflix India, Koo, and Facebook as clients",
      "Built data-driven sales culture, enhancing operational metrics",
    ],
  },
  {
    role: "CEO & Founder",
    company: "Capacloud",
    period: "07/2014 – 08/2020",
    location: "Bangalore, India",
    highlights: [
      "Secured USD 150K venture capital for IoT vertical farming",
      "Partnered with Indian Oil, Godrej, Tata Steel",
      "Designed vertical garden products for mass-market",
    ],
  },
  {
    role: "Profit Center Head",
    company: "Hellmann Worldwide Logistics",
    period: "03/2012 – 02/2014",
    location: "Dubai, UAE",
    highlights: [
      "Developed OCR-based automated customs clearance software",
      "Led team of 12 to achieve USD 600K annual revenue",
    ],
  },
  {
    role: "Research Scientist",
    company: "Tata Steel",
    period: "03/2008 – 02/2011",
    location: "Jamshedpur, India",
    highlights: [
      "Managed INR 1 Crore budget for nanofluid & neural network projects",
      "Implemented Capex projects worth INR 60 Crores",
      "Collaborated with 40+ global vendors for cost optimization",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const highlightVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

const Experience = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 relative overflow-hidden" id="experience">
      <MandalaDecor className="-top-20 -right-20" size={350} opacity={0.03} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="line-accent-tricolor mb-6" />
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight inline-block bg-foreground/5 px-4 py-2 rounded-lg border-l-4 border-primary">
          Professional <span className="text-gradient-gold">Experience</span>
        </h2>
        <OrnateDiv className="max-w-xs mb-16" />
      </motion.div>

      <motion.div
        className="relative max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Timeline line with gradient */}
        <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="relative pl-8 md:pl-14 group"
            >
              {/* Animated timeline dot */}
              <motion.div
                className="absolute left-0 md:left-4 top-2 -translate-x-[3px]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="w-3 h-3 rounded-full bg-primary relative">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  />
                </div>
              </motion.div>

              {/* Card with hover glow */}
              <motion.div
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="rounded-sm p-4 -m-4 transition-colors hover:bg-secondary/30"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <motion.span
                    className="text-primary font-display text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    {exp.company}
                  </motion.span>
                </div>
                <p className="text-muted-foreground text-sm tracking-wide mb-4">
                  {exp.period} · {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <motion.li
                      key={j}
                      custom={j}
                      variants={highlightVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="text-secondary-foreground text-base leading-relaxed flex items-center gap-3"
                    >
                      <motion.span
                        className="text-primary shrink-0"
                        whileHover={{ scale: 1.3, rotate: 90 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        ✦
                      </motion.span>
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
