import { motion } from "framer-motion";
import OrnateDiv from "./OrnateDiv";
import MandalaDecor from "./MandalaDecor";

const education = [
  {
    degree: "MBA in Supply Chain Management",
    school: "S.P. Jain School of Global Management",
    year: "Apr 2011 - Mar 2012",
    location: "Singapore & Dubai",
    descriptions: [
      "Focused on global supply chain strategy and operations management.",
      "Built a cross-market perspective through coursework in Singapore and Dubai.",
    ],
  },
  {
    degree: "B.E. in Mechanical Engineering",
    school: "Jadavpur University",
    year: "May 2003 - Apr 2007",
    location: "Kolkata, India",
    descriptions: [
      "Built a strong engineering foundation in mechanics, manufacturing, and systems thinking.",
      "Developed analytical problem-solving skills used across leadership and innovation roles.",
    ],
  },
];

const timelineVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -24, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const Education = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 bg-card relative overflow-hidden" id="education">
      <MandalaDecor className="-bottom-20 -left-16" size={350} opacity={0.03} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="line-accent-tricolor mb-6" />
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight inline-block bg-foreground/5 px-4 py-2 rounded-lg border-l-4 border-primary">
          <span className="text-gradient-gold">Education</span>
        </h2>
        <OrnateDiv className="max-w-xs mb-8" />
      </motion.div>

      <motion.div
        className="relative max-w-4xl"
        variants={timelineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="absolute left-1 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/25 to-transparent" />

        <div className="space-y-10">
          {education.map((e, i) => (
            <motion.div key={i} variants={itemVariants} className="relative pl-10 md:pl-16 group">
              <motion.div
                className="absolute left-1 md:left-4 top-6 -translate-x-[3px]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 300, damping: 16 }}
              >
                <div className="w-3 h-3 rounded-full bg-primary relative">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 1.9, 1], opacity: [0.55, 0, 0.55] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.45 }}
                  />
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="rounded-sm p-4 -m-4 transition-colors hover:bg-secondary/30"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {e.degree}
                  </h3>
                  <motion.span
                    className="text-primary font-display text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    {e.school}
                  </motion.span>
                </div>
                <p className="text-muted-foreground text-sm tracking-wide mb-2">
                  {e.year} · {e.location}
                </p>
                <ul className="space-y-2 mt-3">
                  {e.descriptions.map((description, j) => (
                    <li
                      key={j}
                      className="text-secondary-foreground text-base leading-relaxed flex items-start gap-3"
                    >
                      <span className="text-primary shrink-0 mt-1">✦</span>
                      {description}
                    </li>
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

export default Education;
