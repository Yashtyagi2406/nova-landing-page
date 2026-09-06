import { testimonials } from '../../data/testimonials';
import { TestimonialCarousel } from '../ui/TestimonialCarousel';
import { Badge } from '../ui/Badge';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="max-w-xl">
          <Badge tone="indigo">Customer Stories</Badge>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            Teams that stopped guessing{' '}
            <span className="bg-gradient-to-r from-indigo to-indigo-light bg-clip-text text-transparent">
              where things stood
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
