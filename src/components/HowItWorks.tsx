import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Book Your Order',
    description: 'Contact us via WhatsApp or visit our store to schedule your laundry pickup.',
  },
  {
    number: '02',
    title: 'Pickup or Drop-off',
    description: 'We pick up your laundry at your doorstep, or you can drop it off directly at our store.',
  },
  {
    number: '03',
    title: 'Wash, Dry & Iron',
    description: 'Your clothes are carefully washed with premium detergent, dried, and neatly ironed.',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Freshly cleaned and neatly folded laundry delivered right back to you, on time.',
  },
]

const STEP_INTERVAL_MS = 2500

function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length)
    }, STEP_INTERVAL_MS)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section id="how-it-works" ref={sectionRef} className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div
          className={`text-center transition-all duration-700 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">How It Works</h2>
          <p className="mt-3 text-slate-600">
            Getting your laundry done with us is quick and easy — just follow these simple steps.
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="absolute top-8 right-0 left-0 hidden border-t-2 border-dashed border-slate-200 lg:block" />
          <div
            className="absolute top-8 left-0 hidden h-0.5 bg-secondary-400 transition-all duration-1000 ease-in-out lg:block"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />

          {steps.map((step, index) => {
            const isActive = index === activeStep

            return (
              <div
                key={step.number}
                className={`relative flex flex-col items-center text-center transition-all duration-700 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: isVisible ? `${150 + index * 150}ms` : '0ms' }}
              >
                <div
                  className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold ring-4 ring-slate-50 transition-all duration-700 ${
                    isActive
                      ? 'scale-110 bg-secondary-400 text-slate-900 shadow-lg'
                      : 'bg-white text-slate-400 shadow-md'
                  }`}
                >
                  {step.number}
                </div>
                <h3
                  className={`mt-4 font-semibold transition-opacity duration-700 ${
                    isActive ? 'text-slate-900 opacity-100' : 'text-slate-900 opacity-70'
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`mt-2 text-sm text-slate-600 transition-opacity duration-700 ${
                    isActive ? 'opacity-100' : 'opacity-70'
                  }`}
                >
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
