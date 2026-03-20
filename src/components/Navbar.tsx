import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Work Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Competencies", href: "#competencies" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-muted-foreground hover:text-primary text-sm font-display tracking-widest transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile menu */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            className="md:hidden p-2 -mr-2 rounded-md text-foreground hover:bg-secondary/80 hover:text-primary transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" strokeWidth={2} />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[min(100vw,20rem)] border-border bg-background z-[100]">
          <SheetTitle className="sr-only">Site navigation</SheetTitle>
          <nav className="flex flex-col gap-1 mt-10" aria-label="Main">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-2 text-base font-display tracking-wide text-foreground border-b border-border/60 hover:text-primary hover:bg-secondary/30 transition-colors rounded-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </motion.nav>
  );
};

export default Navbar;
