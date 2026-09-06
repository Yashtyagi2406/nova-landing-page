import { cn } from '../../lib/utils';

interface PricingToggleProps {
  isAnnual: boolean;
  onChange: (isAnnual: boolean) => void;
}

export function PricingToggle({ isAnnual, onChange }: PricingToggleProps) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-line dark:border-line-dark bg-white dark:bg-surface-dark p-1.5">
      <button
        onClick={() => onChange(false)}
        aria-pressed={!isAnnual}
        className={cn(
          'rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-1',
          !isAnnual ? 'bg-ink text-paper dark:bg-paper dark:text-ink' : 'text-muted'
        )}
      >
        Monthly
      </button>
      <button
        onClick={() => onChange(true)}
        aria-pressed={isAnnual}
        className={cn(
          'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-1',
          isAnnual ? 'bg-ink text-paper dark:bg-paper dark:text-ink' : 'text-muted'
        )}
      >
        Annual
        <span className="rounded-full bg-amber/20 px-2 py-0.5 text-xs font-semibold text-amber-dark">
          Save 20%
        </span>
      </button>
    </div>
  );
}
