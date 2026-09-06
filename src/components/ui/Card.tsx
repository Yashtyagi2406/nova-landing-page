import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverLift?: boolean;
}

export function Card({ children, className, hoverLift = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'group relative rounded-2xl border border-line/80 dark:border-white/10 bg-white/80 dark:bg-surface-dark/80 backdrop-blur-xl p-6 transition-all duration-300 ease-out shadow-[0_4px_20px_-4px_rgba(20,22,28,0.05)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)]',
        hoverLift &&
          'hover:-translate-y-1.5 hover:border-indigo/40 hover:shadow-[0_16px_36px_-12px_rgba(76,95,224,0.22)] dark:hover:shadow-[0_16px_36px_-12px_rgba(76,95,224,0.35)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
