import { motion } from "framer-motion";
import MandalaDecor from "./MandalaDecor";
import OrnateDiv from "./OrnateDiv";
import { useSectionAnimate } from "@/hooks/use-section-animate";
import {
  sectionHeaderVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/section-animations";

const experiences = [
  {
    role: "Co-Founder",
    company: "Defense.Codes",
    period: "03/2026 - Present",
    location: "Munich, Germany",
    website: "https://defense.codes/",
    logoUrl: "/defense.codes.png",
    highlights: [
      "Monte Carlo supply chain risk analysis for defense, space, and aerospace.",
    ],
  },
  {
    role: "Chief Executive Officer",
    company: "Capa.Cloud",
    period: "12/2025 - Present",
    location: "Sheridan, Wyoming, United States",
    website: "https://capa.cloud/",
    logoUrl: "/capa.cloud.png",
    highlights: [
      "P2P GPU Exchange on Blockchain. Carbon neutral alternative to AWS.",
    ],
  },
  {
    role: "Co-Founder",
    company: "Mugen.Codes",
    period: "01/2025 - Present",
    location: "Tokyo, Japan",
    website: "https://mugen.codes/",
    logoUrl: "/mugen.codes.png",
    highlights: [
      "Calm delivery of mission critical software for defense, space and brain-computer interface.",
    ],
  },
  {
    role: "Senior Vice President",
    company: "Alpharithm Investments",
    period: "01/2025 - 01/2026",
    location: "Cayman Islands",
    website: "https://www.alpharithminv.com/",
    logoUrl: "https://www.google.com/s2/favicons?sz=128&domain_url=alpharithminv.com",
    highlights: [
      "Used Agent Swarm to generate Alpha in equity markets.",
    ],
  },
  {
    role: "CEO & Founder",
    company: "Capacloud",
    period: "07/2014 - 12/2024",
    location: "Bangalore, India",
    website: "https://www.ndtv.com/delhi-news/delhi-may-solve-its-air-pollution-problem-with-vertical-gardens-1477528",
    logoUrl: "/capacloud-logo.png",
    highlights: [
      "Internet of Things and Computer Vision Based Vertical Farming Solution.",
    ],
  },
  {
    role: "Profit Center Head",
    company: "Hellmann Worldwide Logistics",
    period: "03/2012 - 02/2014",
    location: "Dubai, UAE",
    website: "https://www.hellmann.com/",
    logoUrl: "/hellmann-logo.png",
    highlights: [
      "Pioneered an automated customs clearance solution for Dubai Customs.",
    ],
  },
  {
    role: "Research Scientist",
    company: "Tata Steel",
    period: "03/2008 - 02/2011",
    location: "Jamshedpur, India",
    website: "https://www.tatasteel.com/",
    logoUrl: "/tata-steel-logo.png",
    highlights: [
      "Most Promising Innovation in Tata Group. Tata Business Leadership award.",
    ],
  },
];

const highlightVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" as const },
  }),
};

const Experience = () => {
  const { ref, isActive, animationKey } = useSectionAnimate("experience");

  return (
    <section
      ref={ref}
      className="px-6 md:px-16 lg:px-24 py-24 relative overflow-visible"
      id="experience"
    >
      <MandalaDecor className="-top-20 -right-20" size={350} opacity={0.03} />

      <motion.div
        key={`header-${animationKey}`}
        variants={sectionHeaderVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <div className="line-accent-tricolor mb-6" />
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight inline-block bg-foreground/5 px-4 py-2 rounded-lg border-l-4 border-primary">
          Work <span className="text-gradient-gold">Experience</span>
        </h2>
        <OrnateDiv className="max-w-xs mb-16" />
      </motion.div>

      <motion.div
        key={`timeline-${animationKey}`}
        className="relative max-w-4xl"
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={staggerItemVariants}
              className="relative pl-8 md:pl-14 group"
            >
              <motion.div
                className="absolute left-0 md:left-4 top-2 -translate-x-[3px]"
                variants={{
                  hidden: { scale: 0 },
                  visible: {
                    scale: 1,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  },
                }}
              >
                <div className="w-3 h-3 rounded-full bg-primary relative">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  />
                </div>
              </motion.div>

              <motion.a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="block rounded-sm p-4 -m-4 transition-colors hover:bg-secondary/30"
              >
                <div className="flex items-start gap-4 mb-2">
                  <img
                    src={exp.logoUrl}
                    alt={`${exp.company} logo`}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-md border border-border/60 bg-white p-1.5 shrink-0 object-contain object-center"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-1">
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
                    <p className="text-muted-foreground text-sm tracking-wide mb-3">
                      {exp.period} · {exp.location}
                    </p>
                  </div>
                </div>
                <motion.ul
                  className="space-y-2"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate={isActive ? "visible" : "hidden"}
                >
                  {exp.highlights.map((h, j) => (
                    <motion.li
                      key={j}
                      custom={j}
                      variants={highlightVariants}
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
                </motion.ul>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
