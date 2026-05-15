import { useInView } from "framer-motion";
import { useRef } from "react";
import { useSectionNavigation, type SectionId } from "@/contexts/SectionNavigationContext";

export function useSectionAnimate(sectionId: SectionId) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });
  const { revealedSection, revealKey } = useSectionNavigation();

  const isNavReveal = revealedSection === sectionId;
  const isActive = isInView || isNavReveal;
  const animationKey = isNavReveal ? revealKey : 0;

  return { ref, isActive, animationKey };
}
