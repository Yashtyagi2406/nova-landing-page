import type { ReactNode } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
import { cn } from '../../lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  intensity?: 'normal' | 'strong' | 'subtle';
}

export function ScrollReveal({
  children,
  className,
  delayMs = 0,
  intensity = 'strong',
}: ScrollRevealProps) {
  const { ref, isVisible } = useOnScreen<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -90px 0px',
  });

  const hiddenClasses =
    intensity === 'strong'
      ? 'opacity-0 translate-y-20 sm:translate-y-24 scale-[0.95] blur-sm'
      : intensity === 'normal'
      ? 'opacity-0 translate-y-14 sm:translate-y-16 scale-[0.97] blur-[2px]'
      : 'opacity-0 translate-y-8';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        'transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[transform,opacity,filter] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:filter-none',
        isVisible ? 'opacity-100 translate-y-0 scale-100 blur-none' : hiddenClasses,
        className
      )}
    >
      {children}
    </div>
  );
}
