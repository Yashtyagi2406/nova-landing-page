import { features } from '../../data/features';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ArrowUpRight } from 'lucide-react';

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-24 lg:py-32">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full opacity-30 dark:opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(76, 95, 224, 0.3) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="max-w-xl">
          <Badge tone="indigo">Platform Capabilities</Badge>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            Everything your team needs,{' '}
            <span className="bg-gradient-to-r from-indigo to-indigo-light bg-clip-text text-transparent">
              nothing it doesn't
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            NOVA unifies disconnected spreadsheets, scattered status threads, and complex legacy tooling into a single high-velocity system.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.id}
                className="group relative overflow-hidden transition-all duration-300 hover:border-indigo/40"
              >
                {/* Top subtle highlight gradient on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo/10 text-indigo transition-all duration-300 group-hover:scale-105 group-hover:bg-gradient-to-tr group-hover:from-indigo group-hover:to-indigo-light group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(76,95,224,0.35)]">
                    <Icon className="h-5 w-5 transition-transform duration-300" aria-hidden="true" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-indigo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </div>

                <h3 className="mt-6 font-display text-lg font-semibold text-ink dark:text-paper group-hover:text-indigo dark:group-hover:text-indigo-light transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
