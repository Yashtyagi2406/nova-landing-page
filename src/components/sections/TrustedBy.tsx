import { trustedLogos } from '../../data/logos';

export function TrustedBy() {
  return (
    <section className="border-y border-line dark:border-line-dark bg-white dark:bg-surface-dark py-10">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <p className="text-center text-xs font-medium uppercase tracking-wide text-muted">
          Trusted by teams at
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-6">
          {trustedLogos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center font-display text-sm font-semibold text-ink/30 dark:text-paper/30 grayscale transition-all duration-300 hover:text-ink/70 dark:hover:text-paper/70 hover:grayscale-0"
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
