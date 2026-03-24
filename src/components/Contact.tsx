import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import MandalaDecor from "./MandalaDecor";
import OrnateDiv from "./OrnateDiv";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const contactItems: { icon: LucideIcon | typeof WhatsAppIcon; label: string; href?: string }[] = [
  { icon: Mail, label: "bhaduri.jayabrata@gmail.com", href: "mailto:bhaduri.jayabrata@gmail.com" },
  { icon: Phone, label: "+91 91637 62717", href: "tel:+919163762717" },
  { icon: WhatsAppIcon, label: "+91 91637 62717", href: "https://wa.me/919163762717" },
  { icon: Send, label: "@Thehivesoul", href: "https://t.me/Thehivesoul" },
  { icon: MapPin, label: "New Delhi, India", href: undefined },
  { icon: Linkedin, label: "linkedin.com/in/jayabrata-bhaduri", href: "https://www.linkedin.com/in/jayabrata-bhaduri/" },
];

const Contact = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 relative overflow-visible" id="contact">
      <MandalaDecor className="-top-16 -right-16" size={250} opacity={0.04} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <div className="line-accent-tricolor mb-6" />
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-2 text-foreground tracking-tight inline-block bg-foreground/5 px-4 py-2 rounded-lg border-l-4 border-primary">
          Let's <span className="text-gradient-gold">Connect</span>
        </h2>
        <OrnateDiv className="max-w-xs mb-4" />
        <p className="text-secondary-foreground text-lg md:text-xl mb-10 leading-relaxed">
          Open to discussing AI solutions, sales strategy, partnerships, or speaking engagements.
        </p>

        <div className="space-y-5">
          {contactItems.map(({ icon: Icon, label, href }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              className="flex items-center gap-4 group cursor-default"
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
        </div>
      </motion.div>

      {/* Footer with ornate divider */}
      <div className="mt-24 pt-8 border-t border-border relative">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
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
