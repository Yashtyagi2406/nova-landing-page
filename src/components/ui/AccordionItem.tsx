import { useRef, useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '../../lib/utils';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}

export function AccordionItem({ question, answer, isOpen, onToggle, id }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | 'auto'>(isOpen ? 'auto' : 0);

  useEffect(() => {
    if (!contentRef.current) return;
    if (isOpen) {
      // Animate to scrollHeight then switch to 'auto' so it adapts if content changes
      const h = contentRef.current.scrollHeight;
      setHeight(h);
      const timer = setTimeout(() => setHeight('auto'), 300);
      return () => clearTimeout(timer);
    } else {
      // Snap from 'auto' to a concrete pixel value first so the transition can animate
      const h = contentRef.current.scrollHeight;
      setHeight(h);
      // On next frame, collapse to 0
      const raf = requestAnimationFrame(() => setHeight(0));
      return () => cancelAnimationFrame(raf);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-line dark:border-line-dark">
      <h3>
        <button
          id={`faq-header-${id}`}
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${id}`}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded-md"
        >
          <span className="font-display text-base font-medium text-ink dark:text-paper">
            {question}
          </span>
          <Plus
            className={cn(
              'h-5 w-5 flex-shrink-0 text-indigo transition-transform duration-300 ease-out',
              isOpen && 'rotate-45'
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-header-${id}`}
        ref={contentRef}
        style={{ height: height === 'auto' ? 'auto' : `${height}px` }}
        className="overflow-hidden transition-[height] duration-300 ease-out"
      >
        <p className="pb-5 pr-10 text-sm leading-relaxed text-muted">{answer}</p>
      </div>
    </div>
  );
}
