import { stats } from '../../data/stats';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export function Statistics() {
  return (
    <section className="relative overflow-hidden bg-[#0D0F14] py-24 text-paper lg:py-28">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(76, 95, 224, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(232, 163, 61, 0.15) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-10 sm:gap-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              className="relative text-center lg:text-left"
            >
              {/* Vertical subtle divider for desktop */}
              {i > 0 && (
                <div
                  className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-white/10"
                  aria-hidden="true"
                />
              )}

              <p className="font-display text-4xl font-bold tracking-tight bg-gradient-to-r from-white via-paper to-indigo-light bg-clip-text text-transparent sm:text-5xl lg:text-6xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium text-paper/70 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
