import { RefObject, useEffect, useRef, useState } from "react";

const STEP_MS = 1000;

/**
 * Walks the active index through all steps once when the element scrolls into view.
 * Stops as soon as the user picks a step themselves; skipped for reduced motion.
 */
export function useStepThroughOnView(ref: RefObject<HTMLElement | null>, stepCount: number) {
  const userPickedRef = useRef(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (userPickedRef.current) return;
        let i = 0;
        setActive(0);
        timer = setInterval(() => {
          i++;
          if (i >= stepCount || userPickedRef.current) {
            clearInterval(timer);
            return;
          }
          setActive(i);
        }, STEP_MS);
      },
      { rootMargin: "0px 0px -40% 0px" }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [ref, stepCount]);

  const pick = (i: number) => {
    userPickedRef.current = true;
    setActive(i);
  };

  return { active, pick };
}
