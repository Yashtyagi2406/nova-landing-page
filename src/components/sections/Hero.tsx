import { ArrowRight, PlayCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { scrollToSection } from '../../lib/utils';

interface HeroProps {
  onWatchDemo: () => void;
}

export function Hero({ onWatchDemo }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          color: '#8B8D98',
          maskImage: 'linear-gradient(to bottom, black, transparent)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-8xl grid-cols-1 gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 lg:px-10">
        <div className="animate-fade-up" style={{ animationDelay: '0ms' }}>
          <div className="flex items-center gap-2 text-xs font-medium text-indigo">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo" />
            Now with automated workload balancing
          </div>

          <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink dark:text-paper sm:text-5xl lg:text-6xl">
            Build better. Work smarter.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            NOVA brings your team's projects, automations, and reporting into one place —
            so work moves forward without waiting on a status update.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => scrollToSection('#final-cta')}>
              Get started free
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button variant="secondary" size="lg" onClick={onWatchDemo}>
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              Watch demo
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-indigo" aria-hidden="true" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-indigo" aria-hidden="true" />
              14-day free trial
            </span>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: '150ms' }}>
          <div className="rounded-2xl border border-line dark:border-line-dark bg-white dark:bg-surface-dark p-5 shadow-[0_30px_60px_-20px_rgba(20,22,28,0.25)]">
            <div className="flex items-center gap-1.5 border-b border-line dark:border-line-dark pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-amber" />
              <span className="h-2.5 w-2.5 rounded-full bg-indigo-light" />
              <span className="h-2.5 w-2.5 rounded-full bg-line dark:bg-line-dark" />
              <span className="ml-3 text-xs text-muted">Sprint 14 — Product Launch</span>
            </div>

            <div className="mt-4 flex flex-col gap-2.5">
              {[
                { name: 'Design final review', status: 'Done', tone: 'bg-indigo/10 text-indigo-dark dark:text-indigo-light' },
                { name: 'API integration testing', status: 'In progress', tone: 'bg-amber/15 text-amber-dark' },
                { name: 'Marketing site copy', status: 'In progress', tone: 'bg-amber/15 text-amber-dark' },
                { name: 'Beta user onboarding', status: 'Blocked', tone: 'bg-ink/5 text-ink/60 dark:bg-paper/10 dark:text-paper/60' },
                { name: 'Launch checklist', status: 'Not started', tone: 'bg-ink/5 text-ink/50 dark:bg-paper/10 dark:text-paper/50' },
              ].map((row) => (
                <div
                  key={row.name}
                  className="flex items-center justify-between rounded-lg border border-line dark:border-line-dark px-3.5 py-2.5"
                >
                  <span className="text-sm text-ink dark:text-paper">{row.name}</span>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${row.tone}`}>
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-line dark:border-line-dark bg-white dark:bg-surface-dark p-4 shadow-lg sm:block">
            <p className="text-xs text-muted">Team velocity</p>
            <p className="mt-1 font-display text-2xl font-semibold text-ink dark:text-paper">
              +38%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
