import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref to attach to an element and a boolean that flips to true
 * once the element has entered the viewport. Stays true afterwards so
 * content does not disappear again on scroll-up.
 */
export interface UseOnScreenOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Returns a ref to attach to an element and a boolean that flips to true
 * once the element has entered the viewport. Stays true afterwards so
 * content does not disappear again on scroll-up (unless triggerOnce is false).
 */
export function useOnScreen<T extends HTMLElement>(
  options: number | UseOnScreenOptions = 0.1
) {
  const threshold = typeof options === 'number' ? options : options.threshold ?? 0.1;
  const rootMargin = typeof options === 'object' ? options.rootMargin ?? '0px 0px -80px 0px' : '0px 0px -80px 0px';
  const triggerOnce = typeof options === 'object' ? options.triggerOnce ?? true : true;

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (isVisible && triggerOnce) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, isVisible, triggerOnce]);

  return { ref, isVisible };
}
