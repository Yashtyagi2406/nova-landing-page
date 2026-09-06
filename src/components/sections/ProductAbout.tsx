import { CheckCircle2 } from 'lucide-react';
import { Badge } from '../ui/Badge';

const points = [
  'One workspace for tasks, timelines, files, and decisions',
  'Automation rules that run without an engineer to maintain them',
  'Reporting your leadership can actually trust',
];

export function ProductAbout() {
  return (
    <section id="product-about" className="border-y border-line dark:border-line-dark bg-white dark:bg-surface-dark py-24 lg:py-32">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <Badge tone="amber">Why teams switch to NOVA</Badge>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            One workspace, instead of five disconnected tools
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Most teams don't lose time doing the work — they lose it reconciling five
            different tools that don't talk to each other. NOVA puts planning,
            automation, and reporting on the same record, so a change in one place is a
            change everywhere.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo" aria-hidden="true" />
                <span className="text-ink dark:text-paper">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-line dark:border-line-dark bg-paper dark:bg-ink p-6">
            <div className="grid grid-cols-3 gap-3">
              {['Planning', 'Automation', 'Reporting'].map((label, i) => (
                <div
                  key={label}
                  className="rounded-xl border border-line dark:border-line-dark bg-white dark:bg-surface-dark p-4 text-center"
                >
                  <div
                    className="mx-auto h-8 w-8 rounded-lg"
                    style={{
                      backgroundColor: i === 0 ? '#4C5FE0' : i === 1 ? '#E8A33D' : '#8B8D98',
                      opacity: 0.15,
                    }}
                  />
                  <p className="mt-3 text-xs font-medium text-ink dark:text-paper">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2.5">
              <div className="h-2 w-full rounded-full bg-line dark:bg-line-dark">
                <div className="h-2 w-3/4 rounded-full bg-indigo" />
              </div>
              <div className="h-2 w-full rounded-full bg-line dark:bg-line-dark">
                <div className="h-2 w-1/2 rounded-full bg-amber" />
              </div>
              <div className="h-2 w-full rounded-full bg-line dark:bg-line-dark">
                <div className="h-2 w-5/6 rounded-full bg-muted" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
