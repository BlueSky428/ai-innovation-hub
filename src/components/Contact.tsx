import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Globe, Mail, Linkedin, Send } from "lucide-react";
import MandalaDecor from "./MandalaDecor";
import OrnateDiv from "./OrnateDiv";
import { useSectionAnimate } from "@/hooks/use-section-animate";
import {
  sectionHeaderVariants,
  staggerContainerVariants,
  slideInLeftVariants,
} from "@/lib/section-animations";

const contactItems: { icon: LucideIcon; label: string; href?: string }[] = [
  { icon: Mail, label: "ceo@capa.cloud", href: "mailto:ceo@capa.cloud" },
  { icon: Globe, label: "defense.codes — supply chain risk intelligence", href: "https://defense.codes/" },
  { icon: Send, label: "@Thehivesoul", href: "https://t.me/Thehivesoul" },
  { icon: Linkedin, label: "linkedin.com/in/jay-bhaduri", href: "https://www.linkedin.com/in/jay-bhaduri/" },
];

const Contact = () => {
  const { ref, isActive, animationKey } = useSectionAnimate("contact");

  return (
    <section
      ref={ref}
      className="px-6 md:px-16 lg:px-24 py-24 relative overflow-visible"
      id="contact"
    >
      <MandalaDecor className="-top-16 -right-16" size={250} opacity={0.04} />

      <motion.div
        key={`content-${animationKey}`}
        className="max-w-2xl"
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
      >
        <motion.div variants={sectionHeaderVariants} className="mb-10">
          <div className="line-accent-tricolor mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-2 text-foreground tracking-tight inline-block bg-foreground/5 px-4 py-2 rounded-lg border-l-4 border-primary">
            Let's <span className="text-gradient-gold">Connect</span>
          </h2>
          <OrnateDiv className="max-w-xs mb-4" />
          <p className="text-secondary-foreground text-lg md:text-xl leading-relaxed">
            Open to discussing AI solutions, sales strategy, partnerships, or speaking engagements.
          </p>
        </motion.div>

        {contactItems.map(({ icon: Icon, label, href }, i) => (
            <motion.div
              key={i}
              variants={slideInLeftVariants}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              className="flex items-center gap-4 group cursor-default mb-5 last:mb-0"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                <Icon className="w-5 h-5 text-primary shrink-0 group-hover:drop-shadow-[0_0_6px_hsl(42_80%_55%_/_0.5)] transition-all" />
              </motion.div>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-secondary-foreground hover:text-primary transition-colors text-base"
                >
                  {label}
                </a>
              ) : (
                <span className="text-secondary-foreground text-base">{label}</span>
              )}
            </motion.div>
          ))}
      </motion.div>

      <div className="mt-24 pt-8 border-t border-border relative">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-center"
        />
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Jayabrata Bhaduri. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
