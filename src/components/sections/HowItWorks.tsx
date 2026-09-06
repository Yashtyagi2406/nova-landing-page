import { steps } from '../../data/steps';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            From signup to shipped, in four steps
          </h2>
          <p className="mt-4 text-lg text-muted">
            No implementation team required. Most teams are fully set up in an
            afternoon.
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.id} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-indigo/30 font-display text-sm font-semibold text-indigo">
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-line dark:bg-line-dark lg:block" />
                )}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-paper">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
