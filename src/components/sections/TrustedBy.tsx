import { trustedLogos } from '../../data/logos';

export function TrustedBy() {
  // Duplicate 4 times to ensure seamless infinite looping on all screen sizes
  const marqueeItems = [...trustedLogos, ...trustedLogos, ...trustedLogos, ...trustedLogos];

  return (
    <section className="relative overflow-hidden border-y border-line/80 dark:border-white/[0.12] bg-white/80 dark:bg-[#0E111A]/85 backdrop-blur-xl py-9 sm:py-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300">
          Trusted by over 4,000+ forward-thinking teams worldwide
        </p>

        {/* Marquee Container with edge mask */}
        <div className="relative mt-7 overflow-hidden mask-marquee">
          <div className="animate-marquee-infinite items-center gap-12 sm:gap-16 py-2">
            {marqueeItems.map((logo, idx) => (
              <div
                key={`${logo.id}-${idx}`}
                className="flex shrink-0 items-center gap-2.5 font-display text-sm sm:text-base font-semibold tracking-tight text-ink/80 dark:text-slate-200 transition-all duration-300 hover:text-indigo dark:hover:text-white hover:scale-105 cursor-default select-none"
              >
                <span className="h-2 w-2 rounded-full bg-indigo/70 dark:bg-indigo-light shadow-[0_0_8px_rgba(76,95,224,0.6)]" />
                <span className="whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
