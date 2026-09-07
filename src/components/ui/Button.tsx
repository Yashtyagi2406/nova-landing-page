import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
  children: ReactNode;
}

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'relative overflow-hidden bg-indigo hover:bg-indigo-light text-white font-medium shadow-[0_2px_10px_rgba(76,95,224,0.3)] hover:shadow-[0_4px_20px_rgba(76,95,224,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
  secondary:
    'bg-white/80 dark:bg-white/[0.06] backdrop-blur-xl text-ink dark:text-slate-200 border border-line/80 dark:border-white/[0.12] hover:border-indigo/40 dark:hover:border-white/25 hover:bg-white dark:hover:bg-white/[0.1] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-xs hover:shadow-sm',
  ghost: 'bg-transparent text-ink dark:text-paper hover:bg-ink/5 dark:hover:bg-paper/10 active:scale-[0.98]',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-display font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:focus-visible:ring-offset-ink disabled:opacity-50 disabled:pointer-events-none',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
