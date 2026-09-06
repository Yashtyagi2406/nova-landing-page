import { stats } from '../../data/stats';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export function Statistics() {
  return (
    <section className="bg-ink py-20 text-paper lg:py-24">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center lg:text-left">
              <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-paper/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
