import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Competencies", href: "#competencies" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-4 flex items-center justify-between transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <a href="#" className="font-display text-xl font-bold text-foreground">
        J<span className="text-primary">B</span>
      </a>
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="hidden md:block text-muted-foreground hover:text-primary text-sm font-display tracking-widest transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
