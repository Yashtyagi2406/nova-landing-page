import { useEffect, useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
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
      {/* Glow behind testimonial card */}
      <div
        className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo/20 via-indigo/10 to-amber/20 blur-xl opacity-60 dark:opacity-30 -z-10"
        aria-hidden="true"
      />

      <div className="relative rounded-2xl border border-line/80 dark:border-white/10 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-xl p-8 sm:p-12 shadow-[0_20px_50px_-15px_rgba(20,22,28,0.1)] dark:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber text-amber" aria-hidden="true" />
            ))}
          </div>
          <Quote className="h-8 w-8 text-indigo/20 dark:text-indigo-light/20" aria-hidden="true" />
        </div>

        <p
          key={active.id}
          className="mt-6 animate-fade-up text-lg sm:text-xl leading-relaxed text-ink dark:text-paper font-display"
        >
          "{active.quote}"
        </p>

        <div className="mt-8 flex items-center gap-3.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-indigo to-indigo-light p-[2px] shadow-sm">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-surface-dark text-xs font-bold text-indigo dark:text-indigo-light">
              {active.initials}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink dark:text-paper">{active.name}</p>
            <p className="text-xs sm:text-sm text-muted">
              {active.role}, <span className="text-ink/80 dark:text-paper/80 font-medium">{active.company}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => goTo(i)}
              aria-label={`Show testimonial from ${t.name}`}
              aria-current={i === index}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                i === index ? 'w-8 bg-indigo shadow-[0_0_8px_rgba(76,95,224,0.5)]' : 'w-2 bg-ink/15 dark:bg-paper/20 hover:bg-ink/30'
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line/80 dark:border-white/10 bg-white/80 dark:bg-surface-dark/80 hover:border-indigo/40 hover:text-indigo transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo shadow-xs"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line/80 dark:border-white/10 bg-white/80 dark:bg-surface-dark/80 hover:border-indigo/40 hover:text-indigo transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo shadow-xs"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
