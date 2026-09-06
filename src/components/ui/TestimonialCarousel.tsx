import { useEffect, useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import type { Testimonial } from '../../types';
import { cn } from '../../lib/utils';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoRotateMs?: number;
}

export function TestimonialCarousel({
  testimonials,
  autoRotateMs = 6000,
}: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (i: number) => setIndex((i + testimonials.length) % testimonials.length),
    [testimonials.length]
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, autoRotateMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, autoRotateMs, testimonials.length]);

  const active = testimonials[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
    >
      <div className="rounded-2xl border border-line dark:border-line-dark bg-white dark:bg-surface-dark p-8 sm:p-12">
        <Quote className="h-8 w-8 text-indigo/40" aria-hidden="true" />
        <p
          key={active.id}
          className="mt-6 animate-fade-up text-lg sm:text-xl leading-relaxed text-ink dark:text-paper font-display"
        >
          {active.quote}
        </p>
        <div className="mt-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo/10 text-sm font-semibold text-indigo-dark dark:text-indigo-light">
            {active.initials}
          </div>
          <div>
            <p className="text-sm font-medium text-ink dark:text-paper">{active.name}</p>
            <p className="text-sm text-muted">
              {active.role}, {active.company}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => goTo(i)}
              aria-label={`Show testimonial from ${t.name}`}
              aria-current={i === index}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                i === index ? 'w-6 bg-indigo' : 'w-2 bg-ink/15 dark:bg-paper/20'
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-line-dark hover:border-indigo/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-line-dark hover:border-indigo/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
