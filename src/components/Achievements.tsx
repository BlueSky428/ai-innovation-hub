import { motion } from "framer-motion";
import OrnateDiv from "./OrnateDiv";
import MandalaDecor from "./MandalaDecor";

const achievements = [
  { icon: "🎤", title: "TEDx Speaker", year: "2016", href: "https://youtu.be/h-ntETVgaNo?si=ar3r_TovdYW9l3CF" },
  { icon: "🏆", title: "Tata Business Leadership Award", year: "2011", href: undefined },
  { icon: "💡", title: "Most Promising Innovation — Tata Group", year: "2009", href: undefined },
  { icon: "⭐", title: "Tata Steel Apex Aspire Award", year: "2009", href: undefined },
  { icon: "🎓", title: "University of Chicago Urban Labs Award", year: "2016", href: "https://urbanlabs.uchicago.edu/challenges/design-delhi" },
  { icon: "📜", title: "3 International Patents", year: "", href: "https://patents.google.com/patent/WO2010092586A1/pt" },
  { icon: "🚀", title: "30 Most Promising Tech Start-Ups in India", year: "", href: "https://yourstory.com/2015/08/capacloud" },
  { icon: "📄", title: "7 AI Papers · 1400+ Citations", year: "", href: "https://scholar.google.com/citations?user=6we-a3oAAAAJ&hl=en" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotateY: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const Achievements = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 bg-card relative overflow-hidden" id="achievements">
      <MandalaDecor className="-bottom-32 -left-16" size={350} opacity={0.03} />

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="line-accent-tricolor mb-6" />
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight inline-block bg-foreground/5 px-4 py-2 rounded-lg border-l-4 border-primary">
          Awards & <span className="text-gradient-gold">Achievements</span>
        </h2>
        <OrnateDiv className="max-w-xs mb-12" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24 max-w-5xl" style={{ perspective: "800px" }}>
        {achievements.map((a, i) => {
          const cardContent = (
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: "0 10px 30px -10px hsl(42 80% 55% / 0.2)",
                borderColor: "hsl(42 80% 55% / 0.5)",
                transition: { duration: 0.25 },
              }}
              className={`p-5 rounded-sm bg-secondary/50 border border-border transition-colors group h-full ${a.href ? "cursor-pointer hover:border-primary/40" : "cursor-default"}`}
            >
              <motion.div
                className="text-2xl mb-3"
                whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {a.icon}
              </motion.div>
              <h3 className="font-display text-base font-semibold text-foreground leading-snug">
                {a.title}
              </h3>
              {a.year && (
                <p className="text-muted-foreground text-sm mt-1">{a.year}</p>
              )}
            </motion.div>
          );
          return (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants} className="h-full">
              {a.href ? (
                <a href={a.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                  {cardContent}
                </a>
              ) : (
                cardContent
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
