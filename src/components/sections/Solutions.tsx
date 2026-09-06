import { useState } from 'react';
import { solutions } from '../../data/solutions';
import { cn } from '../../lib/utils';
import { CheckCircle2, Layers } from 'lucide-react';
import { Badge } from '../ui/Badge';

export function Solutions() {
  const [activeId, setActiveId] = useState(solutions[0].id);
  const active = solutions.find((s) => s.id === activeId) ?? solutions[0];

  return (
    <section id="solutions" className="relative overflow-hidden border-y border-line/80 dark:border-white/10 bg-white/70 dark:bg-surface-dark/70 backdrop-blur-xl py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="max-w-xl">
          <Badge tone="indigo">Tailored Workflows</Badge>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            Built around how your team{' '}
            <span className="bg-gradient-to-r from-indigo to-indigo-light bg-clip-text text-transparent">
              already works
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            The same unified workspace, dynamically configured to match the exact operational cadence of your department.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
          <div
            role="tablist"
            aria-label="Team solutions"
            className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {solutions.map((s) => (
              <button
                key={s.id}
                id={`solution-tab-${s.id}`}
                role="tab"
                aria-selected={activeId === s.id}
                aria-controls={`solution-panel-${s.id}`}
                tabIndex={activeId === s.id ? 0 : -1}
                onClick={() => setActiveId(s.id)}
                onKeyDown={(e) => {
                  const ids = solutions.map((sol) => sol.id);
                  const idx = ids.indexOf(s.id);
                  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                    e.preventDefault();
                    const next = ids[(idx + 1) % ids.length];
                    setActiveId(next);
                    document.getElementById(`solution-tab-${next}`)?.focus();
                  } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const prev = ids[(idx - 1 + ids.length) % ids.length];
                    setActiveId(prev);
                    document.getElementById(`solution-tab-${prev}`)?.focus();
                  }
                }}
                className={cn(
                  'whitespace-nowrap rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo',
                  activeId === s.id
                    ? 'bg-indigo/10 text-indigo font-semibold border border-indigo/20 shadow-xs'
                    : 'text-muted hover:bg-ink/5 dark:hover:bg-paper/5 border border-transparent'
                )}
              >
                <div className="flex items-center justify-between">
                  <span>{s.team}</span>
                  {activeId === s.id && (
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo" />
                  )}
                </div>
              </button>
            ))}
          </div>

          <div
            key={active.id}
            id={`solution-panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`solution-tab-${active.id}`}
            tabIndex={0}
            className="animate-fade-up rounded-2xl border border-line/80 dark:border-white/10 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-xl p-8 lg:p-10 shadow-[0_16px_40px_-15px_rgba(20,22,28,0.1)] dark:shadow-[0_16px_40px_-15px_rgba(0,0,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo"
          >
            <div className="flex items-center gap-2 text-indigo">
              <Layers className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-wider">Department Blueprint</span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-semibold text-ink dark:text-paper sm:text-3xl">
              {active.headline}
            </h3>
            <p className="mt-4 max-w-2xl text-muted leading-relaxed text-base">{active.description}</p>

            <div className="mt-8 border-t border-line/80 dark:border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
                Core Capabilities & Automations
              </p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {active.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 rounded-xl border border-line/60 dark:border-white/5 bg-paper/50 dark:bg-ink/30 px-3.5 py-2.5 text-sm font-medium text-ink dark:text-paper"
                  >
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo/10 text-indigo">
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
