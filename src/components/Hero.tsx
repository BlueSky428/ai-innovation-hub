import { motion } from "framer-motion";

const stats = [
  { value: "17+", label: "Years Experience" },
  { value: "3", label: "International Patents" },
  { value: "7", label: "AI Research Papers" },
  { value: "1400+", label: "Citations" },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-primary/3 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        <div className="line-accent mb-8" />
        <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
          TEDx Speaker · AI Sales Leader · ML Researcher
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6">
          Jayabrata
          <br />
          <span className="text-gradient-gold">Bhaduri</span>
        </h1>
        <p className="text-secondary-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
          Accomplished professional with 17 years of experience in AI/SaaS Sales,
          business development, and start-up innovation. Driving revenue growth and
          building scalable business solutions across global markets.
        </p>

        <div className="flex flex-wrap gap-6 mb-12">
          <a
            href="mailto:bhaduri.jayabrata@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-medium text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/jayabrata-bhaduri/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary font-display font-medium text-sm tracking-wide rounded-sm hover:bg-primary/10 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mt-8"
      >
        {stats.map((stat, i) => (
          <div key={i} className="border-l border-primary/30 pl-4">
            <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {stat.value}
            </div>
            <div className="text-muted-foreground text-xs tracking-wide uppercase mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
