export const NAVBAR_SCROLL_OFFSET = 88;

let activeScrollFrame: number | null = null;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function cancelSectionScroll() {
  if (activeScrollFrame !== null) {
    cancelAnimationFrame(activeScrollFrame);
    activeScrollFrame = null;
  }
}

export function scrollToSection(sectionId: string): Promise<void> {
  cancelSectionScroll();

  const element = document.getElementById(sectionId);
  if (!element) return Promise.resolve();

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    element.scrollIntoView({ block: "start" });
    return Promise.resolve();
  }

  const startY = window.scrollY;
  const targetY =
    element.getBoundingClientRect().top + window.scrollY - NAVBAR_SCROLL_OFFSET;
  const distance = targetY - startY;
  const duration = Math.min(1000, Math.max(480, Math.abs(distance) * 0.55));
  const startTime = performance.now();

  return new Promise((resolve) => {
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutCubic(progress));

      if (progress < 1) {
        activeScrollFrame = requestAnimationFrame(step);
        return;
      }

      activeScrollFrame = null;
      resolve();
    };

    activeScrollFrame = requestAnimationFrame(step);
  });
}

export function scrollToTop(): Promise<void> {
  cancelSectionScroll();

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    window.scrollTo(0, 0);
    return Promise.resolve();
  }

  const startY = window.scrollY;
  if (startY === 0) return Promise.resolve();

  const duration = Math.min(800, Math.max(400, startY * 0.45));
  const startTime = performance.now();

  return new Promise((resolve) => {
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY * (1 - easeInOutCubic(progress)));

      if (progress < 1) {
        activeScrollFrame = requestAnimationFrame(step);
        return;
      }

      activeScrollFrame = null;
      resolve();
    };

    activeScrollFrame = requestAnimationFrame(step);
  });
}
