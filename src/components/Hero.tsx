import { motion } from "framer-motion";
import MandalaDecor from "./MandalaDecor";

const stats = [
  { value: "17+", label: "Years Experience" },
  { value: "3", label: "International Patents" },
  { value: "7", label: "AI Research Papers" },
  { value: "1400+", label: "Citations" },
];

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.4 + i * 0.04,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const Hero = () => {
  const firstName = "Jayabrata";
  const lastName = "Bhaduri";

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 relative overflow-visible">
      {/* Mandala decorations */}
      <MandalaDecor className="top-10 right-10 md:right-20" size={400} opacity={0.05} />
      <MandalaDecor className="-bottom-20 -left-20" size={300} opacity={0.04} />

      {/* Subtle background glows */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-primary blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-[hsl(var(--saffron))] blur-3xl"
      />

      <div className="relative z-10 max-w-5xl flex flex-col md:flex-row md:items-center md:gap-8 md:justify-between">
        <div className="min-w-0 flex-1 order-2 md:order-1">
        {/* Ornate line accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="origin-left mb-8"
        >
          <div className="line-accent-tricolor" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-base md:text-lg mb-6 tracking-wide"
        >
          <span className="text-primary font-semibold">Impact Investor</span>
          <span className="mx-2 text-muted-foreground/40">·</span>
          <span className="text-foreground/90 font-medium">Serial Founder</span>
          <span className="mx-2 text-muted-foreground/40">·</span>
          <span className="text-india-saffron font-medium">Public Speaker</span>
          <span className="mx-2 text-muted-foreground/40">·</span>
          <span className="text-india-green font-medium">Scientist</span>
        </motion.p>

        {/* Animated letter-by-letter name */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6" style={{ perspective: "600px" }}>
          <span className="block">
            {firstName.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className="block text-gradient-gold">
            {lastName.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i + firstName.length}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-secondary-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
        >
          Serial risk taker with 17+ years of experience scaling technology from lab to
          the masses. TEDx speaker on climate change. Winner of the University of
          Chicago Urban Labs Award and the Tata Business Leadership Award. Holder of 3
          manufacturing patents; author of 7 AI papers with 1,400+ citations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap gap-6 mb-12"
        >
          <motion.a
            href="mailto:bhaduri.jayabrata@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px hsl(42 80% 55% / 0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-medium text-sm tracking-wide rounded-sm transition-all"
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jay-bhaduri/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, borderColor: "hsl(42 80% 55%)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary font-display font-medium text-sm tracking-wide rounded-sm transition-all"
          >
            LinkedIn
          </motion.a>
        </motion.div>
        </div>

        {/* Profile photo - right on desktop, above text on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 mb-4 md:mb-0 order-1 md:order-2"
        >
          <img
            src="/photo.png"
            alt="Jayabrata Bhaduri"
            className="h-72 sm:h-80 md:h-[22rem] lg:h-[26rem] xl:h-[30rem] w-auto max-w-full rounded-2xl object-contain shadow-2xl shadow-black/20 ring-1 ring-white/5"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mt-8"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="border-l border-primary/30 pl-4 cursor-default"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.7 + i * 0.15, type: "spring", stiffness: 200 }}
              className="font-display text-3xl md:text-4xl font-bold text-foreground"
            >
              {stat.value}
            </motion.div>
            <div className="text-muted-foreground text-xs tracking-wide mt-1">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
