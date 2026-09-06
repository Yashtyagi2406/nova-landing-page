import { features } from '../../data/features';
import { Card } from '../ui/Card';

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            Everything a team needs, nothing it doesn't
          </h2>
          <p className="mt-4 text-lg text-muted">
            NOVA replaces the spreadsheet, the status-update chat thread, and the tool
            nobody remembers the password for.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.id}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo/10">
                  <Icon className="h-5 w-5 text-indigo" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-paper">
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
