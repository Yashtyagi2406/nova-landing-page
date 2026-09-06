import { steps } from '../../data/steps';
import { Badge } from '../ui/Badge';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="max-w-xl">
          <Badge tone="indigo">Seamless Onboarding</Badge>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            From signup to shipped,{' '}
            <span className="bg-gradient-to-r from-indigo to-indigo-light bg-clip-text text-transparent">
              in four simple steps
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            No massive implementation teams or weeks of training required. Most teams are fully onboarded and shipping in an afternoon.
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.id}
              className="group relative rounded-2xl border border-line/80 dark:border-white/10 bg-white/70 dark:bg-surface-dark/70 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo/40 hover:shadow-[0_12px_30px_-10px_rgba(76,95,224,0.2)]"
            >
              {/* Connector line for desktop */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-[calc(100%-8px)] w-8 h-[2px] bg-gradient-to-r from-indigo/40 to-transparent z-10 pointer-events-none"
                  aria-hidden="true"
                />
              )}

              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo/30 bg-indigo/10 font-display text-sm font-bold text-indigo transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-indigo group-hover:to-indigo-light group-hover:text-white group-hover:shadow-[0_0_16px_rgba(76,95,224,0.4)]">
                  0{i + 1}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted/60">
                  Step 0{i + 1}
                </span>
              </div>

              <h3 className="mt-6 font-display text-lg font-semibold text-ink dark:text-paper group-hover:text-indigo dark:group-hover:text-indigo-light transition-colors">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
