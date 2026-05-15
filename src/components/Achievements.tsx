import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Lightbulb, Medal, Mic2, Rocket, Star, ScrollText, GraduationCap, FileText } from "lucide-react";
import OrnateDiv from "./OrnateDiv";
import MandalaDecor from "./MandalaDecor";
import { useSectionAnimate } from "@/hooks/use-section-animate";
import {
  sectionHeaderVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/section-animations";

const achievements = [
  { icon: Mic2, title: "TEDx Speaker", year: "2016", href: "https://youtu.be/h-ntETVgaNo?si=ar3r_TovdYW9l3CF" },
  { icon: Medal, title: "Tata Business Leadership Award", year: "2011", href: undefined },
  { icon: Lightbulb, title: "Most Promising Innovation - Tata Group", year: "2009", href: "https://www.tatasteel.com/rnd/media/recognitions-fy-09-10.asp" },
  { icon: Star, title: "Tata Steel Apex Aspire Award", year: "2009", href: undefined },
  { icon: GraduationCap, title: "University of Chicago Urban Labs Award", year: "2016", href: "https://urbanlabs.uchicago.edu/challenges/design-delhi" },
  { icon: ScrollText, title: "3 International Patents", year: "", href: "https://patents.google.com/patent/WO2010092586A1/pt" },
  { icon: Rocket, title: "30 Most Promising Tech Start-Ups in India", year: "", href: "https://yourstory.com/2015/08/capacloud" },
  { icon: FileText, title: "7 AI Papers · 1400+ Citations", year: "", href: "https://scholar.google.com/citations?user=6we-a3oAAAAJ&hl=en" },
] satisfies { icon: LucideIcon; title: string; year: string; href?: string }[];

const Achievements = () => {
  const { ref, isActive, animationKey } = useSectionAnimate("achievements");

  return (
    <section
      ref={ref}
      className="px-6 md:px-16 lg:px-24 py-24 bg-card relative overflow-visible"
      id="achievements"
    >
      <MandalaDecor className="-bottom-32 -left-16" size={350} opacity={0.03} />
      <div className="pointer-events-none absolute -top-24 right-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-1/3 w-72 h-72 rounded-full bg-[hsl(var(--indian-green))/0.12] blur-3xl" />

      <motion.div
        key={`header-${animationKey}`}
        variants={sectionHeaderVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <div className="line-accent-tricolor mb-6" />
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight inline-block bg-foreground/5 px-4 py-2 rounded-lg border-l-4 border-primary">
          Awards & <span className="text-gradient-gold">Achievements</span>
        </h2>
        <OrnateDiv className="max-w-xs mb-12" />
      </motion.div>

      <motion.div
        key={`grid-${animationKey}`}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24 max-w-5xl"
        style={{ perspective: "1000px" }}
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        {achievements.map((a, i) => {
          const Icon = a.icon;
          const cardContent = (
            <motion.div
              whileHover={{
                y: -8,
                rotateX: 4,
                boxShadow: "0 18px 40px -16px hsl(42 80% 55% / 0.32)",
                borderColor: "hsl(42 80% 55% / 0.6)",
                transition: { duration: 0.28 },
              }}
              className={`relative p-5 rounded-xl bg-gradient-to-br from-secondary/70 via-secondary/40 to-background/60 border border-border/80 backdrop-blur-sm transition-colors group h-full overflow-hidden ${a.href ? "cursor-pointer hover:border-primary/50" : "cursor-default"}`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(circle_at_top_right,hsl(42_80%_55%_/_0.14),transparent_55%)]" />
              <motion.div
                className="text-2xl mb-4 w-12 h-12 rounded-full border border-primary/25 bg-background/55 flex items-center justify-center shadow-sm"
                whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="w-5 h-5 text-primary" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold text-foreground leading-snug min-h-[4.2rem]">
                {a.title}
              </h3>
              <div className="mt-3 flex items-center justify-between">
                {a.year ? (
                  <p className="text-xs md:text-sm text-muted-foreground border border-border/70 bg-background/45 px-2.5 py-1 rounded-full">
                    {a.year}
                  </p>
                ) : (
                  <span />
                )}
                {a.href && (
                  <span className="text-primary/90 text-xs font-medium tracking-wide">
                    View →
                  </span>
                )}
              </div>
            </motion.div>
          );
          return (
            <motion.div key={i} variants={staggerItemVariants} className="h-full">
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
      </motion.div>
    </section>
  );
};

export default Achievements;
