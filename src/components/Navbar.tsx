import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useSectionNavigation, type SectionId } from "@/contexts/SectionNavigationContext";

const navItems: { label: string; sectionId: SectionId }[] = [
  { label: "Work Experience", sectionId: "experience" },
  { label: "Education", sectionId: "education" },
  { label: "Achievements", sectionId: "achievements" },
  { label: "Competencies", sectionId: "competencies" },
  { label: "Trivia", sectionId: "trivia" },
  { label: "Reference", sectionId: "reference" },
  { label: "Contact", sectionId: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { activeSection, navigateToSection, navigateToTop } = useSectionNavigation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (sectionId: SectionId) => {
    setMobileOpen(false);
    void navigateToSection(sectionId);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-4 flex items-center justify-between transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => void navigateToTop()}
        className="font-display text-xl font-bold text-foreground hover:text-primary transition-colors"
      >
        J<span className="text-primary">B</span>
      </button>

      {/* Desktop nav */}
      <motion.div
        className="hidden md:flex items-center gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
        }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.sectionId;
          return (
            <motion.button
              key={item.label}
              type="button"
              variants={{
                hidden: { opacity: 0, y: -8 },
                visible: { opacity: 1, y: 0 },
              }}
              onClick={() => handleNavClick(item.sectionId)}
              className={`relative text-sm font-display tracking-widest transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
              {isActive && (
                <motion.span
                  layoutId="nav-active-indicator"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </motion.div>

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
            {navItems.map((item, index) => {
              const isActive = activeSection === item.sectionId;
              return (
                <motion.button
                  key={item.label}
                  type="button"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.35 }}
                  onClick={() => handleNavClick(item.sectionId)}
                  className={`py-3 px-2 text-base font-display tracking-wide text-left border-b border-border/60 transition-colors rounded-sm ${
                    isActive
                      ? "text-primary bg-secondary/40 border-l-2 border-l-primary"
                      : "text-foreground hover:text-primary hover:bg-secondary/30"
                  }`}
                >
                  {item.label}
                </motion.button>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </motion.nav>
  );
};

export default Navbar;
