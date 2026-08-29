import { useState } from 'react'

const faqs = [
  {
    question: "Will my clothes be mixed with other people's clothes?",
    answer:
      'Of course not. We guarantee that each order is processed separately using dedicated equipment to ensure hygiene and prevent loss or mix-ups.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'For your convenience, we accept cash (IDR), local bank transfers, and digital payments such as QRIS.',
  },
  {
    question: 'What if I am not at the villa/hotel when the driver arrives?',
    answer:
      'No problem! You can store your linens at the hotel reception. Just send us the address via WhatsApp.',
  },
  {
    question: 'Is there a minimum order quantity?',
    answer:
      'Yes, the minimum weight for our collection and delivery service is 3 kg. If your laundry weighs less than 3 kg, you will still be charged the 3 kg rate.',
  },
]

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 flex-shrink-0 text-secondary-600 transition-transform duration-300 ${
        open ? 'rotate-180' : ''
      }`}
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

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-slate-100 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-slate-900">{question}</span>
        <ChevronIcon open={open} />
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-slate-600">{answer}</p>
        </div>
      </div>
    </div>
  )
}

function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600">
            Got questions? Here are answers to the things our customers ask most.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
