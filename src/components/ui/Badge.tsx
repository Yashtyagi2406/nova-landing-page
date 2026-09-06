import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: ReactNode;
  tone?: 'indigo' | 'amber' | 'neutral';
  className?: string;
}

const toneClasses: Record<NonNullable<BadgeProps['tone']>, string> = {
  indigo: 'bg-indigo/10 text-indigo-dark dark:text-indigo-light',
  amber: 'bg-amber/15 text-amber-dark',
  neutral: 'bg-ink/5 text-ink/70 dark:bg-paper/10 dark:text-paper/70',
};

export function Badge({ children, tone = 'indigo', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
