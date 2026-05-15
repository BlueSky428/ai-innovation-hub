import { motion } from "framer-motion";
import { BookMarked, Newspaper, type LucideIcon } from "lucide-react";
import MandalaDecor from "./MandalaDecor";
import OrnateDiv from "./OrnateDiv";
import { useSectionAnimate } from "@/hooks/use-section-animate";
import type { SectionId } from "@/contexts/SectionNavigationContext";
import {
  sectionHeaderVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/section-animations";

function InsightSection({
  sectionId,
  id,
  headingPrefix,
  headingGold,
  description,
  href,
  Icon,
  bgClass,
  mandalaClass,
}: {
  sectionId: SectionId;
  id: string;
  headingPrefix?: string;
  headingGold: string;
  description: string;
  href: string;
  Icon: LucideIcon;
  bgClass: string;
  mandalaClass: string;
}) {
  const { ref, isActive, animationKey } = useSectionAnimate(sectionId);

  return (
    <section
      ref={ref}
      className={`px-6 md:px-16 lg:px-24 py-24 relative overflow-visible ${bgClass}`}
      id={id}
    >
      <MandalaDecor className={mandalaClass} size={320} opacity={0.03} />
      <div className="pointer-events-none absolute top-8 -left-12 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-72 h-72 rounded-full bg-[hsl(var(--indian-green))/0.12] blur-3xl" />

      <motion.div
        key={`content-${animationKey}`}
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <motion.div variants={sectionHeaderVariants}>
          <div className="line-accent-tricolor mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight inline-block bg-foreground/5 px-4 py-2 rounded-lg border-l-4 border-primary">
            {headingPrefix ? (
              <>
                {headingPrefix} <span className="text-gradient-gold">{headingGold}</span>
              </>
            ) : (
              <span className="text-gradient-gold">{headingGold}</span>
            )}
          </h2>
          <OrnateDiv className="max-w-xs mb-8" />
        </motion.div>

        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          variants={staggerItemVariants}
          whileHover={{
            y: -6,
            borderColor: "hsl(42 80% 55%)",
            boxShadow: "0 16px 36px -16px hsl(42 80% 55% / 0.28)",
            transition: { duration: 0.2 },
          }}
          className="relative block max-w-3xl p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-secondary/65 via-secondary/35 to-background/70 backdrop-blur-sm transition-all overflow-hidden cursor-pointer no-underline text-inherit"
        >
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(circle_at_top_right,hsl(42_80%_55%_/_0.14),transparent_55%)]" />
          <div className="w-11 h-11 rounded-full border border-primary/25 bg-background/55 flex items-center justify-center mb-4">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <p className="text-secondary-foreground text-base md:text-lg leading-relaxed">{description}</p>
        </motion.a>
      </motion.div>
    </section>
  );
}

const TriviaAndReference = () => {
  return (
    <>
      <InsightSection
        sectionId="trivia"
        id="trivia"
        headingGold="Trivia"
        description="Fasted without food and drink for 120+ hours against the longest serving democratically elected Communist Government in the World."
        href="http://www.humanrights.asia/news/urgent-appeals/UA-108-2005/"
        Icon={Newspaper}
        bgClass="bg-card"
        mandalaClass="-top-20 -right-20"
      />
      <InsightSection
        sectionId="reference"
        id="reference"
        headingGold="Reference"
        description="Swami Suparnananda (Secretary, Ramakrishna Mission Institute of Culture)"
        href="https://sriramakrishna.org"
        Icon={BookMarked}
        bgClass="bg-background"
        mandalaClass="-bottom-24 -left-16"
      />
    </>
  );
};

export default TriviaAndReference;
