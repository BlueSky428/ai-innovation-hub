import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { NAVBAR_SCROLL_OFFSET, scrollToSection, scrollToTop } from "@/lib/scroll-to-section";

const SECTION_IDS = [
  "experience",
  "education",
  "achievements",
  "competencies",
  "trivia",
  "reference",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

type SectionNavigationContextValue = {
  activeSection: SectionId | null;
  revealedSection: SectionId | null;
  revealKey: number;
  navigateToSection: (sectionId: SectionId) => void;
  navigateToTop: () => void;
};

const SectionNavigationContext = createContext<SectionNavigationContextValue | null>(null);

export function SectionNavigationProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const [revealedSection, setRevealedSection] = useState<SectionId | null>(null);
  const [revealKey, setRevealKey] = useState(0);
  const isNavigatingRef = useRef(false);

  const navigateToSection = useCallback(async (sectionId: SectionId) => {
    isNavigatingRef.current = true;
    window.history.pushState(null, "", `#${sectionId}`);
    setActiveSection(sectionId);

    await scrollToSection(sectionId);

    setRevealedSection(sectionId);
    setRevealKey((key) => key + 1);
    isNavigatingRef.current = false;
  }, []);

  const navigateToTop = useCallback(async () => {
    isNavigatingRef.current = true;
    window.history.pushState(null, "", window.location.pathname);
    setActiveSection(null);
    setRevealedSection(null);

    await scrollToTop();
    isNavigatingRef.current = false;
  }, []);

  useEffect(() => {
    let frameId = 0;

    const updateActiveSectionFromScroll = () => {
      if (isNavigatingRef.current) return;

      // Hero area — no section highlighted
      if (window.scrollY < 80) {
        setActiveSection(null);
        return;
      }

      const marker = NAVBAR_SCROLL_OFFSET + 40;
      let current: SectionId | null = null;

      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);
        if (!element) continue;

        const { top } = element.getBoundingClientRect();
        if (top <= marker) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSectionFromScroll);
    };

    updateActiveSectionFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1) as SectionId;
    if (!hash || !SECTION_IDS.includes(hash)) return;

    const timer = window.setTimeout(() => {
      void navigateToSection(hash);
    }, 150);

    return () => window.clearTimeout(timer);
  }, [navigateToSection]);

  const value = useMemo(
    () => ({
      activeSection,
      revealedSection,
      revealKey,
      navigateToSection,
      navigateToTop,
    }),
    [activeSection, revealedSection, revealKey, navigateToSection, navigateToTop],
  );

  return (
    <SectionNavigationContext.Provider value={value}>
      {children}
    </SectionNavigationContext.Provider>
  );
}

export function useSectionNavigation() {
  const context = useContext(SectionNavigationContext);
  if (!context) {
    throw new Error("useSectionNavigation must be used within SectionNavigationProvider");
  }
  return context;
}
