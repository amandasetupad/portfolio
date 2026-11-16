import { useEffect } from "react";

export function useReveal(dependency) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    if (!nodes.length) return undefined;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) {
      nodes.forEach((node) => node.classList.add("in"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [dependency]);
}
