import { motion } from "framer-motion";
import OrnateDiv from "./OrnateDiv";
import MandalaDecor from "./MandalaDecor";
import { useSectionAnimate } from "@/hooks/use-section-animate";
import {
  sectionHeaderVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/section-animations";

const education = [
  {
    degree: "MBA in Supply Chain Management",
    school: "S.P. Jain School of Global Management",
    year: "Apr 2011 - Mar 2012",
    location: "Singapore & Dubai",
    website: "https://www.spjain.ae/",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=spjain.ae",
  },
  {
    degree: "B.E. in Mechanical Engineering",
    school: "Jadavpur University",
    year: "May 2003 - Apr 2007",
    location: "Kolkata, India",
    website: "https://jadavpuruniversity.in/",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=jadavpuruniversity.in",
  },
];

const Education = () => {
  const { ref, isActive, animationKey } = useSectionAnimate("education");

  return (
    <section
      ref={ref}
      className="px-6 md:px-16 lg:px-24 py-24 bg-card relative overflow-visible"
      id="education"
    >
      <MandalaDecor className="-bottom-20 -left-16" size={350} opacity={0.03} />

      <motion.div
        key={`header-${animationKey}`}
        variants={sectionHeaderVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <div className="line-accent-tricolor mb-6" />
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight inline-block bg-foreground/5 px-4 py-2 rounded-lg border-l-4 border-primary">
          <span className="text-gradient-gold">Education</span>
        </h2>
        <OrnateDiv className="max-w-xs mb-8" />
      </motion.div>

      <motion.div
        key={`timeline-${animationKey}`}
        className="relative max-w-4xl"
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <div className="absolute left-1 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/25 to-transparent" />

        <div className="space-y-10">
          {education.map((e, i) => (
            <motion.div key={i} variants={staggerItemVariants} className="relative pl-10 md:pl-16 group">
              <motion.div
                className="absolute left-1 md:left-4 top-6 -translate-x-[3px]"
                variants={{
                  hidden: { scale: 0 },
                  visible: {
                    scale: 1,
                    transition: { type: "spring", stiffness: 300, damping: 16 },
                  },
                }}
              >
                <div className="w-3 h-3 rounded-full bg-primary relative">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 1.9, 1], opacity: [0.55, 0, 0.55] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.45 }}
                  />
                </div>
              </motion.div>

              <motion.a
                href={e.website}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="block rounded-sm p-4 -m-4 transition-colors hover:bg-secondary/30"
              >
                <div className="flex items-start gap-4 mb-2">
                  <img
                    src={e.logoUrl}
                    alt={`${e.school} logo`}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-md border border-border/60 bg-white p-1.5 shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <div className="flex flex-col gap-1 mb-1">
                      <motion.span
                        className="text-primary font-display text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {e.school}
                      </motion.span>
                      <h3 className="font-display text-2xl font-semibold text-foreground">
                        {e.degree}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm tracking-wide mb-2">
                      {e.year} · {e.location}
                    </p>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
