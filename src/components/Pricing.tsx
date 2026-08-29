import { useState } from 'react'

import { WHATSAPP_URL } from '../lib/contact'

type Plan = {
  id: string
  title: string
  duration: string
  price: string
  badge?: 'Most Popular' | 'Best Seller'
}

const plans: Plan[] = [
  { id: 'express-6', title: 'Express 6 Hours', duration: '6-Hour Express', price: 'Rp60.000' },
  {
    id: 'express-9',
    title: 'Express 9 Hours',
    duration: '9-Hour Express',
    price: 'Rp45.000',
    badge: 'Most Popular',
  },
  {
    id: 'express-12-a',
    title: 'Express 12 Hours',
    duration: '12-Hour Express',
    price: 'Rp35.000',
    badge: 'Best Seller',
  },
  {
    id: 'express-24',
    title: 'Express 24 Hours',
    duration: '24-Hour Express',
    price: 'Rp25.000',
    badge: 'Best Seller',
  },
]

const includedFeatures = [
  {
    label: 'Free Pickup & Delivery',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h9v9h-9v-9zm9 3h3.879a1.5 1.5 0 011.06.44l2.122 2.121a1.5 1.5 0 01.439 1.061v2.128a1.5 1.5 0 01-1.5 1.5h-.75m-9 0h-3a1.5 1.5 0 01-1.5-1.5v-.75m4.5 2.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm9 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      />
    ),
  },
  {
    label: 'Complete Wash, Drying & Ironing',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    ),
  },
  {
    label: 'Premium Service & Premium Detergent',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    ),
  },
  {
    label: 'One Machine, One Customer',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    label: 'Fast & Reliable Processing',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
]

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
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
  const isFeatured = plan.badge === 'Most Popular'

  return (
    <div
      className={`relative flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm transition hover:shadow-md ${
        isFeatured ? 'border-2 border-secondary-400 shadow-md lg:-translate-y-2' : 'border border-slate-100'
      }`}
    >
      {plan.badge && (
        <span
          className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold whitespace-nowrap ${
            isFeatured ? 'bg-secondary-400 text-slate-900' : 'bg-slate-900 text-white'
          }`}
        >
          {plan.badge}
        </span>
      )}

      <h3 className="text-lg font-bold text-slate-900">{plan.title}</h3>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
        <span className="text-sm font-medium text-slate-500">/Kg</span>
      </div>

      <span className="mt-2 text-xs font-semibold tracking-wide text-secondary-600 uppercase">
        {plan.duration}
      </span>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 w-full rounded-full bg-secondary-400 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-secondary-500"
      >
        Booking Now
      </a>
    </div>
  )
}

function Pricing() {
  const [showIncluded, setShowIncluded] = useState(true)

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
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShowIncluded((value) => !value)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 underline decoration-secondary-400 decoration-2 underline-offset-4 transition hover:text-slate-900"
          >
            {showIncluded ? 'Hide what every plan includes' : "See what's included in every plan"}
            <ChevronIcon open={showIncluded} />
          </button>
        </div>

        <div
          className={`grid transition-all duration-500 ease-out ${
            showIncluded ? 'mt-6 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
                {includedFeatures.map((feature) => (
                  <div key={feature.label} className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-secondary-100 text-secondary-600">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.75}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        {feature.icon}
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-slate-700">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
