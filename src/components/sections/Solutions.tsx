import { useState } from 'react';
import { solutions } from '../../data/solutions';
import { cn } from '../../lib/utils';
import { CheckCircle2 } from 'lucide-react';

export function Solutions() {
  const [activeId, setActiveId] = useState(solutions[0].id);
  const active = solutions.find((s) => s.id === activeId) ?? solutions[0];

  return (
    <section id="solutions" className="border-y border-line dark:border-line-dark bg-white dark:bg-surface-dark py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            Built around how your team already works
          </h2>
          <p className="mt-4 text-lg text-muted">
            The same workspace, tuned to the workflow each team actually runs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
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
                  'whitespace-nowrap rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo',
                  activeId === s.id
                    ? 'bg-indigo/10 text-indigo-dark dark:text-indigo-light'
                    : 'text-muted hover:bg-ink/5 dark:hover:bg-paper/5'
                )}
              >
                {s.team}
              </button>
            ))}
          </div>

          <div
            key={active.id}
            id={`solution-panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`solution-tab-${active.id}`}
            tabIndex={0}
            className="animate-fade-up rounded-2xl border border-line dark:border-line-dark p-8 lg:p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo"
          >
            <h3 className="font-display text-2xl font-semibold text-ink dark:text-paper">
              {active.headline}
            </h3>
            <p className="mt-4 max-w-2xl text-muted leading-relaxed">{active.description}</p>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {active.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-ink dark:text-paper">
                  <CheckCircle2 className="h-4 w-4 text-indigo" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
