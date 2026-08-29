const reasons = [
  {
    title: 'Fast Turnaround',
    description: 'Express service starting from as fast as 6 hours, so you never run out of clean clothes.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: 'Premium Detergent',
    description: 'Every load is washed with premium detergent for a clean, fresh, and long-lasting scent.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    ),
  },
  {
    title: 'One Machine, One Customer',
    description: 'Your laundry is never mixed with others, ensuring a fully hygienic wash every time.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: 'Free Pickup & Delivery',
    description: 'Sit back and relax, we pick up and deliver your laundry right to your door.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v11.177m0-11.177L12 4.5 7.5 7.573m9 11.177H12m-4.5 0H3.375c-.621 0-1.129-.504-1.09-1.124a17.9 17.9 0 013.213-9.193 2.056 2.056 0 011.58-.86H9.75"
      />
    ),
  },
]

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="overflow-hidden bg-white px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="absolute -bottom-6 -left-6 -z-10 h-48 w-48 rounded-2xl bg-secondary-400/30 blur-2xl" />
          <img
            src="/image-fitwashlaundry.webp"
            alt="FitWash Laundry Bali staff handing over freshly cleaned laundry"
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Why Choose Us</h2>
          <p className="mt-3 text-slate-600">
            What makes FitWash Laundry the trusted choice for your everyday laundry needs.
          </p>

          <div className="mt-8 flex flex-col gap-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-secondary-100 text-secondary-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {reason.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{reason.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
