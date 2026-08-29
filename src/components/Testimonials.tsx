const testimonials = [
  {
    name: 'Happy Customer',
    location: 'Denpasar',
    rating: 5,
    quote:
      'Placeholder testimonial — replace with a real customer review. The laundry came back clean, fresh, and neatly folded.',
  },
  {
    name: 'Regular Customer',
    location: 'Sanur',
    rating: 5,
    quote:
      'Placeholder testimonial — replace with a real customer review. Fast service and the pickup & delivery is very convenient.',
  },
  {
    name: 'First-Time Customer',
    location: 'Kuta',
    rating: 4,
    quote:
      'Placeholder testimonial — replace with a real customer review. Great experience overall, I will definitely come back again.',
  },
]

type Testimonial = (typeof testimonials)[number]

function getInitials(name: string) {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className={`h-4 w-4 ${index < rating ? 'text-secondary-400' : 'text-slate-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.538 1.118l-3.367-2.446a1 1 0 00-1.176 0l-3.367 2.446c-.783.57-1.838-.196-1.538-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.958z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex w-80 flex-shrink-0 flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm sm:w-96">
      <StarRating rating={testimonial.rating} />
      <p className="mt-4 flex-1 text-sm text-slate-600">"{testimonial.quote}"</p>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary-100 text-sm font-semibold text-secondary-700">
          {getInitials(testimonial.name)}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
          <p className="text-xs text-slate-500">{testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  const loopItems = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="overflow-hidden bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">What Our Customers Say</h2>
        <p className="mt-3 text-slate-600">
          Real experiences from customers who trust FitWash with their laundry.
        </p>
      </div>

      <div className="group relative mt-12 w-screen -translate-x-1/2 overflow-hidden left-1/2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-50 to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-50 to-transparent sm:w-40" />

        <div className="flex w-max gap-6 px-6 [animation:marquee-scroll_32s_linear_infinite] group-hover:[animation-play-state:paused]">
          {loopItems.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
