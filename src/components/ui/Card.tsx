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
        'rounded-2xl border border-line dark:border-line-dark bg-white dark:bg-surface-dark p-6 transition-all duration-300 ease-out',
        hoverLift &&
          'hover:-translate-y-1 hover:border-indigo/30 hover:shadow-[0_12px_32px_-12px_rgba(76,95,224,0.25)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
