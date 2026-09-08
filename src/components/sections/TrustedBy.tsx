import { trustedLogos } from '../../data/logos';

export function TrustedBy() {
  // Duplicate 4 times to ensure seamless infinite looping on all screen sizes
  const marqueeItems = [...trustedLogos, ...trustedLogos, ...trustedLogos, ...trustedLogos];

  return (
    <section className="relative overflow-hidden border-y border-line/80 dark:border-white/10 bg-white/60 dark:bg-surface-dark/60 backdrop-blur-md py-8">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted/80">
          Trusted by over 4,000+ forward-thinking teams worldwide
        </p>

        {/* Marquee Container with edge mask */}
        <div className="relative mt-6 overflow-hidden mask-marquee">
          <div className="animate-marquee-infinite items-center gap-12 sm:gap-16 py-2">
            {marqueeItems.map((logo, idx) => (
              <div
                key={`${logo.id}-${idx}`}
                className="flex shrink-0 items-center gap-2 font-display text-sm font-semibold tracking-tight text-ink/40 dark:text-paper/40 transition-colors duration-300 hover:text-indigo dark:hover:text-indigo-light cursor-default select-none"
              >
                <span className="h-2 w-2 rounded-full bg-indigo/40" />
                <span className="whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
