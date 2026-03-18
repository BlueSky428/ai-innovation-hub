import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <div className="line-accent mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Let's <span className="text-gradient-gold">Connect</span>
        </h2>
        <p className="text-secondary-foreground mb-10 leading-relaxed">
          Open to discussing AI solutions, sales strategy, partnerships, or speaking engagements.
        </p>

        <div className="space-y-5">
          {[
            { icon: Mail, label: "bhaduri.jayabrata@gmail.com", href: "mailto:bhaduri.jayabrata@gmail.com" },
            { icon: Phone, label: "(+91) 9163762717", href: "tel:+919163762717" },
            { icon: MapPin, label: "Gurugram, India", href: undefined },
            { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/jayabrata-bhaduri/" },
          ].map(({ icon: Icon, label, href }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <Icon className="w-5 h-5 text-primary shrink-0" />
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-secondary-foreground hover:text-primary transition-colors text-sm"
                >
                  {label}
                </a>
              ) : (
                <span className="text-secondary-foreground text-sm">{label}</span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border">
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Jayabrata Bhaduri. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
