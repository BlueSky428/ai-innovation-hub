import { motion } from "framer-motion";
import {
  Brain,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Code2,
  Megaphone,
  PhoneCall,
  Users,
  UserSearch,
  type LucideIcon,
} from "lucide-react";
import OrnateDiv from "./OrnateDiv";
import MandalaDecor from "./MandalaDecor";

const competencies = [
  {
    title: "AI Based Solution Sales",
    description: "Maps AI capabilities to business outcomes and value-driven buying decisions.",
    icon: Brain,
  },
  {
    title: "Sales & Strategy",
    description: "Builds scalable GTM plans across pipeline creation, conversion, and retention.",
    icon: BriefcaseBusiness,
  },
  {
    title: "CRM & Lead Qualification",
    description: "Designs structured lead scoring and funnel workflows for predictable growth.",
    icon: UserSearch,
  },
  {
    title: "Social Media & Email Marketing",
    description: "Runs targeted campaigns that improve engagement, response rates, and demand.",
    icon: Megaphone,
  },
  {
    title: "Cold Calling & Client Acquisition",
    description: "Executes high-volume outbound with clear messaging and consultative follow-up.",
    icon: PhoneCall,
  },
  {
    title: "Team Leadership & Coaching",
    description: "Develops high-performing teams through mentoring, accountability, and execution.",
    icon: Users,
  },
  {
    title: "Data Analytics & Machine Learning",
    description: "Uses analytics and ML insights to guide strategy, prioritization, and results.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Computer Programming",
    description:
      "Builds and ships production-grade software across modern web stacks, APIs, data and ML pipelines, GPU and agent workloads, cloud infrastructure, and blockchain integrations, with disciplined testing and delivery.",
    icon: Code2,
  },
] satisfies { title: string; description: string; icon: LucideIcon }[];

const cardVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const Competencies = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 bg-background relative overflow-visible" id="competencies">
      <MandalaDecor className="-top-20 -right-20" size={350} opacity={0.03} />
      <div className="pointer-events-none absolute top-8 -left-12 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-72 h-72 rounded-full bg-[hsl(var(--indian-green))/0.12] blur-3xl" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="line-accent-tricolor mb-6" />
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight inline-block bg-foreground/5 px-4 py-2 rounded-lg border-l-4 border-primary">
          Core <span className="text-gradient-gold">Competencies</span>
        </h2>
        <OrnateDiv className="max-w-xs mb-8" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl">
        {competencies.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{
                y: -6,
                borderColor: "hsl(42 80% 55%)",
                boxShadow: "0 16px 36px -16px hsl(42 80% 55% / 0.28)",
                transition: { duration: 0.2 },
              }}
              className="relative p-6 rounded-xl border border-primary/20 bg-gradient-to-br from-secondary/65 via-secondary/35 to-background/70 backdrop-blur-sm transition-all overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(circle_at_top_right,hsl(42_80%_55%_/_0.14),transparent_55%)]" />
              <div className="w-11 h-11 rounded-full border border-primary/25 bg-background/55 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2 leading-tight">
                {c.title}
              </h3>
              <p className="text-secondary-foreground text-base leading-relaxed">{c.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Competencies;
