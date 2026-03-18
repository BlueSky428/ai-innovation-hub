import { motion } from "framer-motion";

const achievements = [
  { icon: "🎤", title: "TEDx Speaker", year: "2016" },
  { icon: "🏆", title: "Tata Business Leadership Award", year: "2011" },
  { icon: "💡", title: "Most Promising Innovation — Tata Group", year: "2009" },
  { icon: "⭐", title: "Tata Steel Apex Aspire Award", year: "2009" },
  { icon: "🎓", title: "University of Chicago Urban Labs Award", year: "2016" },
  { icon: "📜", title: "3 International Patents", year: "" },
  { icon: "🚀", title: "30 Most Promising Tech Start-Ups in India", year: "" },
  { icon: "📄", title: "7 AI Papers · 1400+ Citations", year: "" },
];

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

const competencies = [
  "AI Based Solution Sales",
  "SaaS Sales & Strategy",
  "CRM & Lead Qualification",
  "Social Media & Email Marketing",
  "Cold Calling & Client Acquisition",
  "Team Leadership & Coaching",
  "Data Analytics & Machine Learning",
];

const Achievements = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 bg-card" id="achievements">
      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="line-accent mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Awards & <span className="text-gradient-gold">Achievements</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24 max-w-5xl">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="p-5 rounded-sm bg-secondary/50 border border-border hover:border-primary/30 transition-colors group"
          >
            <div className="text-2xl mb-3">{a.icon}</div>
            <h3 className="font-display text-sm font-semibold text-foreground leading-snug">
              {a.title}
            </h3>
            {a.year && (
              <p className="text-muted-foreground text-xs mt-1">{a.year}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Competencies */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="line-accent mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
          Core <span className="text-gradient-gold">Competencies</span>
        </h2>
      </motion.div>

      <div className="flex flex-wrap gap-3 mb-24 max-w-3xl">
        {competencies.map((c, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="px-4 py-2 rounded-sm border border-primary/20 text-sm font-display text-secondary-foreground hover:border-primary/50 transition-colors"
          >
            {c}
          </motion.span>
        ))}
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="line-accent mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
          <span className="text-gradient-gold">Education</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        {education.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-6 rounded-sm bg-secondary/50 border border-border"
          >
            <h3 className="font-display text-base font-semibold text-foreground mb-1">
              {e.degree}
            </h3>
            <p className="text-primary text-sm font-display">{e.school}</p>
            <p className="text-muted-foreground text-xs mt-2">
              {e.year} · {e.location}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
