import { useState } from 'react'

const plans = [
  {
    title: 'Express 24 Hours',
    description: 'Perfect for everyday laundry with reliable next-day service.',
    price: 'Rp25.000',
    features: [
      '24 Hours Express Service',
      'Free Pickup & Delivery',
      'Complete Wash, Drying & Ironing',
      'Premium Service & Premium Detergent',
      'One Machine, One Customer',
      'Fast & Reliable Processing',
      'Free Pickup & Delivery*',
    ],
  },
  {
    title: 'Express 12 Hours',
    description: 'Fast and convenient for busy schedules.',
    price: 'Rp30.000',
    features: [
      '12 Hours Express Service',
      'Free Pickup & Delivery',
      'Complete Wash, Drying & Ironing',
      'Premium Service & Premium Detergent',
      'One Machine, One Customer',
      'Fast & Reliable Processing',
      'Free Pickup & Delivery*',
    ],
  },
  {
    title: 'Express 9 Hours',
    description: 'Ideal when you need your laundry back the same day.',
    price: 'Rp35.000',
    features: [
      '9 Hours Express Service',
      'Free Pickup & Delivery',
      'Complete Wash, Drying & Ironing',
      'Premium Service & Premium Detergent',
      'One Machine, One Customer',
      'Fast & Reliable Processing',
      'Free Pickup & Delivery*',
    ],
  },
  {
    title: 'Express 6 Hours',
    description: 'Priority express handling for urgent laundry needs.',
    price: 'Rp40.000',
    features: [
      '6 Hours Express Service',
      'Free Pickup & Delivery',
      'Complete Wash, Drying & Ironing',
      'Premium Service & Premium Detergent',
      'One Machine, One Customer',
      'Fast & Reliable Processing',
      'Free Pickup & Delivery*',
    ],
  },
]

const VISIBLE_FEATURES_COUNT = 3

type Plan = (typeof plans)[number]

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary-600"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function PricingCard({ plan }: { plan: Plan }) {
  const [expanded, setExpanded] = useState(false)
  const hiddenCount = plan.features.length - VISIBLE_FEATURES_COUNT
  const visibleFeatures = expanded ? plan.features : plan.features.slice(0, VISIBLE_FEATURES_COUNT)

  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition hover:shadow-md">
      <h3 className="text-lg font-bold text-slate-900">{plan.title}</h3>
      <p className="mt-2 text-sm text-slate-500">{plan.description}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
        <span className="text-sm font-medium text-slate-500">/Kg</span>
      </div>

      <div className="my-6 border-t border-slate-100" />

      <ul className="flex flex-col gap-3">
        {visibleFeatures.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-4 flex items-center gap-1 text-sm font-semibold text-secondary-600 hover:text-secondary-700"
        >
          {expanded ? 'View Less' : `View More (+${hiddenCount})`}
          <ChevronIcon open={expanded} />
        </button>
      )}

      <div className="mt-auto pt-8">
        <a
          href="#contact"
          className="block rounded-full bg-secondary-400 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-secondary-500"
        >
          Choose Plan
        </a>
      </div>
    </div>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Pricing</h2>
          <p className="mt-3 text-slate-600">
            Simple, transparent pricing based on how fast you need your laundry back.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <PricingCard key={plan.title} plan={plan} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          * Terms and conditions apply for free pickup &amp; delivery service.
        </p>
      </div>
    </section>
  )
}

export default Pricing
