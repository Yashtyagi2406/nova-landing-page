import { useEffect, useState } from 'react';

/**
 * Tracks which section id is currently active in the viewport using getBoundingClientRect,
 * so the navbar can highlight the corresponding link.
 * Returns '' when the user is at the top of the page (Hero section).
 */
export function useScrollSpy(sectionIds: string[], offset = 140): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // When at the top of the page (Hero/landing), no section link should be highlighted
      if (window.scrollY < 250) {
        setActiveId('');
        return;
      }

      // Check if user has scrolled to the very bottom of the page
      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 60;

      let current = '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        // Section is active if its top has scrolled up to the navbar offset zone
        // and its bottom is still below the offset zone
        if (rect.top <= offset && rect.bottom > offset) {
          current = id;
          break;
        }
      }

      // If scrolled to bottom and no section matches exact offset, activate the last visible section
      if (isAtBottom && !current && sectionIds.length > 0) {
        const lastId = sectionIds[sectionIds.length - 1];
        const lastEl = document.getElementById(lastId);
        if (lastEl) {
          const rect = lastEl.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            current = lastId;
          }
        }
      }

      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
