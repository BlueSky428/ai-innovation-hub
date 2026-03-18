import { motion } from "framer-motion";
import OrnateDiv from "./OrnateDiv";
import MandalaDecor from "./MandalaDecor";

const education = [
  {
    degree: "MBA in Supply Chain Management",
    school: "S.P. Jain School of Global Management",
    year: "2012",
    location: "Singapore & Dubai",
  },
  {
    degree: "B.E. in Mechanical Engineering",
    school: "Jadavpur University",
    year: "2007",
    location: "Kolkata",
  },
];

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        {education.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              y: -4,
              boxShadow: "0 8px 25px -8px hsl(42 80% 55% / 0.15)",
              transition: { duration: 0.2 },
            }}
            className="p-6 rounded-sm bg-secondary/50 border border-border cursor-default"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-1">
              {e.degree}
            </h3>
            <p className="text-primary text-base font-display">{e.school}</p>
            <p className="text-muted-foreground text-sm mt-2">
              {e.year} · {e.location}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
