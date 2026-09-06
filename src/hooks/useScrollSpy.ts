import { useEffect, useState } from 'react';

/**
 * Tracks which section id is currently most visible in the viewport,
 * so the navbar can highlight the corresponding link.
 */
export function useScrollSpy(sectionIds: string[], offset = 120): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset;
      let current = sectionIds[0] ?? '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
