import { testimonials } from '../../data/testimonials';
import { TestimonialCarousel } from '../ui/TestimonialCarousel';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            Teams that stopped guessing where things stood
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
